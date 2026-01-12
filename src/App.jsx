import Hero from './components/Hero'
import ImpactSnapshot from './components/ImpactSnapshot'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background effects */}
      <div className="fixed inset-0 bg-grid-pattern bg-grid opacity-50 pointer-events-none" />
      <div className="fixed inset-0 bg-radial-glow pointer-events-none" />
      
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
    </div>
  )
}

export default App
