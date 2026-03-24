"use client";

import { useEffect } from "react";
import ForgeLogo from "../../components/ForgeLogo";

function Arrow() {
  return (
    <svg
      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0"
      fill="none" viewBox="0 0 24 24" stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

const BUILDS = [
  {
    number: "01",
    name: "Forge Agency",
    tagline: "B2B AI automation for businesses stuck in manual workflows.",
    description:
      "Custom AI agents for B2B service companies — lead qualification bots, RevOps automation, customer success agents, proposal generators. Built to replace repetitive work and give small teams leverage they couldn't afford to hire. Typical ROI: 20-40 hours/month saved per deployment.",
    status: "Active",
    stack: ["Node.js", "Google Gemini", "Supabase", "Next.js", "n8n"],
    href: null,
    year: "2024",
  },
  {
    number: "02",
    name: "Dad Strength App",
    tagline: "AI-programmed strength training for dads who don't have time.",
    description:
      "A progressive web app that builds weekly training programs using Gemini — adapting weights and volume based on your logged sets, RIR, and training history. Five programs ranging from 15-minute bodyweight circuits to 5-day barbell splits. No gym-bro posturing. Just what actually works when you have 40 minutes before the baby wakes up.",
    status: "Live",
    stack: ["Next.js", "Supabase", "Gemini AI", "TypeScript", "Tailwind"],
    href: "https://dad-strength-app-rnz1.vercel.app",
    year: "2024",
  },
  {
    number: "03",
    name: "OpenClaw",
    tagline: "The autonomous task OS running the whole Forge operation.",
    description:
      "A local agent stack that handles the business while I'm not at a desk. Ten scheduled agents running 5 AM to 9 PM: morning briefing, prospect research, content production, market intelligence, lead enrichment, EOD reporting. Built on Node.js with Google APIs, Apollo, Brave Search, and Discord as the HITL layer.",
    status: "Internal",
    stack: ["Node.js", "Google APIs", "Apollo.io", "Discord", "Brave Search", "Gemini"],
    href: null,
    year: "2025",
  },
  {
    number: "04",
    name: "Forge Client OS",
    tagline: "Internal CRM and SOW generator for Forge Agency.",
    description:
      "A Next.js client management dashboard — tracks agency clients, contract values, deliverables, and generates AI-written Statements of Work that save directly to Google Drive. Built for a one-person agency that can't afford to spend an hour on admin per client.",
    status: "Internal",
    stack: ["Next.js", "Supabase", "Google Docs API", "Gemini", "TypeScript"],
    href: null,
    year: "2025",
  },
  {
    number: "05",
    name: "YouTube — Forge OS",
    tagline: "The transparent build log.",
    description:
      "Weekly videos documenting the exact build — what shipped, what broke, what it cost, what it made. Scripts written by AI, research done by agents, but the perspective is mine. 121+ episodes. The whole point is that watching someone build honestly is more useful than watching someone perform.",
    status: "Active",
    stack: ["YouTube", "Final Cut Pro", "OpenClaw"],
    href: "https://www.youtube.com/@forgeOS108",
    year: "2024",
  },
];

const STATUS_COLORS: Record<string, string> = {
  Active: "bg-green-50 text-green-700 border-green-200",
  Live: "bg-blue-50 text-blue-700 border-blue-200",
  Internal: "bg-zinc-100 text-zinc-600 border-zinc-200",
};

export default function Builds() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
      { threshold: 0.08, rootMargin: "0px 0px -48px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#F8F8F6] text-zinc-900 font-sans min-h-screen overflow-x-hidden">

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#F8F8F6]/80 backdrop-blur-xl border-b border-zinc-200/80 px-8 py-5 flex justify-between items-center">
        <a href="/" className="flex items-center gap-3">
          <ForgeLogo className="text-zinc-900 w-6 h-6" />
          <span className="font-medium tracking-widest text-[11px] text-zinc-900">FORGE OS</span>
        </a>
        <div className="hidden md:flex gap-10 text-xs font-medium tracking-wide text-zinc-400">
          <a href="/about" className="hover:text-zinc-900 transition-colors duration-200">_about</a>
          <a href="/builds" className="text-zinc-900 transition-colors duration-200">_builds</a>
          <a href="/blog" className="hover:text-zinc-900 transition-colors duration-200">_blog</a>
          <a href="https://www.youtube.com/@forgeOS108" className="hover:text-zinc-900 transition-colors duration-200">YouTube</a>
          <a href="https://www.skool.com/forge-os-9794" className="hover:text-zinc-900 transition-colors duration-200">Community</a>
        </div>
        <a href="https://www.skool.com/forge-os-9794" className="px-5 py-2.5 bg-zinc-900 text-white text-xs font-medium rounded-full hover:bg-zinc-700 transition-colors duration-200">
          Join the Skool
        </a>
      </nav>

      {/* Header */}
      <section className="pt-48 pb-16 px-8 max-w-5xl mx-auto">
        <div className="reveal flex items-center gap-4 mb-12 text-[11px] tracking-[0.2em] text-zinc-400 font-medium uppercase">
          <span className="inline-block w-10 h-px bg-zinc-300" />
          _builds
        </div>
        <h1
          className="reveal font-light tracking-tight leading-[0.95] text-zinc-900 mb-8"
          style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", transitionDelay: "60ms" }}
        >
          Things I&apos;ve<br />
          <span className="text-zinc-400">built.</span>
        </h1>
        <p className="reveal text-zinc-500 font-light text-lg max-w-lg leading-relaxed" style={{ transitionDelay: "120ms" }}>
          All of it in 4-hour windows. All of it intentionally small.
        </p>
      </section>

      {/* Builds list */}
      <section className="px-8 pb-32 max-w-5xl mx-auto">
        <div className="space-y-0">
          {BUILDS.map((build, i) => (
            <div
              key={i}
              className="reveal border-t border-zinc-200 py-12 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Left: meta */}
              <div>
                <div
                  className="select-none font-light text-zinc-100 leading-none -mb-2"
                  style={{ fontSize: "clamp(4rem, 10vw, 7rem)" }}
                >
                  {build.number}
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-4 h-px bg-orange-500" />
                  <span className="text-[11px] tracking-[0.2em] text-zinc-400 font-medium uppercase">{build.year}</span>
                </div>
                <span className={`inline-block text-[10px] font-medium tracking-widest uppercase px-2.5 py-1 rounded-full border ${STATUS_COLORS[build.status]}`}>
                  {build.status}
                </span>
              </div>

              {/* Right: content */}
              <div>
                <h2 className="text-2xl font-light text-zinc-900 tracking-tight mb-2">{build.name}</h2>
                <p className="text-sm font-medium text-zinc-500 mb-5">{build.tagline}</p>
                <p className="text-zinc-600 font-light leading-relaxed text-[15px] mb-6">{build.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {build.stack.map((tech) => (
                    <span key={tech} className="text-[10px] font-medium tracking-widest uppercase text-zinc-400 border border-zinc-200 rounded-full px-3 py-1">
                      {tech}
                    </span>
                  ))}
                </div>

                {build.href && (
                  <a href={build.href} className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 group">
                    View build <Arrow />
                  </a>
                )}
              </div>
            </div>
          ))}
          <div className="border-t border-zinc-200" />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <ForgeLogo className="text-zinc-400 w-5 h-5" />
          <span className="text-[11px] text-zinc-400 font-medium tracking-widest">FORGE OS</span>
        </div>
        <p className="text-[11px] text-zinc-400 font-light">&copy; 2026 Andrew Brough. All rights reserved.</p>
        <p className="text-[11px] text-zinc-400 font-medium tracking-widest">Colorado &middot; Est. 2024</p>
      </footer>

    </div>
  );
}
