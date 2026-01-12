import ScrollReveal from './ScrollReveal'
import highlightsData from '../data/highlights.json'

function MetricCard({ value, label, description, index }) {
  return (
    <ScrollReveal delay={index * 100}>
      <div className="glass rounded-xl p-6 card-hover h-full">
        <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
          {value}
        </div>
        <div className="text-lg font-semibold text-text-primary mb-2">
          {label}
        </div>
        <p className="text-sm text-text-secondary">
          {description}
        </p>
      </div>
    </ScrollReveal>
  )
}

function ImpactSnapshot() {
  const { metrics } = highlightsData

  return (
    <section id="impact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proven <span className="text-gradient">Impact</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Measurable results across government ministries and enterprise clients
            </p>
          </div>
        </ScrollReveal>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              value={metric.value}
              label={metric.label}
              description={metric.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImpactSnapshot
