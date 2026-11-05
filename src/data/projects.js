// ─────────────────────────────────────────────────────────────────────────
// Projects. See CONTENT_GUIDE.md → "Projects".
//
// {
//   id:        "unique-slug",
//   title:     "Project name",
//   status:    "active" (being built) | "idea" (in the idea pool) | "done",
//   element:   "prithvi" | "agni" | "jal" | "aakash" | "vayu" | "tech",
//   summary:   "One or two sentences: the problem and the solution.",
//   stack:     ["IoT", "React"],          // optional tech labels
//   sdg:       "SDG 11",                  // optional
//   lead:      "Name",                    // optional
//   lookingFor:["Hardware", "Design"],    // optional, shown as "Looking for"
//   image:     "/projects/slug.webp",     // optional cover; without it a cover is drawn
//   when:      "Feb 2025",                // optional, for done projects
//   links:     [{ label: "Repo", href: "https://…" }],
// }
//
// Entries marked SAMPLE are example ideas based on the five elements.
// Replace them with real proposals or delete them.
// ─────────────────────────────────────────────────────────────────────────

export const projects = [
  {
    id: "website",
    title: "PAJAV website",
    status: "active",
    element: "tech",
    summary:
      "This site: events, projects, people and a live space for every event we host. Open source, so anyone at MAIT can contribute.",
    stack: ["React", "Vite"],
    lookingFor: ["Frontend", "Design"],
    links: [{ label: "Repository", href: "https://github.com/vaibhav092/PAJAV" }],
  },
  {
    // SAMPLE
    id: "aqi-monitor",
    title: "Campus air-quality monitor",
    status: "idea",
    element: "vayu",
    summary:
      "Low-cost particulate sensors in a few blocks, streaming readings to a public dashboard through the day.",
    stack: ["IoT", "ESP32", "Dashboard"],
    sdg: "SDG 11",
    lookingFor: ["Hardware", "Backend"],
  },
  {
    // SAMPLE
    id: "lab-energy",
    title: "Smart lab energy meter",
    status: "idea",
    element: "agni",
    summary:
      "Measure what idle lab machines draw and suggest shutdown schedules that save power without getting in anyone's way.",
    stack: ["IoT", "Data analysis"],
    sdg: "SDG 7",
    lookingFor: ["Embedded", "Data"],
  },
  {
    // SAMPLE
    id: "leak-alert",
    title: "Water leak alert network",
    status: "idea",
    element: "jal",
    summary:
      "Flow sensors on campus water lines that flag unusual use, so leaks are caught in hours instead of weeks.",
    stack: ["IoT", "ML"],
    sdg: "SDG 6",
    lookingFor: ["Hardware", "ML"],
  },
  {
    // SAMPLE
    id: "ewaste-sorter",
    title: "E-waste sorting with computer vision",
    status: "idea",
    element: "prithvi",
    summary:
      "A camera-based classifier that helps a campus collection point sort chargers, batteries and boards for recycling.",
    stack: ["AI/ML", "Computer vision"],
    sdg: "SDG 12",
    lookingFor: ["ML", "Hardware"],
  },
  {
    // SAMPLE
    id: "heat-map",
    title: "Delhi heat & rain explorer",
    status: "idea",
    element: "aakash",
    summary:
      "Open satellite and weather data turned into a simple map of heat and rainfall across the city, year by year.",
    stack: ["Python", "Open data", "Maps"],
    sdg: "SDG 13",
    lookingFor: ["Data", "Frontend"],
  },
  {
    id: "donation-drive",
    title: "Donation Drive 2025",
    status: "done",
    when: "Feb 2025",
    element: "prithvi",
    summary:
      "Collected used clothes, toys and books for people who need them, with a focus on promoting literacy.",
    image: "/donation-drive-2025.webp",
  },
  {
    id: "identity",
    title: "Five-element identity",
    status: "done",
    when: "2025",
    element: "tech",
    summary:
      "The PAJAV logo: earth, fire, water, sky and air around a laptop — technology at the centre of the five elements.",
    image: "/logo.webp",
  },
];

export const statusLabel = {
  active: "Building now",
  idea: "Idea pool",
  done: "Shipped",
};
