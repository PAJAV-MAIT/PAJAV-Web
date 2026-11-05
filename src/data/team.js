// People of PAJAV.
//
// `coordinators` are shown first on the People page and the home page.
// `teams` are the society's working groups. Write each name exactly the same
// way everywhere — the directory merges people by name, so "Vipul Choudhary"
// in three teams becomes one person with three roles.
//
// Optional per-person details go in `profiles`, keyed by the same name:
//   { year: "2nd year, IT", bio: "...", photo: "/people/name.webp",
//     linkedin: "https://...", github: "https://...", instagram: "https://..." }

export const coordinators = {
  faculty: [
    { name: "Vibhor Sharma", role: "Faculty coordinator" },
    { name: "Dr. Shalu Bhusambu", role: "Faculty coordinator" },
  ],
  students: [
    { name: "Ashish Dhinwa", role: "Student coordinator" },
    { name: "Divyatmika Sah", role: "Student coordinator" },
    { name: "Abhinab Kumar", role: "Student coordinator" },
  ],
};

export const teams = [
  {
    id: "event-planner",
    name: "Event Planner",
    about: "Plans drives, sessions and campaigns, from booking a room to running the day.",
    members: [
      "Ashish Dhinwa",
      "Abhinab Kumar",
      "Sneha Jain",
      "Parth",
      "Aayush Goyal",
      "Ankit Kumar Singh",
      "Advait Parashar",
      "Pulkit Rustagi",
      "Lavanya Saini",
      "Devansh Dwivedi",
      "Saurabh",
      "Divyatmika Sah",
    ],
  },
  {
    id: "outreach",
    name: "Outreach",
    about: "Takes PAJAV beyond the department: students, faculty, partner groups and donors.",
    members: [
      "Vipul Choudhary",
      "Pradeep Kumar",
      "Aarush Gupta",
      "Yash Rajput",
      "Saurabh",
      "Ashish Upadhyay",
      "Simran Arora",
      "Ashwani Kumar",
      "Chirag Dua",
      "Pallav Garg",
      "Bhuvnesh Gupta",
      "Vishal Sharma",
      "Shubham Mishra",
      "Suyash Kumar Agrahari",
      "Vaibhav Gupta",
      "Ritesh Kumar",
      "Ekansh Bahal",
      "Abhinav",
      "Tushar Malik",
    ],
  },
  {
    id: "website",
    name: "Website",
    about: "Builds and maintains this site.",
    members: ["Anshul", "Ankit", "Yuvraj", "Divyam", "Vaibhav", "Nikita", "Ayush Pandey"],
  },
  {
    id: "social-media",
    name: "Social Media",
    about: "Runs PAJAV's channels and turns every event into posts people share.",
    members: [
      "Prakriti Rai",
      "Anjali Pandey",
      "Sujal Kumar",
      "Saumya",
      "Aadi Aggarwal",
      "Satvik Harit",
    ],
  },
  {
    id: "logo",
    name: "Logo",
    about: "Designed the five-element logo.",
    members: ["Pranav Warvadekar", "Arush Gupta", "Saurabh", "Ashish Upadhyay"],
  },
  {
    id: "poster",
    name: "Poster",
    about: "Designs posters and visuals for every event.",
    members: ["Divyatmika Sah", "Shreya Chadha"],
  },
  {
    id: "tagline",
    name: "Tagline",
    about: "Wrote “Extending hope and empowering future”.",
    members: ["Dhruv Raheja", "Sarthak", "Ansh Pruthi"],
  },
  {
    id: "gd-moderator",
    name: "GD Moderator",
    about: "Moderates group discussions.",
    members: ["Vipul Choudhary", "Pradeep Kumar"],
  },
  {
    id: "report-preparation",
    name: "Report Preparation",
    about: "Writes up events and projects for the department record.",
    members: ["Rishav Singh", "Rashi Mahani"],
  },
  {
    id: "attendance",
    name: "Meeting Attendance",
    about: "Keeps attendance for society meetings.",
    members: ["Deepanshu Pandey", "Kritik Goel"],
  },
  {
    id: "whatsapp",
    name: "WhatsApp Group Moderator",
    about: "Keeps the members' group useful.",
    members: ["Vipul Choudhary"],
  },
  {
    id: "registration",
    name: "Registration Manager",
    about: "Handles sign-ups for events and membership.",
    members: ["Sarif"],
  },
];

export const profiles = {
  // "Vaibhav": { github: "https://github.com/vaibhav092" },
};

// ---------------------------------------------------------------------------
// Derived data — no need to edit below this line.

const slug = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const memberSlug = slug;

const all = new Map();
const add = (name, entry) => {
  const key = name.trim();
  if (!all.has(key)) all.set(key, { name: key, id: slug(key), roles: [], teams: [] });
  const person = all.get(key);
  if (entry.role && !person.roles.includes(entry.role)) person.roles.push(entry.role);
  if (entry.team && !person.teams.includes(entry.team)) person.teams.push(entry.team);
};

[...coordinators.faculty, ...coordinators.students].forEach((c) =>
  add(c.name, { role: c.role })
);
teams.forEach((t) => t.members.forEach((m) => add(m, { team: t.name })));

export const people = [...all.values()]
  .map((p) => ({ ...p, ...(profiles[p.name] || {}) }))
  .sort((a, b) => a.name.localeCompare(b.name));

export const personByName = Object.fromEntries(people.map((p) => [p.name, p]));

export const studentMembers = people.filter(
  (p) => !coordinators.faculty.some((f) => f.name === p.name)
);
