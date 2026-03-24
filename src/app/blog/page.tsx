"use client";

import { useEffect } from "react";
import ForgeLogo from "../../components/ForgeLogo";
import { POSTS } from "./posts";

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

const CATEGORY_COLORS: Record<string, string> = {
  "AI Automation":      "text-orange-600 border-orange-200 bg-orange-50",
  "Dad Life":           "text-blue-600 border-blue-200 bg-blue-50",
  "Dad Strength":       "text-green-700 border-green-200 bg-green-50",
  "Building in Public": "text-zinc-600 border-zinc-200 bg-zinc-100",
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long", day: "numeric", year: "numeric",
  });
}

export default function Blog() {
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
          <a href="/builds" className="hover:text-zinc-900 transition-colors duration-200">_builds</a>
          <a href="/blog" className="text-zinc-900 transition-colors duration-200">_blog</a>
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
          _blog
        </div>
        <h1
          className="reveal font-light tracking-tight leading-[0.95] text-zinc-900 mb-8"
          style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", transitionDelay: "60ms" }}
        >
          Writing.<br />
          <span className="text-zinc-400">No filters.</span>
        </h1>
        <p className="reveal text-zinc-500 font-light text-lg max-w-lg leading-relaxed" style={{ transitionDelay: "120ms" }}>
          AI automation, training for dads, building in public, and whatever else is worth putting on record.
        </p>
      </section>

      {/* Posts */}
      <section className="px-8 pb-32 max-w-5xl mx-auto">

        {POSTS.length === 0 ? (
          /* Empty state */
          <div className="border-t border-zinc-200 pt-16 pb-24 text-center">
            <div className="reveal mb-6">
              <div className="inline-block w-12 h-px bg-zinc-300" />
            </div>
            <p className="reveal text-zinc-400 font-light text-base max-w-sm mx-auto leading-relaxed" style={{ transitionDelay: "60ms" }}>
              First posts are in the pipeline. Subscribe on{" "}
              <a href="https://www.skool.com/forge-os-9794" className="underline underline-offset-4 hover:text-zinc-700 transition-colors">
                Skool
              </a>{" "}
              or{" "}
              <a href="https://www.youtube.com/@forgeOS108" className="underline underline-offset-4 hover:text-zinc-700 transition-colors">
                YouTube
              </a>{" "}
              to catch them when they drop.
            </p>
          </div>
        ) : (
          /* Post list */
          <div className="space-y-0">
            {POSTS.map((post, i) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="reveal group block border-t border-zinc-200 py-10 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 hover:bg-white -mx-4 px-4 rounded-xl transition-colors duration-200"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {/* Meta */}
                <div className="pt-1 space-y-3">
                  <p className="text-[11px] font-medium tracking-[0.15em] text-zinc-400 uppercase">
                    {formatDate(post.date)}
                  </p>
                  <span className={`inline-block text-[10px] font-medium tracking-widest uppercase px-2.5 py-1 rounded-full border ${CATEGORY_COLORS[post.category]}`}>
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h2 className="text-xl font-light text-zinc-900 tracking-tight leading-snug group-hover:text-zinc-700 transition-colors">
                      {post.title}
                    </h2>
                    <Arrow />
                  </div>
                  <p className="text-zinc-500 font-light text-[15px] leading-relaxed">{post.excerpt}</p>
                </div>
              </a>
            ))}
            <div className="border-t border-zinc-200" />
          </div>
        )}
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
