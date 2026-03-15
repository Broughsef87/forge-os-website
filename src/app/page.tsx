import ForgeLogo from '../components/ForgeLogo';

export default function Home() {
  return (
    <div className="bg-forge-dark text-white min-h-screen selection:bg-forge-orange/30">
      {/* Navigation */}
      <nav className="border-b border-white/5 bg-forge-dark/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <ForgeLogo className="w-10 h-10" />
            <span className="font-bold text-xl tracking-widest uppercase" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              FORGE <span className="text-forge-orange">AGENCY</span>
            </span>
          </div>
          <div className="hidden md:flex gap-10 text-sm font-medium text-gray-400">
            <a href="#solutions" className="hover:text-white transition-colors uppercase tracking-wider">Solutions</a>
            <a href="#process" className="hover:text-white transition-colors uppercase tracking-wider">The Process</a>
            <a href="#audit" className="hover:text-white transition-colors uppercase tracking-wider">Book Audit</a>
          </div>
          <button className="px-6 py-2.5 rounded-sm bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-gray-200 transition-all active:scale-95">
            Book an Audit
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-32 text-center flex flex-col items-center relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-forge-orange/10 blur-[120px] -z-10 rounded-full"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-forge-orange/30 bg-forge-orange/5 text-forge-orange text-[10px] font-mono font-bold uppercase tracking-[0.2em] mb-12 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-forge-orange animate-pulse"></span>
          FORGE OS AGENTIC INFRASTRUCTURE
        </div>

        <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          THE AUTONOMOUS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-forge-orange via-white to-gray-500">
            BUSINESS ENGINE.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
          We build custom AI agent workflows for 7-figure founders and mid-market firms. Buy back 20+ hours a week. Scale your operations without increasing your headcount.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
          <button className="px-10 py-5 rounded-sm bg-forge-orange hover:bg-forge-red text-white font-bold uppercase text-xs tracking-widest transition-all shadow-[0_0_40px_rgba(255,87,34,0.2)] hover:shadow-[0_0_50px_rgba(255,87,34,0.4)] w-full sm:w-auto active:scale-95">
            Claim Your Efficiency Audit
          </button>
          <button className="px-10 py-5 rounded-sm border border-white/10 hover:border-white/30 text-white font-bold uppercase text-xs tracking-widest transition-all w-full sm:w-auto flex items-center justify-center gap-3 backdrop-blur-sm bg-white/5 active:scale-95">
            Explore Solutions
          </button>
        </div>
      </main>

      {/* The Big Rocks (Solutions) */}
      <section className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5" id="solutions">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Three Pillars of Autonomy.</h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">From lead qualification to hyper-scale content production, we install the systems that run while you sleep.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Solution 1 */}
          <div className="bg-forge-panel/40 border border-white/5 rounded-sm p-10 hover:border-forge-orange/40 transition-all group relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-gray-700 tracking-widest">01 // OPERATIONS</div>
            <div className="w-12 h-12 mb-8 rounded-sm bg-forge-orange/10 flex items-center justify-center border border-forge-orange/20">
              <svg className="w-6 h-6 text-forge-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-5 tracking-tight group-hover:text-forge-orange transition-colors">Autonomous Operations</h3>
            <p className="text-gray-400 mb-8 leading-relaxed text-sm">
              Lead triage, document qualification, and multi-step data processing. A custom-coded 24/7 engine that handles the repetitive logic of your back-office.
            </p>
            <div className="font-mono text-[10px] text-gray-600 border-t border-white/5 pt-6 uppercase tracking-widest">Pricing Starts at $5k/setup</div>
          </div>

          {/* Solution 2 */}
          <div className="bg-forge-panel/40 border border-white/5 rounded-sm p-10 hover:border-forge-orange/40 transition-all group relative overflow-hidden backdrop-blur-sm scale-105 border-forge-orange/20 shadow-2xl">
             <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-forge-orange tracking-widest">02 // CONTENT</div>
            <div className="w-12 h-12 mb-8 rounded-sm bg-forge-orange/10 flex items-center justify-center border border-forge-orange/20">
              <svg className="w-6 h-6 text-forge-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-5 tracking-tight group-hover:text-forge-orange transition-colors">Hyper-Scale Content Ops</h3>
            <p className="text-gray-300 mb-8 leading-relaxed text-sm">
              100+ deep-researched, SEO-optimized articles a month. Not just "AI writing"—we build agents that search, verify, and write in your brand voice at scale.
            </p>
            <div className="font-mono text-[10px] text-forge-orange border-t border-white/5 pt-6 uppercase tracking-widest font-bold">Monthly Retainers from $15k</div>
          </div>

          {/* Solution 3 */}
          <div className="bg-forge-panel/40 border border-white/5 rounded-sm p-10 hover:border-forge-orange/40 transition-all group relative overflow-hidden backdrop-blur-sm">
             <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-gray-700 tracking-widest">03 // STRATEGY</div>
            <div className="w-12 h-12 mb-8 rounded-sm bg-forge-orange/10 flex items-center justify-center border border-forge-orange/20">
              <svg className="w-6 h-6 text-forge-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-5 tracking-tight group-hover:text-forge-orange transition-colors">Fractional AI CoS</h3>
            <p className="text-gray-400 mb-8 leading-relaxed text-sm">
              A 90-day transformation. We audit your workflows, build your custom RAG, and train your team. The ultimate play for the founder who wants to exit operations.
            </p>
            <div className="font-mono text-[10px] text-gray-600 border-t border-white/5 pt-6 uppercase tracking-widest">Project Fees from $30k</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black/50 py-16 text-center">
        <div className="flex items-center justify-center gap-3 mb-8 opacity-40">
           <ForgeLogo className="w-6 h-6" />
           <span className="font-bold text-sm tracking-widest uppercase" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              FORGE AGENCY
            </span>
        </div>
        <p className="text-[10px] text-gray-600 font-mono uppercase tracking-[0.3em] mb-4">EST. 2026 // ANDREW BROUGH</p>
        <p className="text-xs text-gray-700 font-mono tracking-widest">&copy; ALL RIGHTS RESERVED. OPERATING AT SCALE.</p>
      </footer>
    </div>
  );
}