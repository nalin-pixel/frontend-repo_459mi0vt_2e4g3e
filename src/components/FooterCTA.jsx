import React from 'react'

const FooterCTA = () => {
  return (
    <footer className="relative bg-black py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_320px_at_50%_0%,rgba(10,61,255,0.2),transparent)]" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h3 className="bg-gradient-to-b from-[#0A3DFF] via-white to-slate-300 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent md:text-4xl">
          Start Building Your Bloc
        </h3>
        <p className="mt-3 text-slate-300/85">Your evolution begins now.</p>
        <div className="mt-6 flex items-center justify-center">
          <a href="#services" className="rounded-full bg-[#0A3DFF] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(10,61,255,0.45)] transition hover:shadow-[0_0_36px_rgba(10,61,255,0.65)]">
            Begin
          </a>
        </div>
      </div>
      <div className="relative mt-10 text-center text-xs text-slate-500">© {new Date().getFullYear()} BodyBloc</div>
    </footer>
  )
}

export default FooterCTA
