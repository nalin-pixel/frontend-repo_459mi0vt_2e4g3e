import React from 'react'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Services from './components/Services'
import SignatureBanner from './components/SignatureBanner'
import Why from './components/Why'
import Founder from './components/Founder'
import FooterCTA from './components/FooterCTA'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Starfield background subtle */}
      <div className="pointer-events-none absolute inset-0 opacity-50" style={{
        backgroundImage:
          'radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.3) 0, transparent 1px),\n           radial-gradient(1px 1px at 30% 80%, rgba(255,255,255,0.25) 0, transparent 1px),\n           radial-gradient(1px 1px at 60% 40%, rgba(34,211,238,0.35) 0, transparent 1px),\n           radial-gradient(1px 1px at 80% 70%, rgba(59,130,246,0.35) 0, transparent 1px)'
      }} />

      <header className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-[#0A3DFF] to-cyan-300 shadow-[0_0_24px_rgba(10,61,255,0.6)]" />
          <span className="text-sm font-semibold tracking-wider text-slate-100">BodyBloc</span>
        </div>
        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a className="hover:text-white" href="#philosophy">Philosophy</a>
          <a className="hover:text-white" href="#services">System</a>
          <a className="hover:text-white" href="#why">Why</a>
        </nav>
      </header>

      <main className="relative z-10">
        <Hero />
        <Philosophy />
        <Services />
        <SignatureBanner />
        <div id="why">
          <Why />
        </div>
        <Founder />
        <FooterCTA />
      </main>
    </div>
  )
}

export default App
