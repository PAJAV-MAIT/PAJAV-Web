// Noticeboard entries. Newest first is handled automatically.
//
// Fields
//   id        unique slug (used in the URL hash: /announcements#id)
//   type      "Event" | "Recruitment" | "Notice" | "Result"
//   title, summary (one or two sentences), body (array of paragraphs)
//   date      "YYYY-MM-DD", "YYYY-MM", or null for "date to be announced"
//   dateLabel optional [big, small] text to show instead of the date
//   time, venue            optional
//   element   one of: prithvi, agni, jal, aakash, vaayu, tech (optional)
//   pinned    true keeps it at the top of the list
//   image     optional poster in /public
//   link      optional { label, href }
//   contacts  optional list of names
//
// Entries marked SAMPLE are placeholders written for the redesign —
// replace them with real notices or delete them.

export const announcements = [
  {
    id: "membership-open",
    type: "Recruitment",
    pinned: true,
    title: "Membership is open",
    summary:
      "Any MAIT student who wants to work on the five elements — through code, design, outreach or events — can join PAJAV.",
    body: [
      "Fill in the membership form and tell us which team you'd like to work with. The coordinators will get in touch once you've applied.",
      "No prior experience is needed. Every team on the People page takes newcomers.",
    ],
    date: null,
    dateLabel: ["Open", "Apply any time"],
    element: "tech",
    link: { label: "Open the membership form", href: "JOIN_FORM" },
  },
  {
    id: "donation-drive-2025",
    type: "Event",
    title: "Donation Drive",
    summary:
      "Used clothes, toys, books or anything that can bring comfort to someone in need. Together, let's promote literacy.",
    body: [
      "Do you have used clothes, toys, books or any other items that can bring joy and comfort to someone in need? Join us in our donation drive and contribute to a noble cause.",
      "Every contribution counts. Let's spread joy together.",
    ],
    date: "2025-02-18",
    time: "1:00 – 2:00 PM",
    venue: "Room 812, Block 8, MAIT",
    element: "prithvi",
    image: "/donation-drive-2025.webp",
    imageAlt:
      "Poster for the PAJAV Donation Drive on 18 February 2025, Room 812, Block 8, MAIT",
    contacts: ["Ashish Dhinwa", "Divyatmika Sah", "Abhinab Kumar"],
  },
  {
    id: "website-live",
    type: "Notice",
    title: "The PAJAV website is live",
    summary:
      "Built by the society's website team. Announcements, projects and the member directory now live in one place.",
    body: [
      "Spotted something out of date or want your profile updated? Tell the website team or open an issue on the project's GitHub repository.",
    ],
    date: "2025-02",
    element: "tech",
    link: { label: "View the source on GitHub", href: "https://github.com/vaibhav092/PAJAV" },
  },
  {
    // SAMPLE — replace with the real plan or delete
    id: "plantation-drive",
    type: "Event",
    title: "Campus plantation drive",
    summary:
      "Volunteers wanted to plant and adopt saplings around the campus. Date and spots will be posted here.",
    body: [
      "Each volunteer team adopts a set of saplings and logs their growth through the semester.",
    ],
    date: null,
    element: "prithvi",
  },
  {
    // SAMPLE — replace with the real plan or delete
    id: "aqi-workshop",
    type: "Event",
    title: "Build-your-own air quality sensor",
    summary:
      "A hands-on session on wiring a low-cost particulate sensor and streaming readings to a dashboard.",
    body: [
      "Part of the Vaayu air-quality project. Bring a laptop; hardware is shared in teams.",
    ],
    date: null,
    element: "vaayu",
  },
];
