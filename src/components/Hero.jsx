import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black">
      {/* Cosmic gradient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(10,61,255,0.18),rgba(0,0,0,0.0)_60%)] blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* 3D Spline Cover */}
      <div className="relative h-[60vh] w-full">
        <Spline scene="https://prod.spline.design/D17NpA0ni2BTjUzp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Copy + CTA */}
      <div className="relative z-10 mx-auto -mt-24 max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="mb-4 bg-gradient-to-b from-[#0A34E8] via-[#0A3DFF] to-white bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-6xl">
            Rewrite Your Biology. Elevate Your Performance. Own Your Code.
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-base text-slate-200/80 md:text-lg">
            BodyBloc is a performance system that merges epigenetics, training, nutrition, and cosmic philosophy into one personalized evolution path.
          </p>
          <div className="flex items-center justify-center gap-3">
            <a
              href="#services"
              className="group inline-flex items-center justify-center rounded-full bg-[#0A3DFF] px-7 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(10,61,255,0.45)] transition hover:shadow-[0_0_36px_rgba(10,61,255,0.65)] focus:outline-none focus:ring-2 focus:ring-[#0A3DFF]/60"
            >
              Begin the Transformation
              <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Decorative particles */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-10 top-20 h-1 w-1 rounded-full bg-cyan-300/60 shadow-[0_0_18px_6px_rgba(34,211,238,0.35)]" />
          <div className="absolute right-20 top-10 h-1 w-1 rounded-full bg-blue-400/70 shadow-[0_0_22px_6px_rgba(59,130,246,0.35)]" />
          <div className="absolute bottom-10 left-1/3 h-1 w-1 rounded-full bg-white/60 shadow-[0_0_22px_8px_rgba(255,255,255,0.25)]" />
        </div>
      </div>
    </section>
  )
}

export default Hero
