"use client";

import ForgeLogo from '../components/ForgeLogo';

export default function Home() {
  return (
    <div className="bg-[#F9F9F9] text-zinc-900 selection:bg-zinc-200 font-sans min-h-screen">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#F9F9F9]/80 backdrop-blur-xl border-b border-zinc-200 px-8 py-5 flex justify-between items-center transition-all">
        <div className="flex items-center gap-3">
          <ForgeLogo className="text-zinc-900 w-6 h-6" />
          <span className="font-medium tracking-wide text-sm text-zinc-900">FORGE OS</span>
        </div>
        <div className="hidden md:flex gap-10 text-xs font-medium tracking-wide text-zinc-500">
          <a href="#youtube" className="hover:text-zinc-900 transition-colors">YouTube</a>
          <a href="#skool" className="hover:text-zinc-900 transition-colors">Community</a>
          <a href="#app" className="hover:text-zinc-900 transition-colors">Dad Strength App</a>
        </div>
        <a href="#join" className="px-5 py-2 bg-zinc-900 text-white text-xs font-medium rounded-full hover:bg-zinc-800 transition-colors">
          Join the Skool
        </a>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-32 px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-zinc-900 mb-8 max-w-4xl leading-tight">
          Documenting the <br className="hidden md:block"/>
          <span className="font-medium text-zinc-400">autonomous build.</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-500 font-light max-w-2xl mb-12">
          We are the media layer of Forge. YouTube, the Skool community, and the Dad Strength App. Building a $1M/year autonomous business in public.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://youtube.com" className="px-8 py-4 bg-zinc-900 text-white rounded-full text-sm font-medium hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/20">
            Watch the Journey
          </a>
          <a href="#app" className="px-8 py-4 bg-white text-zinc-900 rounded-full text-sm font-medium border border-zinc-200 hover:bg-zinc-50 transition-all">
            Get Dad Strength
          </a>
        </div>
      </section>

      {/* Feature Grid - Industrial / Clean */}
      <section className="py-24 px-8 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-zinc-900">YouTube Context</h3>
            <p className="text-zinc-500 font-light leading-relaxed">
              Long-form transparency. We share the scripts, the code, the failures, and the financials of building a self-sustaining enterprise.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-zinc-900">The Skool Community</h3>
            <p className="text-zinc-500 font-light leading-relaxed">
              A private collective of builders, founders, and fathers sharing tools, feedback, and the exact templates we use to run Forge.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-zinc-900">Dad Strength App</h3>
            <p className="text-zinc-500 font-light leading-relaxed">
              HQ, Mind, Body, Spirit. Built for functional strength and being a hero to your kids. No alpha-bro aesthetics, just capability.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-sm font-light text-zinc-400">
        <p>&copy; {new Date().getFullYear()} Forge OS. All rights reserved.</p>
      </footer>
    </div>
  );
}