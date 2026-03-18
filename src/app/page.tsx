"use client";

import ForgeLogo from '../components/ForgeLogo';
import CyberGrid from '../components/CyberGrid';
export default function Home() {
  return (
    <div className="bg-black text-white selection:bg-orange-500/30 font-sans overflow-x-hidden">
      <CyberGrid />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <ForgeLogo />
          <span className="font-bold uppercase tracking-widest text-sm">Forge OS</span>
        </div>
        <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
          <a href="#app" className="hover:text-orange-500 transition-colors">The App</a>
          <a href="#content" className="hover:text-orange-500 transition-colors">YouTube</a>
          <a href="#community" className="hover:text-orange-500 transition-colors">Skool</a>
        </div>
        <button className="bg-white text-black text-[10px] font-black px-4 py-2 uppercase tracking-tighter hover:bg-orange-500 hover:text-white transition-all">
          Join the Forge
        </button>
      </nav>

      {/* Hero Text Section */}
      <section className="relative pt-40 pb-16 px-4 flex flex-col items-center text-center bg-black z-10">
        <div className="inline-block mb-12">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-orange-500 font-bold block mt-4 animate-pulse">Forging the Future</span>
        </div>

        <h1 className="text-7xl md:text-[14rem] font-black uppercase tracking-tighter mb-6 text-white leading-[0.75]">
          Forge <span className="text-orange-600 italic">OS</span>
        </h1>

        <p className="text-xl md:text-3xl text-zinc-300 max-w-3xl mx-auto font-bold leading-tight mb-12 uppercase tracking-tight">
          The ecosystem for the <span className="text-orange-500">Modern Creator-Dad</span>.<br />
          YouTube. SaaS. Community. <span className="text-white">Absolute Results.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="w-full sm:w-auto bg-orange-600 hover:bg-orange-500 text-white font-black py-6 px-14 rounded-none uppercase tracking-[0.3em] transition-all shadow-[0_0_50px_rgba(234,88,12,0.4)] text-lg">
            Get the App
          </button>
          <button className="w-full sm:w-auto border border-white/20 hover:border-white/60 hover:bg-white/5 text-white font-black py-6 px-14 rounded-none uppercase tracking-[0.3em] transition-all text-lg">
            The Protocol
          </button>
        </div>
      </section>

      {/* The Ecosystem Section */}
      <section className="relative py-40 px-6 bg-zinc-950 border-t border-white/5 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* YouTube */}
            <div className="group border border-white/5 p-12 hover:border-orange-500/50 transition-all bg-black/40">
              <span className="text-orange-500 font-mono text-sm mb-6 block tracking-widest">[ 01 ]</span>
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">YouTube</h3>
              <p className="text-zinc-500 leading-relaxed mb-8">Building in public. Documenting the journey from zero to $1M/year while being a present dad.</p>
              <div className="h-1 w-0 group-hover:w-full bg-orange-500 transition-all duration-500" />
            </div>

            {/* Dad Strength App */}
            <div className="group border border-white/5 p-12 hover:border-orange-500/50 transition-all bg-black/40">
              <span className="text-orange-500 font-mono text-sm mb-6 block tracking-widest">[ 02 ]</span>
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">The App</h3>
              <p className="text-zinc-500 leading-relaxed mb-8">Next-gen training for the man with no time. Functional strength meets autonomous productivity.</p>
              <div className="h-1 w-0 group-hover:w-full bg-orange-500 transition-all duration-500" />
            </div>

            {/* Community */}
            <div className="group border border-white/5 p-12 hover:border-orange-500/50 transition-all bg-black/40">
              <span className="text-orange-500 font-mono text-sm mb-6 block tracking-widest">[ 03 ]</span>
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Skool</h3>
              <p className="text-zinc-500 leading-relaxed mb-8">The inner circle. Systems, scripts, and protocols for dads who refuse to choose between family and success.</p>
              <div className="h-1 w-0 group-hover:w-full bg-orange-500 transition-all duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Status */}
      <footer className="py-12 px-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 bg-black">
        <div className="text-[10px] font-mono text-zinc-700 uppercase tracking-[0.3em]">
          &copy; 2026 Forge OS // Producing Value 24/7
        </div>
        <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
          <span className="text-orange-500">Colorado</span>
          <span>America/Denver</span>
          <span>Lat: 39.7392</span>
        </div>
      </footer>
    </div>
  );
}
