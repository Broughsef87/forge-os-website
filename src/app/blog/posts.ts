export type Post = {
  slug: string;
  title: string;
  date: string;       // ISO: "2026-03-24"
  category: "AI Automation" | "Dad Life" | "Dad Strength" | "Building in Public";
  excerpt: string;
  body?: string;      // Full MDX/text content — optional for now, add when publishing
};

// Add new posts here — newest first.
export const POSTS: Post[] = [
  // Example (uncomment and edit when ready to publish):
  // {
  //   slug: "the-4-hour-window",
  //   title: "The 4-Hour Window",
  //   date: "2026-03-24",
  //   category: "Building in Public",
  //   excerpt:
  //     "I work 5 AM to 9 AM while my daughter sleeps. That constraint isn't a limitation — it's the whole architecture.",
  // },
];
