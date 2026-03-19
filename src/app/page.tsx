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
          <a href="#agency" className="hover:text-zinc-900 transition-colors">Agency</a>
          <a href="#software" className="hover:text-zinc-900 transition-colors">Software</a>
          <a href="#content" className="hover:text-zinc-900 transition-colors">Content</a>
        </div>
        <a href="#contact" className="px-5 py-2 bg-zinc-900 text-white text-xs font-medium rounded-full hover:bg-zinc-800 transition-colors">
          Partner with us
        </a>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-32 px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-zinc-900 mb-8 max-w-4xl leading-tight">
          Producing value <br className="hidden md:block"/>
          <span className="font-medium text-zinc-400">around the clock.</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-500 font-light max-w-2xl mb-12">
          We build autonomous business systems, high-ticket automated workflows, and digital infrastructure that never sleeps. 
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#agency" className="px-8 py-4 bg-zinc-900 text-white rounded-full text-sm font-medium hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/20">
            Explore the Agency
          </a>
          <a href="#case-studies" className="px-8 py-4 bg-white text-zinc-900 rounded-full text-sm font-medium border border-zinc-200 hover:bg-zinc-50 transition-all">
            View Case Studies
          </a>
        </div>
      </section>

      {/* Feature Grid - Industrial / Clean */}
      <section className="py-24 px-8 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-zinc-900">B2B Automation</h3>
            <p className="text-zinc-500 font-light leading-relaxed">
              Productized workflows that remove the human bottleneck from your operations. Fast, reliable, and invisible.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-zinc-900">Custom Software</h3>
            <p className="text-zinc-500 font-light leading-relaxed">
              From the Dad Strength App to bespoke SaaS dashboards. Clean architecture, high-performance execution.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-zinc-900">Media & Content</h3>
            <p className="text-zinc-500 font-light leading-relaxed">
              Documenting the journey. We build in public, share the playbook, and cultivate a community of operators.
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