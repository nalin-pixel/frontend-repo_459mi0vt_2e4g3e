import React from 'react'

const SignatureBanner = () => {
  return (
    <section className="relative bg-black py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_300px_at_50%_10%,rgba(34,211,238,0.15),transparent)]" />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 12px)'
        }} />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <div className="mx-auto mt-2 max-w-3xl">
          <h3 className="bg-gradient-to-b from-[#8ED8FF] via-white to-slate-300 bg-clip-text text-2xl font-semibold tracking-tight text-transparent md:text-3xl">
            Your body is a universe; every choice rewrites your code.
          </h3>
        </div>
        <div className="mx-auto mt-10 h-0.5 max-w-4xl bg-gradient-to-r from-transparent via-[#0A3DFF] to-transparent opacity-60" />
      </div>
    </section>
  )
}

export default SignatureBanner
