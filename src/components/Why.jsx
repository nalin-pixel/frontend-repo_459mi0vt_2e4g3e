import React from 'react'
import { Atom, Star, Activity } from 'lucide-react'

const Item = ({ icon: Icon, title, desc }) => (
  <div className="relative rounded-2xl border border-blue-500/20 bg-gradient-to-b from-slate-900/60 to-black/60 p-6">
    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-black/60 ring-1 ring-white/10">
      <Icon className="h-5 w-5 text-cyan-300" />
    </div>
    <h4 className="text-base font-semibold text-white">{title}</h4>
    <p className="mt-1 text-sm text-slate-300/90">{desc}</p>
    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
  </div>
)

const Why = () => {
  return (
    <section className="relative bg-black py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_280px_at_50%_0%,rgba(10,61,255,0.18),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            Why BodyBloc
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Item icon={Atom} title="Scientific but intuitive" desc="We turn complex biology into clear, actionable systems." />
          <Item icon={Star} title="No generic coaching" desc="Everything adapts to your data and evolving goals." />
          <Item icon={Activity} title="Designed for mastery" desc="For athletes, creators, and high-performers seeking depth." />
        </div>
        <div className="mx-auto mt-6 max-w-3xl text-center text-sm text-slate-300/80">
          Based on personal biology. Modular Bloc-by-Bloc system. Icons unite atoms, stars, and muscle fibers to mirror your true architecture.
        </div>
      </div>
    </section>
  )
}

export default Why
