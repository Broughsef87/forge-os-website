"use client";

import { useEffect } from "react";
import Image from "next/image";
import ForgeLogo from "../components/ForgeLogo";

// â”€â”€ Arrow icon shared across pillar CTAs â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function Arrow() {
  return (
    <svg
      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}

export default function Home() {
  // â”€â”€ Scroll reveal via IntersectionObserver â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
      { threshold: 0.08, rootMargin: "0px 0px -48px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#F8F8F6] text-zinc-900 font-sans min-h-screen overflow-x-hidden">

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          NAV
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <nav className="fixed top-0 w-full z-50 bg-[#F8F8F6]/80 backdrop-blur-xl border-b border-zinc-200/80 px-8 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <ForgeLogo className="text-zinc-900 w-6 h-6" />
          <span className="font-medium tracking-widest text-[11px] text-zinc-900">
            FORGE OS
          </span>
        </div>
        <div className="hidden md:flex gap-10 text-xs font-medium tracking-wide text-zinc-400">
          <a href="https://www.youtube.com/@forgeOS108" className="hover:text-zinc-900 transition-colors duration-200">
            YouTube
          </a>
          <a href="https://www.skool.com/forge-os-9794" className="hover:text-zinc-900 transition-colors duration-200">
            Community
          </a>
          <a href="https://dad-strength-app-rnz1.vercel.app/dashboard" className="hover:text-zinc-900 transition-colors duration-200">
            Dad Strength
          </a>
        </div>
        <a
          href="https://www.skool.com/forge-os-9794"
          className="px-5 py-2.5 bg-zinc-900 text-white text-xs font-medium rounded-full hover:bg-zinc-700 transition-colors duration-200"
        >
          Join the Skool
        </a>
      </nav>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          HERO
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="pt-48 pb-28 px-8 max-w-5xl mx-auto flex flex-col items-center text-center">

        {/* Eyebrow */}
        <div className="reveal flex items-center gap-4 mb-14 text-[11px] tracking-[0.2em] text-zinc-400 font-medium uppercase">
          <span className="inline-block w-10 h-px bg-zinc-300" />
          Est. 2024 Â· Colorado
          <span className="inline-block w-10 h-px bg-zinc-300" />
        </div>

        {/* Headline â€” two lines with weight / color contrast */}
        <h1
          className="reveal font-light tracking-tight leading-[0.9] text-zinc-900"
          style={{ fontSize: "clamp(3.25rem, 8.5vw, 8rem)", transitionDelay: "60ms" }}
        >
          Documenting the
        </h1>
        <h1
          className="reveal font-light tracking-tight leading-[0.9] text-zinc-400 mb-14"
          style={{ fontSize: "clamp(3.25rem, 8.5vw, 8rem)", transitionDelay: "130ms" }}
        >
          autonomous build.
        </h1>

        {/* Sub-copy */}
        <p
          className="reveal text-base md:text-lg text-zinc-500 font-light max-w-lg mb-12 leading-relaxed"
          style={{ transitionDelay: "200ms" }}
        >
          The media layer of Forge. YouTube, the Skool community, and the Dad
          Strength App â€” building a $1M/year autonomous business, publicly.
        </p>

        {/* CTAs */}
        <div
          className="reveal flex flex-col sm:flex-row gap-3 mb-24"
          style={{ transitionDelay: "270ms" }}
        >
          <a
            href="https://www.youtube.com/@forgeOS108"
            className="px-9 py-4 bg-zinc-900 text-white rounded-full text-sm font-medium hover:bg-zinc-700 transition-colors duration-200"
          >
            Watch the Journey
          </a>
          <a
            href="https://dad-strength-app-rnz1.vercel.app/dashboard"
            className="px-9 py-4 bg-white text-zinc-600 rounded-full text-sm font-medium border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 transition-all duration-200"
          >
            Get Dad Strength
          </a>
        </div>

        {/* Stat strip */}
        <div
          className="reveal w-full max-w-sm"
          style={{ transitionDelay: "340ms" }}
        >
          <div className="h-px w-full bg-zinc-200 mb-8" />
          <div className="grid grid-cols-3">
            {[
              { value: "121+", label: "Videos" },
              { value: "400+", label: "Members" },
              { value: "$1M",  label: "Target"  },
            ].map((stat, i) => (
              <div
                key={i}
                className={`text-center ${i < 2 ? "border-r border-zinc-200" : ""}`}
              >
                <div className="text-2xl font-light text-zinc-900 tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-[11px] text-zinc-400 font-medium tracking-widest uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          MANIFESTO
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="bg-zinc-950 py-32 px-8">
        <div className="max-w-4xl mx-auto">

          <div className="reveal flex items-center gap-4 mb-10">
            <div className="w-6 h-px bg-orange-500" />
            <span className="text-[11px] tracking-[0.2em] text-zinc-500 font-medium uppercase">
              The Foundation
            </span>
          </div>

          <blockquote
            className="reveal font-light text-white leading-[1.08] tracking-tight mb-16"
            style={{
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              transitionDelay: "100ms",
            }}
          >
            We build in public.<br />
            Not for the algorithm â€”<br />
            <span className="text-zinc-500">for the record.</span>
          </blockquote>

          <div
            className="reveal h-px w-full bg-zinc-800 mb-10"
            style={{ transitionDelay: "200ms" }}
          />
          <p
            className="reveal text-[11px] text-zinc-600 font-medium tracking-[0.2em] uppercase"
            style={{ transitionDelay: "260ms" }}
          >
            Forge OS Â· Colorado Â· Est. 2024
          </p>

        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          PILLAR 01 â€” YOUTUBE
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section id="youtube" className="py-28 px-8 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <div
              className="reveal select-none font-light text-zinc-100 leading-none -mb-6 pointer-events-none"
              style={{ fontSize: "clamp(6rem, 16vw, 13rem)", transitionDelay: "0ms" }}
            >
              01
            </div>
            <div
              className="reveal flex items-center gap-3 mb-5"
              style={{ transitionDelay: "60ms" }}
            >
              <div className="w-5 h-px bg-orange-500" />
              <span className="text-[11px] tracking-[0.2em] text-zinc-400 font-medium uppercase">
                YouTube
              </span>
            </div>
            <h2
              className="reveal text-4xl md:text-5xl font-light text-zinc-900 tracking-tight mb-6 leading-[1.05]"
              style={{ transitionDelay: "120ms" }}
            >
              The transparent<br />build log.
            </h2>
            <p
              className="reveal text-zinc-500 font-light leading-relaxed mb-8 max-w-sm text-[15px]"
              style={{ transitionDelay: "180ms" }}
            >
              Scripts, code, failures, and financials â€” every week. Long-form
              transparency for builders who want to see what the build actually
              costs.
            </p>
            <a
              href="https://www.youtube.com/@forgeOS108"
              className="reveal inline-flex items-center gap-2 text-sm font-medium text-zinc-900 group"
              style={{ transitionDelay: "240ms" }}
            >
              Watch the channel
              <Arrow />
            </a>
          </div>

          {/* Image */}
          <div
            className="reveal relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100"
            style={{ transitionDelay: "80ms" }}
          >
            <Image
              src="/burning-hero-anvil.png"
              alt="The Forge â€” forging in public"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          PILLAR 02 â€” SKOOL
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section id="skool" className="py-28 px-8 bg-[#F8F8F6] border-b border-zinc-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Visual â€” left on desktop */}
          <div
            className="reveal order-2 md:order-1 relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-950"
            style={{ transitionDelay: "80ms" }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <span className="text-[6rem] font-light text-zinc-800 leading-none">S</span>
              <div className="w-6 h-px bg-orange-500" />
              <span className="text-[11px] tracking-[0.25em] text-zinc-600 uppercase font-medium">
                The Skool
              </span>
            </div>
          </div>

          {/* Text â€” right on desktop */}
          <div className="order-1 md:order-2">
            <div
              className="reveal select-none font-light text-zinc-200 leading-none -mb-6 pointer-events-none"
              style={{ fontSize: "clamp(6rem, 16vw, 13rem)", transitionDelay: "0ms" }}
            >
              02
            </div>
            <div
              className="reveal flex items-center gap-3 mb-5"
              style={{ transitionDelay: "60ms" }}
            >
              <div className="w-5 h-px bg-orange-500" />
              <span className="text-[11px] tracking-[0.2em] text-zinc-400 font-medium uppercase">
                Community
              </span>
            </div>
            <h2
              className="reveal text-4xl md:text-5xl font-light text-zinc-900 tracking-tight mb-6 leading-[1.05]"
              style={{ transitionDelay: "120ms" }}
            >
              The Skool<br />community.
            </h2>
            <p
              className="reveal text-zinc-500 font-light leading-relaxed mb-8 max-w-sm text-[15px]"
              style={{ transitionDelay: "180ms" }}
            >
              A private collective of builders, founders, and fathers sharing
              the exact tools and templates we use to run Forge. No posturing â€”
              just the real work.
            </p>
            <a
              href="https://www.skool.com/forge-os-9794"
              className="reveal inline-flex items-center gap-2 text-sm font-medium text-zinc-900 group"
              style={{ transitionDelay: "240ms" }}
            >
              Join the community
              <Arrow />
            </a>
          </div>

        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          PILLAR 03 â€” DAD STRENGTH APP
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section id="app" className="py-28 px-8 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <div
              className="reveal select-none font-light text-zinc-100 leading-none -mb-6 pointer-events-none"
              style={{ fontSize: "clamp(6rem, 16vw, 13rem)", transitionDelay: "0ms" }}
            >
              03
            </div>
            <div
              className="reveal flex items-center gap-3 mb-5"
              style={{ transitionDelay: "60ms" }}
            >
              <div className="w-5 h-px bg-orange-500" />
              <span className="text-[11px] tracking-[0.2em] text-zinc-400 font-medium uppercase">
                Dad Strength App
              </span>
            </div>
            <h2
              className="reveal text-4xl md:text-5xl font-light text-zinc-900 tracking-tight mb-6 leading-[1.05]"
              style={{ transitionDelay: "120ms" }}
            >
              Built for the man<br />with no time.
            </h2>
            <p
              className="reveal text-zinc-500 font-light leading-relaxed mb-8 max-w-sm text-[15px]"
              style={{ transitionDelay: "180ms" }}
            >
              HQ, Mind, Body, Spirit. Functional strength without the
              alpha-bro posturing. Built to make you capable â€” at the gym and
              at home.
            </p>
            <a
              href="#"
              className="reveal inline-flex items-center gap-2 text-sm font-medium text-zinc-900 group"
              style={{ transitionDelay: "240ms" }}
            >
              Get Dad Strength
              <Arrow />
            </a>
          </div>

          {/* Visual */}
          <div
            className="reveal relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-950"
            style={{ transitionDelay: "80ms" }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
              <span className="text-6xl font-light text-zinc-700 leading-none">Dad</span>
              <span className="text-6xl font-light text-white leading-none">Strength</span>
              <div className="mt-5 w-8 h-px bg-orange-500" />
            </div>
          </div>

        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          STATS STRIP
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="bg-zinc-950 py-20 px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { value: "121",  label: "Episodes"    },
            { value: "400+", label: "Members"     },
            { value: "$1M",  label: "The Target"  },
            { value: "3",    label: "Products"    },
          ].map((stat, i) => (
            <div
              key={i}
              className={`reveal text-center py-10 px-4 ${
                i < 3 ? "border-r border-zinc-800" : ""
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-4xl md:text-5xl font-light text-white tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-[11px] text-zinc-600 font-medium tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          CTA
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section id="join" className="py-40 px-8 bg-[#F8F8F6]">
        <div className="max-w-2xl mx-auto text-center">

          <div className="reveal flex items-center justify-center gap-4 mb-12 text-[11px] tracking-[0.2em] text-zinc-400 font-medium uppercase">
            <span className="inline-block w-8 h-px bg-zinc-300" />
            Join us
            <span className="inline-block w-8 h-px bg-zinc-300" />
          </div>

          <h2
            className="reveal font-light text-zinc-900 tracking-tight mb-8 leading-[1.05]"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              transitionDelay: "80ms",
            }}
          >
            Build alongside us.
          </h2>

          <p
            className="reveal text-zinc-500 font-light text-lg mb-14 max-w-md mx-auto leading-relaxed"
            style={{ transitionDelay: "160ms" }}
          >
            Access the community, the app, and the full transparency of the
            build. Everything we know â€” shared.
          </p>

          <div
            className="reveal flex flex-col sm:flex-row gap-3 justify-center"
            style={{ transitionDelay: "240ms" }}
          >
            <a
              href="#"
              className="px-10 py-4 bg-zinc-900 text-white rounded-full text-sm font-medium hover:bg-zinc-700 transition-colors duration-200"
            >
              Join the Skool
            </a>
            <a
              href="https://www.youtube.com/@forgeOS108"
              className="px-10 py-4 bg-white text-zinc-600 rounded-full text-sm font-medium border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 transition-all duration-200"
            >
              Watch first
            </a>
          </div>

        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          FOOTER
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <footer className="py-10 px-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <ForgeLogo className="text-zinc-400 w-5 h-5" />
          <span className="text-[11px] text-zinc-400 font-medium tracking-widest">
            FORGE OS
          </span>
        </div>
        <p className="text-[11px] text-zinc-400 font-light">
          Â© 2026 Forge OS. All rights reserved.
        </p>
        <p className="text-[11px] text-zinc-400 font-medium tracking-widest">
          Colorado Â· Est. 2024
        </p>
      </footer>

    </div>
  );
}

