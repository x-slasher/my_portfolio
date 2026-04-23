import { projects } from '../data/content'

function ProjectCard({ project, delay }) {
  return (
    <div className={`project-card reveal ${delay ? `reveal-delay-${delay}` : ''}`}>
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
      </div>
    </div>
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
          <ProjectCard key={project.id} project={project} delay={i > 0 ? i : null} />
        ))}
      </div>
    </section>
  )
}
