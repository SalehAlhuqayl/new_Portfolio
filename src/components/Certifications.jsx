import { Award, ExternalLink } from 'lucide-react'
import certificationsData from '../data/certifications.json'

function CertificationCard({ cert, index }) {
  const { name, type, issuer, year, description, verifyUrl } = cert

  return (
    <article 
      className="glass rounded-xl p-5 card-hover animate-slide-up flex flex-col"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-accent-purple/10 flex-shrink-0">
            <Award className="w-5 h-5 text-accent-purple" />
          </div>
          <div>
            <h3 className="font-semibold text-text-primary leading-tight">{name}</h3>
            <p className="text-sm text-accent-cyan mt-1">{issuer} · {year}</p>
          </div>
        </div>
      </div>

      <p className="text-sm text-text-secondary mb-4 flex-grow">
        {description}
      </p>

      <a
        href={verifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent-cyan transition-colors group"
      >
        <ExternalLink className="w-4 h-4" />
        <span className="group-hover:underline">Verify Certificate</span>
      </a>
    </article>
  )
}

function Certifications() {
  const { certifications } = certificationsData

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Professional credentials validating expertise in AI, data science, and analytics
          </p>
        </div>

        {/* Certifications grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard 
              key={cert.name} 
              cert={cert} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
