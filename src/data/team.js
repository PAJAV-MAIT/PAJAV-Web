// ─────────────────────────────────────────────────────────────────────────
// People of PAJAV. See CONTENT_GUIDE.md → "Members".
//
// Every person is an object:
//   { name: "Full Name", role: "Role",
//     photo:  "/people/full-name.webp",      // main photo (shown in black & white)
//     photo2: "/people/full-name-fun.webp",  // second photo, revealed when the card flips on hover
//     funFact: "Breaks Arduinos for fun",    // shown on the back of the card if there's no photo2
//     year: "3rd year, IT", linkedin: "https://…", github: "https://…" }
// Only `name` and `role` are required. Photos go in /public/people/.
// ─────────────────────────────────────────────────────────────────────────

export const leadership = [
  { name: "Rakshit Mehta", role: "President" },
  { name: "Ashutosh", role: "Vice President" },
  { name: "Sawant Chandra", role: "General Secretary" },
  { name: "Snehal Prince", role: "Vice General Secretary" },
];

export const faculty = [
  { name: "Mr. Vibhor Sharma", role: "Convenor, PAJAV Society" },
  { name: "Dr. Shalu Bhusambu", role: "Co-Convenor, PAJAV Society" },
  { name: "Prof. Amita Goel", role: "Head of Department, Information Technology" },
];

// The core team, grouped by team. Add groups as they are formed, e.g.
//   { team: "Tech", members: [{ name: "…", role: "Lead" }, { name: "…" }] },
// While this list is empty the People page says the core team is coming soon.
export const coreTeams = [];

export const session = "2026–27";
