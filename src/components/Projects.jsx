import { projects } from '../data/content'

function ProjectCard({ project, delay }) {
  const CardWrapper = project.link ? 'a' : 'div'
  const wrapperProps = project.link
    ? { href: project.link, target: '_blank', rel: 'noreferrer' }
    : {}

  return (
    <CardWrapper
      {...wrapperProps}
      className={`project-card reveal ${delay ? `reveal-delay-${delay}` : ''}`}
      style={{ textDecoration: 'none', cursor: project.link ? 'pointer' : 'default' }}
    >
      <div className="project-card-top">
        <div className="project-icon">{project.icon}</div>
        <span className={`project-type ${project.typeStyle === 'eu' ? 'eu' : ''}`}>
          {project.type}
        </span>
      </div>

      <div className="project-body">
        <div className="project-name">{project.name}</div>
        <div className="project-sub">{project.subtitle}</div>
        <p className="project-desc">{project.description}</p>
      </div>

      <div className="project-footer">
        {project.tags.map(tag => (
          <span key={tag} className="project-tag">{tag}</span>
        ))}
        {project.link && (
          <span className="project-tag" style={{ marginLeft: 'auto', color: 'var(--green)', borderColor: 'var(--border-mid)' }}>
            ↗ View
          </span>
        )}
      </div>
    </CardWrapper>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-divider">
      <div className="section-header reveal">
        <span className="section-num">03.</span>
        <h2 className="section-title">Key Projects</h2>
        <div className="section-line" />
      </div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={i % 3 > 0 ? (i % 3) : null} />
        ))}
      </div>
    </section>
  )
}