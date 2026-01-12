import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ImpactSnapshot from './components/ImpactSnapshot'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ParticleBackground from './components/ParticleBackground'

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Grid overlay */}
      <div className="fixed inset-0 bg-grid-pattern bg-grid opacity-30 pointer-events-none z-0" />
      <div className="fixed inset-0 bg-radial-glow pointer-events-none z-0" />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Content */}
      <main className="relative z-10">
        <Hero />
        <ImpactSnapshot />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <Footer />
      </main>
      
      {/* Back to top */}
      <BackToTop />
    </div>
  )
}

export default App
