import React from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Personalized Training Programs',
    desc: 'Blueprints tailored to your code: biomechanics, periodization, mobility.',
  },
  {
    title: 'Nutrition Blueprint & Microbiome Guidance',
    desc: 'Data-driven fueling strategies to support gut health and performance.',
  },
  {
    title: 'Lifestyle Optimization Protocols',
    desc: 'Sleep, sunlight, stress, and environment tuned to your rhythms.',
  },
  {
    title: 'Performance Tracking & Coaching',
    desc: 'Continuous iteration using biomarkers, feedback loops, and coaching.',
  },
]

const Services = () => {
  return (
    <section id="services" className="relative bg-black py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_280px_at_50%_0%,rgba(10,61,255,0.18),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            The BodyBloc System
          </h2>
          <p className="mt-3 text-slate-300/80">
            Modular services engineered to evolve your biology and performance.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-b from-slate-900/60 to-black/60 p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(400px_200px_at_20%_-10%,rgba(10,61,255,0.15),transparent)]" />
              <div className="relative">
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-300/90">{s.desc}</p>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
