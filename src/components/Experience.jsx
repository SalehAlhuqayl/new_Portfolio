import { Building2, Calendar, MapPin } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import experienceData from '../data/experience.json'

function ExperienceCard({ position, index }) {
  const { title, company, period, location, highlights } = position

  return (
    <ScrollReveal delay={index * 150}>
      <article className="glass rounded-xl p-6 card-hover">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div>
          <h3 className="text-xl font-bold text-text-primary">{title}</h3>
          <div className="flex items-center gap-2 mt-1">
            <Building2 className="w-4 h-4 text-accent-cyan" />
            <span className="text-accent-cyan font-medium">{company}</span>
          </div>
        </div>
        <div className="flex flex-col gap-1 text-sm text-text-secondary md:text-right">
          <div className="flex items-center gap-2 md:justify-end">
            <Calendar className="w-4 h-4" />
            <span>{period}</span>
          </div>
          <div className="flex items-center gap-2 md:justify-end">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <ul className="space-y-3">
        {highlights.map((highlight, i) => (
          <li key={i} className="flex items-start gap-3 text-text-secondary">
            <span className="text-accent-emerald mt-1 flex-shrink-0">▸</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
      </article>
    </ScrollReveal>
  )
}

function Experience() {
  const { positions } = experienceData

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Building data solutions for government ministries and global enterprises
            </p>
          </div>
        </ScrollReveal>

        {/* Experience cards */}
        <div className="space-y-6">
          {positions.map((position, index) => (
            <ExperienceCard 
              key={`${position.company}-${position.title}`} 
              position={position} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
