// ─────────────────────────────────────────────────────────────────────────
// Society-wide details. See CONTENT_GUIDE.md (repo root) for how to edit.
// ─────────────────────────────────────────────────────────────────────────

export const site = {
  name: "PAJAV",
  fullName: "PAJAV Society",
  what: "Student-led technology & innovation society",
  affiliation: "Department of Information Technology",
  institute: "Maharaja Agrasen Institute of Technology",
  instituteShort: "MAIT",
  address: "Sector 22, Rohini, Delhi 110086",

  // Lines used across the site
  slogan: "Build. Learn. Compete.",
  motto: "Where coders meet the cause",
  promise: "Technology for a better tomorrow",
  tagline2: "Different skills. Same goal.",
  closer: ["Rooted at MAIT.", "Built for the planet."],
  intro:
    "A community where students learn by building real-world solutions, collaborate through open source, and turn their technical skills into meaningful opportunities.",

  departmentSite: "https://it.mait.ac.in/",
  email: "", // e.g. "pajav@mait.ac.in" — appears in the footer once filled in

  // Leave a link empty ("") to hide it.
  social: {
    instagram: "",
    linkedin: "",
    github: "https://github.com/vaibhav092/PAJAV",
    whatsapp: "",
  },

  // ── Recruitment ──────────────────────────────────────────────────────────
  // status: "open"   → "Apply now" buttons appear everywhere, linking to formUrl
  //         "closed" → buttons are replaced by `closedMessage`
  recruitment: {
    status: "closed",
    title: "Core members 2026",
    formUrl: "https://forms.gle/a4mNFD23yM1RepFT8",
    deadline: "2026-11-01", // YYYY-MM-DD, shown while open
    closedMessage:
      "Core-member applications for 2026 have closed and the new core team has been selected. Workshops and open-source projects stay open to every MAIT student.",
  },
};
