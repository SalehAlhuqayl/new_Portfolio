import { Mail, Linkedin, Github, MapPin, ExternalLink } from 'lucide-react'
import profileData from '../data/profile.json'

function Hero() {
  const { name, role, location, summary, tagline, emails, links } = profileData

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Location badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
          <MapPin className="w-4 h-4 text-accent-cyan" />
          <span className="text-sm text-text-secondary">{location}</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
          <span className="text-gradient">{name}</span>
        </h1>

        {/* Role */}
        <h2 className="text-2xl md:text-3xl font-medium text-text-secondary mb-6 animate-slide-up delay-100">
          {role}
        </h2>

        {/* Tagline */}
        <p className="text-sm md:text-base font-mono text-accent-cyan mb-6 animate-slide-up delay-200">
          {tagline}
        </p>

        {/* Summary */}
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 animate-slide-up delay-300">
          {summary}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-slide-up delay-400">
          <a
            href={`mailto:${emails.primary}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-cyan text-background font-semibold rounded-lg hover:bg-accent-cyan/90 transition-colors shadow-glow"
          >
            <Mail className="w-5 h-5" />
            Email Me
          </a>
          
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-lg font-medium hover:border-accent-cyan/50 transition-colors card-hover"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
          
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-lg font-medium hover:border-accent-cyan/50 transition-colors card-hover"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-text-muted flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-text-muted rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
