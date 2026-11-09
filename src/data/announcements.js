// ─────────────────────────────────────────────────────────────────────────
// Events & notices. Newest first is automatic. See CONTENT_GUIDE.md → "Events".
//
// {
//   id:       "unique-slug",                  // used in links: /events#unique-slug
//   type:     "Workshop" | "Hackathon" | "Competition" | "Talk" | "Drive" | "Notice" | "Recruitment",
//   title:    "Short title",
//   summary:  "One or two sentences.",
//   body:     ["Paragraph", "Paragraph"],     // optional, shown when expanded
//   date:     "2026-11-20",                   // or "2026-11" or null (date to be announced)
//   time:     "2:00 – 4:00 PM",               // optional
//   venue:    "Room 812, Block 8",            // optional
//   element:  "prithvi" | "agni" | "jal" | "aakash" | "vayu" | "tech",   // optional
//   tags:     ["AI/ML", "Beginner friendly"], // optional
//   image:    "/poster.webp",                 // optional, file in /public
//   link:     { label: "Register", href: "https://…" },   // optional
//   pinned:   true,                           // optional, keeps it on top
// }
// ─────────────────────────────────────────────────────────────────────────

export const announcements = [
  {
    id: "core-members-2026",
    type: "Recruitment",
    pinned: true,
    title: "Core team 2026 selected",
    summary:
      "Applications to join the core team closed on 1 November. The new core team will be introduced on the People page soon.",
    body: [
      "Thank you to everyone who applied. The core team builds and shapes the society: running workshops, leading projects and taking PAJAV to hackathons.",
      "Missed it? Workshops, showcases and open-source contribution stay open to every MAIT student — you don't need to be a member.",
    ],
    date: "2026-11-01",
    element: "tech",
    tags: ["Core team"],
    image: "/core-recruitment-2026.webp",
    imageAlt:
      "PAJAV core-member recruitment poster: join as core members of PAJAV society, apply by 1 November",
  },
  {
    id: "website-relaunch",
    type: "Notice",
    title: "New PAJAV website",
    summary:
      "Events, projects, programmes and people in one place, with a live space that switches on whenever we host an event.",
    date: "2026-11",
    element: "tech",
    tags: ["Open source"],
    link: { label: "Contribute on GitHub", href: "https://github.com/PAJAV-MAIT/PAJAV-Web" },
  },
  {
    id: "donation-drive-2025",
    type: "Drive",
    title: "Donation Drive",
    summary:
      "Used clothes, toys and books collected for people who need them — together, promoting literacy.",
    body: [
      "Students brought used clothes, toys, books and other items that could bring joy and comfort to someone in need.",
    ],
    date: "2025-02-18",
    time: "1:00 – 2:00 PM",
    venue: "Room 812, Block 8, MAIT",
    element: "prithvi",
    tags: ["Social initiative"],
    image: "/donation-drive-2025.webp",
    imageAlt: "Poster for the PAJAV Donation Drive on 18 February 2025, Room 812, Block 8, MAIT",
  },
];
