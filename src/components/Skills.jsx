import { Code2, Brain, Database, BarChart3, Sparkles, Users } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import skillsData from '../data/skills.json'

const iconMap = {
  Code2,
  Brain,
  Database,
  BarChart3,
  Sparkles,
  Users,
}

function SkillCategory({ category, index }) {
  const { name, icon, skills } = category
  const Icon = iconMap[icon] || Code2

  return (
    <ScrollReveal delay={index * 100}>
      <div className="glass rounded-xl p-6 card-hover h-full">
      {/* Category header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-accent-cyan/10">
          <Icon className="w-5 h-5 text-accent-cyan" />
        </div>
        <h3 className="font-semibold text-text-primary">{name}</h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-sm bg-surface-light text-text-secondary rounded-full border border-border hover:border-accent-cyan/50 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
      </div>
    </ScrollReveal>
  )
}

function Skills() {
  const { categories } = skillsData

  return (
    <section id="skills" className="py-20 px-4 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Tools and technologies I use to deliver impactful solutions
            </p>
          </div>
        </ScrollReveal>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <SkillCategory 
              key={category.name} 
              category={category} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
