"use client";

import ForgeLogo from '../components/ForgeLogo';
import CyberGrid from '../components/CyberGrid';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-black text-white selection:bg-orange-500/30 font-sans">
      <CyberGrid />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <ForgeLogo />
          <span className="font-bold uppercase tracking-widest text-sm">Forge OS</span>
        </div>
        <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
          <a href="#workflows" className="hover:text-orange-500 transition-colors">Workflows</a>
          <a href="#about" className="hover:text-orange-500 transition-colors">The Lab</a>
          <a href="#contact" className="hover:text-orange-500 transition-colors">Initiate</a>
        </div>
        <button className="bg-white text-black text-[10px] font-black px-4 py-2 uppercase tracking-tighter hover:bg-orange-500 hover:text-white transition-all">
          Client Login
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden px-4">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none overflow-hidden">
          <Image 
            src="/hero-anvil.png" 
            alt="Hero Anvil" 
            fill 
            className="object-cover scale-110 blur-[2px] opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl">
          <div className="inline-block mb-12">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-orange-500 font-bold block mt-4 animate-pulse">System Operational</span>
          </div>
          
          <h1 className="text-6xl md:text-[12rem] font-black uppercase tracking-tighter mb-6 text-white leading-[0.8]">
            Forge <span className="text-orange-600 italic">OS</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-zinc-400 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
            The high-performance engine for <span className="text-white">B2B AI Automation</span>. 
            We build the workflows that buy back your time and scale your legacy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto bg-orange-600 hover:bg-orange-500 text-white font-black py-5 px-12 rounded-none uppercase tracking-[0.2em] transition-all shadow-[0_0_30px_rgba(234,88,12,0.3)]">
              Build My Agent
            </button>
            <button className="w-full sm:w-auto border border-white/10 hover:border-white/40 hover:bg-white/5 text-white font-black py-5 px-12 rounded-none uppercase tracking-[0.2em] transition-all">
              The Architecture
            </button>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="absolute bottom-8 left-0 right-0 w-full px-8 flex justify-between items-end">
          <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest leading-loose text-left">
            [ Latency: 24ms ]<br />
            [ Status: Autonomous ]<br />
            [ Nodes: Online ]
          </div>
          <div className="flex flex-col items-end">
             <div className="w-32 h-1 bg-zinc-900 overflow-hidden relative mb-2">
                <div className="absolute inset-0 bg-orange-600 w-1/3 animate-ping" />
             </div>
             <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Compiling Assets...</span>
          </div>
        </div>
      </section>

      {/* Detail Section */}
      <section className="relative py-32 px-6 border-t border-white/5 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
           <div className="relative group">
              <div className="absolute -inset-4 bg-orange-600/20 blur-2xl group-hover:bg-orange-600/40 transition-all duration-700 opacity-50" />
              <div className="relative border border-white/10 aspect-video overflow-hidden">
                <Image 
                  src="/burning-hero-anvil.png" 
                  alt="Forge In Action" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
           </div>
           
           <div>
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
                Not Just Tools.<br />
                <span className="text-orange-600">The Whole Engine.</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                Forge OS doesn&apos;t just write code. We deploy end-to-end agentic workflows that integrate into your stack, handle the heavy lifting, and report back. 
              </p>
              <ul className="space-y-6">
                {[
                  "Multi-Agent Orchestration",
                  "Automated Sales Pipelines",
                  "Content Generation At Scale",
                  "Self-Correcting Data Pipelines"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <div className="w-2 h-2 bg-orange-600 rotate-45 group-hover:scale-150 transition-transform" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
           </div>
        </div>
      </section>
    </div>
  );
}
