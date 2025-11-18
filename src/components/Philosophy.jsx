import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Dumbbell, Leaf } from 'lucide-react'

const Card = ({ icon: Icon, title, items }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className="relative rounded-2xl border border-blue-500/20 bg-gradient-to-b from-slate-900/60 to-black/60 p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]"
  >
    <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(1200px_400px_at_50%_-20%,rgba(10,61,255,0.12),transparent)]" />
    <div className="relative">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-black/60 ring-1 ring-white/10">
        <Icon className="h-6 w-6 text-cyan-300" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <ul className="space-y-1 text-sm text-slate-300/90">
        {items.map((t, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400/70 shadow-[0_0_10px_rgba(10,61,255,0.8)]" />
            {t}
          </li>
        ))}
      </ul>
    </div>
    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
  </motion.div>
)

const Philosophy = () => {
  return (
    <section id="philosophy" className="relative bg-black py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_300px_at_50%_0%,rgba(10,61,255,0.2),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            The BodyCode Philosophy
          </h2>
          <p className="mt-3 text-slate-300/80">
            A fusion of sports science, clinical nutrition, microbiome, neuroscience, cosmic perspective, and lifestyle philosophy.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card
            icon={Dumbbell}
            title="The Physical Bloc"
            items={[
              'Training architecture',
              'Mobility and resilience',
              'Strength and power development',
            ]}
          />
          <Card
            icon={Leaf}
            title="The Nutritional Bloc"
            items={[
              'Microbiome-first nutrition',
              'Metabolic flexibility',
              'Recovery-focused fueling',
            ]}
          />
          <Card
            icon={Brain}
            title="The Consciousness Bloc"
            items={[
              'Mindset and mental models',
              'Circadian design',
              'Energy balance & focus',
            ]}
          />
        </div>
      </div>
    </section>
  )
}

export default Philosophy
