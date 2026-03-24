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

export default function About() {
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
          <a href="/about" className="text-zinc-900 transition-colors duration-200">_about</a>
          <a href="/builds" className="hover:text-zinc-900 transition-colors duration-200">_builds</a>
          <a href="/blog" className="hover:text-zinc-900 transition-colors duration-200">_blog</a>
          <a href="https://www.youtube.com/@forgeOS108" className="hover:text-zinc-900 transition-colors duration-200">YouTube</a>
          <a href="https://www.skool.com/forge-os-9794" className="hover:text-zinc-900 transition-colors duration-200">Community</a>
        </div>
        <a href="https://www.skool.com/forge-os-9794" className="px-5 py-2.5 bg-zinc-900 text-white text-xs font-medium rounded-full hover:bg-zinc-700 transition-colors duration-200">
          Join the Skool
        </a>
      </nav>

      {/* Header */}
      <section className="pt-48 pb-20 px-8 max-w-4xl mx-auto">
        <div className="reveal flex items-center gap-4 mb-12 text-[11px] tracking-[0.2em] text-zinc-400 font-medium uppercase">
          <span className="inline-block w-10 h-px bg-zinc-300" />
          _about
        </div>
        <h1
          className="reveal font-light tracking-tight leading-[0.95] text-zinc-900 mb-8"
          style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", transitionDelay: "60ms" }}
        >
          Stay-at-home dad.<br />
          <span className="text-zinc-400">Autonomous builder.</span>
        </h1>
        <p className="reveal text-zinc-500 font-light text-lg max-w-xl leading-relaxed" style={{ transitionDelay: "120ms" }}>
          I work 4-hour windows — 5 AM to 9 AM, while my daughter sleeps. That constraint isn't a problem. It's the whole point.
        </p>
      </section>

      {/* Story */}
      <section className="px-8 pb-24 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Left: story */}
          <div className="space-y-6">
            <div className="reveal h-px w-full bg-zinc-200" />
            <p className="reveal text-zinc-600 font-light leading-relaxed" style={{ transitionDelay: "40ms" }}>
              I became a stay-at-home dad in 2024 when my daughter was born. My wife went back to work. I had a newborn, no schedule, and a list of business ideas I'd been sitting on for years.
            </p>
            <p className="reveal text-zinc-600 font-light leading-relaxed" style={{ transitionDelay: "80ms" }}>
              The obvious move was to wait. Get stable. Come back to it later. Instead, I rebuilt everything around the 4 hours I had — 5 to 9 AM, every day, before she woke up.
            </p>
            <p className="reveal text-zinc-600 font-light leading-relaxed" style={{ transitionDelay: "120ms" }}>
              Forge Agency launched first — a B2B AI automation company that builds custom agents for businesses drowning in manual work. Then the Dad Strength App. Then OpenClaw, the autonomous task system that runs the whole operation while I'm changing diapers.
            </p>
            <p className="reveal text-zinc-600 font-light leading-relaxed" style={{ transitionDelay: "160ms" }}>
              None of this is hustle. It's systems. The goal is a $1M/year business that runs without requiring me to be at a desk 12 hours a day. That's the build. That's the point.
            </p>
          </div>

          {/* Right: the numbers */}
          <div className="space-y-8">
            <div className="reveal h-px w-full bg-zinc-200" />

            {[
              { label: "Location", value: "Colorado" },
              { label: "Role", value: "Stay-at-home dad + founder" },
              { label: "Work window", value: "5:00 — 9:00 AM" },
              { label: "Currently building", value: "Forge Agency, Dad Strength App, OpenClaw" },
              { label: "Revenue target", value: "$1M/year autonomous" },
              { label: "Building since", value: "2024" },
            ].map(({ label, value }, i) => (
              <div
                key={i}
                className="reveal flex justify-between items-baseline border-b border-zinc-100 pb-4"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span className="text-[11px] font-medium tracking-[0.15em] text-zinc-400 uppercase">{label}</span>
                <span className="text-sm font-light text-zinc-700 text-right max-w-[55%]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-zinc-950 py-28 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="reveal flex items-center gap-4 mb-10">
            <div className="w-6 h-px bg-orange-500" />
            <span className="text-[11px] tracking-[0.2em] text-zinc-500 font-medium uppercase">The Philosophy</span>
          </div>
          <blockquote
            className="reveal font-light text-white leading-[1.1] tracking-tight mb-12"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3.5rem)", transitionDelay: "80ms" }}
          >
            Small is not a limitation.<br />
            <span className="text-zinc-500">Small is the strategy.</span>
          </blockquote>
          <p className="reveal text-zinc-500 font-light text-base max-w-lg leading-relaxed" style={{ transitionDelay: "160ms" }}>
            Most businesses get bigger until they break. I'm building the opposite — tight, focused, profitable, and autonomous. One person. One set of systems. A product for every problem.
          </p>
        </div>
      </section>

      {/* Links */}
      <section className="py-24 px-8 bg-[#F8F8F6]">
        <div className="max-w-4xl mx-auto">
          <div className="reveal flex items-center gap-4 mb-12">
            <div className="w-6 h-px bg-zinc-300" />
            <span className="text-[11px] tracking-[0.2em] text-zinc-400 font-medium uppercase">Find me at</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "YouTube", desc: "The transparent build log — scripts, code, failures, and financials.", href: "https://www.youtube.com/@forgeOS108" },
              { label: "Skool Community", desc: "Forge OS Insider — the real tools, templates, and process.", href: "https://www.skool.com/forge-os-9794" },
              { label: "Dad Strength App", desc: "AI-programmed strength training for dads who don't have time.", href: "https://dad-strength-app-rnz1.vercel.app/dashboard" },
            ].map(({ label, desc, href }, i) => (
              <a
                key={i}
                href={href}
                className="reveal group block border border-zinc-200 rounded-2xl p-6 hover:border-zinc-300 hover:bg-white transition-all duration-200"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-zinc-900">{label}</span>
                  <Arrow />
                </div>
                <p className="text-xs text-zinc-500 font-light leading-relaxed">{desc}</p>
              </a>
            ))}
          </div>
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
