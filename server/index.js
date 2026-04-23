/**
 * server/index.js  — ES Module syntax (matches root "type":"module")
 *
 * POST /api/contact   → saves message to server/data/messages.json
 * GET  /api/messages  → returns all messages (Bearer token required)
 * GET  /health        → health check
 */

import express  from 'express'
import cors     from 'cors'
import fs       from 'fs'
import path     from 'path'
import crypto   from 'crypto'
import { fileURLToPath } from 'url'
import dotenv   from 'dotenv'

// __dirname is not available in ES modules — recreate it
const __filename = fileURLToPath(import.meta.url)
const __dirname  = path.dirname(__filename)

// Load server/.env
dotenv.config({ path: path.join(__dirname, '.env') })

const app  = express()
const PORT = process.env.PORT || 3001

// ── File paths ────────────────────────────────────────────
const DATA_DIR      = path.join(__dirname, 'data')
const MESSAGES_FILE = path.join(DATA_DIR, 'messages.json')

if (!fs.existsSync(DATA_DIR))      fs.mkdirSync(DATA_DIR, { recursive: true })
if (!fs.existsSync(MESSAGES_FILE)) fs.writeFileSync(MESSAGES_FILE, '[]', 'utf8')

// ── Middleware ────────────────────────────────────────────
app.use(express.json())

const ALLOWED = [
  'http://localhost:5173',
  'http://localhost:4173',
  process.env.ALLOWED_ORIGIN,
].filter(Boolean)

app.use(cors({
  origin: (origin, cb) => {
    // No origin = server-to-server (Vite proxy) — always allow
    if (!origin || ALLOWED.includes(origin)) return cb(null, true)
    cb(new Error('CORS blocked: ' + origin))
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}))

// ── Rate limiter (5 requests / IP / 10 min) ───────────────
const hits = new Map()
function rateLimiter(req, res, next) {
  const ip  = req.ip || 'unknown'
  const now = Date.now()
  const prev = (hits.get(ip) || []).filter(t => now - t < 600_000)
  prev.push(now)
  hits.set(ip, prev)
  if (prev.length > 5) {
    return res.status(429).json({ error: 'Too many requests. Please wait a few minutes.' })
  }
  next()
}

// ── Auth guard ────────────────────────────────────────────
function requireAuth(req, res, next) {
  const token    = (req.headers.authorization || '').replace('Bearer ', '').trim()
  const expected = (process.env.ACCESS_TOKEN || '').trim()

  if (!expected) {
    return res.status(500).json({ error: 'ACCESS_TOKEN not set in server/.env' })
  }
  if (!token) {
    return res.status(401).json({ error: 'Missing Authorization header.' })
  }
  try {
    const a = Buffer.from(token.padEnd(64).slice(0, 64))
    const b = Buffer.from(expected.padEnd(64).slice(0, 64))
    if (!crypto.timingSafeEqual(a, b) || token !== expected) {
      return res.status(401).json({ error: 'Invalid token.' })
    }
  } catch {
    return res.status(401).json({ error: 'Invalid token.' })
  }
  next()
}

// ── Helpers ───────────────────────────────────────────────
function readMessages() {
  try { return JSON.parse(fs.readFileSync(MESSAGES_FILE, 'utf8')) }
  catch { return [] }
}

function saveMessages(list) {
  const tmp = MESSAGES_FILE + '.tmp'
  fs.writeFileSync(tmp, JSON.stringify(list, null, 2), 'utf8')
  fs.renameSync(tmp, MESSAGES_FILE)
}

// ── Routes ────────────────────────────────────────────────

// POST /api/contact
app.post('/api/contact', rateLimiter, (req, res) => {
  const { name, email, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email, and message are required.' })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' })
  }

  const entry = {
    name:         String(name).trim().slice(0, 200),
    email:        String(email).trim().slice(0, 200),
    message:      String(message).trim().slice(0, 2000),
    'created at': new Date().toISOString(),
  }

  const all = readMessages()
  all.push(entry)
  saveMessages(all)

  console.log(`[${entry['created at']}] New message from ${entry.name} <${entry.email}>`)
  return res.status(201).json({ success: true })
})

// GET /api/messages  (protected)
app.get('/api/messages', requireAuth, (req, res) => {
  const messages = readMessages()
  res.json({ total: messages.length, messages })
})

// GET /health
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', port: PORT, saved: readMessages().length })
})

// 404
app.use((_req, res) => res.status(404).json({ error: 'Not found.' }))

// ── Start ─────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n✅  Server running on http://localhost:${PORT}`)
  console.log(`   POST /api/contact`)
  console.log(`   GET  /api/messages  (Bearer token required)\n`)
})
