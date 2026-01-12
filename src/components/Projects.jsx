import { ExternalLink, Github, FileText } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import projectsData from '../data/projects.json'

function ProjectCard({ project, index }) {
  const { title, subtitle, role, period, problem, solution, outcomes, tags, links } = project
  
  const hasLinks = links && (links.repo || links.paper || links.live)

  return (
    <ScrollReveal delay={index * 100}>
      <article className="glass rounded-xl p-6 card-hover h-full flex flex-col">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-text-primary mb-1">{title}</h3>
        <p className="text-accent-cyan text-sm font-medium">{subtitle}</p>
        <p className="text-text-muted text-sm mt-1">{role} · {period}</p>
      </div>

      {/* Problem & Solution */}
      <div className="space-y-3 mb-4">
        <div>
          <span className="text-xs font-semibold text-text-muted uppercase tracking-wide">Problem</span>
          <p className="text-text-secondary text-sm mt-1">{problem}</p>
        </div>
        <div>
          <span className="text-xs font-semibold text-text-muted uppercase tracking-wide">Solution</span>
          <p className="text-text-secondary text-sm mt-1">{solution}</p>
        </div>
      </div>

      {/* Outcomes */}
      <ul className="space-y-2 mb-4">
        {outcomes.map((outcome, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
            <span className="text-accent-emerald mt-1">▸</span>
            {outcome}
          </li>
        ))}
      </ul>

      {/* Tags & Links */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border mt-auto">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-1 text-xs font-mono bg-surface-light text-text-secondary rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {hasLinks && (
          <div className="flex gap-3">
            {links.repo && (
              <a 
                href={links.repo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent-cyan transition-colors"
                aria-label="View repository"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {links.paper && (
              <a 
                href={links.paper} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent-cyan transition-colors"
                aria-label="View paper"
              >
                <FileText className="w-5 h-5" />
              </a>
            )}
            {links.live && (
              <a 
                href={links.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent-cyan transition-colors"
                aria-label="View live site"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        )}
      </div>
      </article>
    </ScrollReveal>
  )
}

function Projects() {
  const { featured } = projectsData

  return (
    <section id="projects" className="py-20 px-4 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              From government-scale data systems to AI-powered automation
            </p>
          </div>
        </ScrollReveal>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
