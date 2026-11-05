// Projects shown on the Projects page and the home page.
//
// status    "active" (in progress) | "planned" | "done"
// progress  0–100, only shown for active projects
// element   prithvi | agni | jal | aakash | vaayu | tech
// teams     names that match a team in team.js
// when      free text shown next to the status, e.g. "Feb 2025"
//
// Entries marked SAMPLE are proposals written for the redesign, based on the
// society's five domains. Confirm, edit or delete them.

export const projects = [
  {
    id: "website",
    title: "PAJAV website",
    status: "active",
    progress: 70,
    element: "tech",
    summary:
      "The society's home on the web: noticeboard, projects, showcase and member directory.",
    teams: ["Website"],
    links: [{ label: "Source", href: "https://github.com/vaibhav092/PAJAV" }],
  },
  {
    id: "social",
    title: "Social media presence",
    status: "active",
    progress: 40,
    element: "tech",
    summary:
      "Regular posts on drives, results and environmental awareness so students hear about PAJAV first.",
    teams: ["Social Media"],
  },
  {
    // SAMPLE
    id: "aqi-monitor",
    title: "Campus air-quality monitor",
    status: "planned",
    element: "vaayu",
    summary:
      "Low-cost particulate sensors in a few blocks, with a public dashboard showing readings through the day.",
    teams: ["Website", "Outreach"],
  },
  {
    // SAMPLE
    id: "ewaste",
    title: "E-waste collection point",
    status: "planned",
    element: "prithvi",
    summary:
      "A collection box for dead chargers, cables and batteries, handed over to a certified recycler each semester.",
    teams: ["Event Planner", "Outreach"],
  },
  {
    // SAMPLE
    id: "lab-energy",
    title: "Computer lab energy audit",
    status: "planned",
    element: "agni",
    summary:
      "Measure how much power idle lab machines draw and propose simple shutdown schedules.",
    teams: ["Report Preparation"],
  },
  {
    // SAMPLE
    id: "water-audit",
    title: "Rainwater harvesting audit",
    status: "planned",
    element: "jal",
    summary:
      "Map rooftop catchment on campus and estimate how much rainwater could be stored each monsoon.",
    teams: ["Report Preparation", "Outreach"],
  },
  {
    // SAMPLE
    id: "sky-night",
    title: "Night sky & space-tech talk",
    status: "planned",
    element: "aakash",
    summary:
      "An evening session on satellites that watch the climate, followed by telescope viewing if the sky allows.",
    teams: ["Event Planner"],
  },
  {
    id: "donation-drive",
    title: "Donation Drive 2025",
    status: "done",
    when: "18 Feb 2025",
    element: "prithvi",
    summary:
      "Collected used clothes, toys and books for people who need them, with a focus on promoting literacy.",
    teams: ["Event Planner", "Poster"],
  },
  {
    id: "identity",
    title: "Logo, tagline & identity",
    status: "done",
    when: "2025",
    element: "tech",
    summary:
      "The five-element logo with the laptop at its centre, and the line “Extending hope and empowering future”.",
    teams: ["Logo", "Tagline"],
  },
];

export const statusLabel = {
  active: "In progress",
  planned: "Planned",
  done: "Completed",
};
