import { Mail, Linkedin, Github, MapPin, Heart } from 'lucide-react'
import profileData from '../data/profile.json'

// X (formerly Twitter) icon component
function XIcon({ className }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function Footer() {
  const { name, role, location, emails, links, availability } = profileData

  const socialLinks = [
    { icon: Linkedin, href: links.linkedin, label: 'LinkedIn' },
    { icon: Github, href: links.github, label: 'GitHub' },
    { icon: XIcon, href: links.twitter, label: 'X' },
  ]

  return (
    <footer className="py-16 px-4 bg-surface/50 border-t border-border">
      <div className="max-w-4xl mx-auto">
        {/* Main content */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-text-secondary mb-6 max-w-lg mx-auto">
            {availability}
          </p>

          {/* Contact buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a
              href={`mailto:${emails.primary}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-cyan text-background font-semibold rounded-lg hover:bg-accent-cyan/90 transition-colors shadow-glow"
            >
              <Mail className="w-5 h-5" />
              {emails.primary}
            </a>
            <a
              href={`mailto:${emails.secondary}`}
              className="inline-flex items-center gap-2 px-6 py-3 glass rounded-lg font-medium card-hover"
            >
              <Mail className="w-5 h-5" />
              {emails.secondary}
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:border-accent-cyan/50 hover:text-accent-cyan transition-all card-hover"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
            
            <p className="flex items-center gap-1">
              © {new Date().getFullYear()} {name}. Built with
              <Heart className="w-4 h-4 text-red-500 inline" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
