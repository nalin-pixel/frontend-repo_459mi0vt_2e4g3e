import React from 'react'

const Founder = () => {
  return (
    <section className="relative bg-black py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(800px_280px_at_50%_0%,rgba(10,61,255,0.18),transparent)]" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'linear-gradient(130deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.0) 40%), repeating-linear-gradient(0deg, transparent 0px, transparent 6px, rgba(10,61,255,0.08) 6px, rgba(10,61,255,0.08) 7px)'
        }} />
      </div>
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h3 className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
          Raouf — performance architect, philosopher of the body, and creator of BodyCode.
        </h3>
        <p className="mx-auto mt-3 max-w-3xl text-slate-300/85">
          Operating at the intersection of epigenetics, neuroscience, and cosmic perspective, Raouf builds systems that let you engineer your evolution with precision.
        </p>
        <div className="mx-auto mt-10 h-32 w-full rounded-2xl border border-blue-500/20 bg-gradient-to-br from-slate-900/60 to-black/60" style={{
          backgroundImage: 'radial-gradient(1200px_300px_at_50%_-10%, rgba(10,61,255,0.16), transparent), radial-gradient(1200px_300px_at_50%_110%, rgba(34,211,238,0.12), transparent)'
        }} />
      </div>
    </section>
  )
}

export default Founder
