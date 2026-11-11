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

// The core team, grouped by department. Member details are transcribed from
// the 2026–27 Core Team Attendance Record; missing photos use the initials fallback.
export const coreTeams = [
  {
    team: "Project Team",
    description: "Leads and mentors student projects, helping teams shape ideas into working builds.",
    members: [
      { name: "Akshat Gupta", role: "Project Head", year: "3rd year, CSE" },
      { name: "Abhay Pant", role: "Project Lead", year: "3rd year, IT" },
      { name: "Abhinav Dixit", role: "Project Lead", year: "2nd year, CSE" },
      { name: "Aryan Malik", role: "Project Lead", year: "2nd year, CSE" },
      { name: "Prahlad", role: "Project Lead", year: "2nd year, IT" },
      { name: "Vansh Narula", role: "Project Lead", year: "2nd year, CSE" },
      { name: "Vedant Gangrade", role: "Project Lead", year: "2nd year, CSE" },
      { name: "Manvi Maheswari", role: "Project Lead", year: "3rd year" },
      { name: "Aryan Gupta", role: "Project Mentor", year: "2nd year, CSE" },
      { name: "Kunj Gupta", role: "Project Mentor", year: "3rd year, CSE" },
      { name: "Abhay Raj Singh", role: "Project Mentor", year: "3rd year, IT" },
      { name: "Satyam", role: "Project Mentor", year: "2nd year" },
    ],
  },
  {
    team: "Events & Workshop Team",
    description: "Plans PAJAV events and workshops, coordinating logistics and hands-on learning.",
    members: [
      { name: "Saptarshi Senapati", role: "Events & Workshop Head", year: "2nd year, ME" },
      { name: "Gautam Mishra", role: "Events & Logistics Coordinator", year: "2nd year, CST" },
      { name: "Pushkar Raghav", role: "Events & Learning Coordinator", year: "2nd year, IT" },
      { name: "Shefali Khurana", role: "Events & Learning Coordinator", year: "2nd year, IT" },
      { name: "Mohit Yadav", role: "Events & Logistics Coordinator", year: "3rd year, IT" },
    ],
  },
  {
    team: "PR & Outreach Team",
    description: "Shares PAJAV’s work through creative content, documentation, social media and outreach.",
    members: [
      { name: "Kanika Ahlawat", role: "PR & Outreach Head", year: "4th year, IT" },
      { name: "Ranvir Singh", role: "Creative Lead", year: "2nd year, IT" },
      { name: "Sumit Kumar", role: "Social Media Lead", year: "2nd year, CST" },
      { name: "Debopam Sarkar", role: "Documentation Lead", year: "2nd year, IT" },
      { name: "Sarthak Brar", role: "Editing Lead", year: "2nd year, CSE" },
      { name: "Rahul Kumar", role: "Content & Copywriter Lead", year: "2nd year, CSE" },
      { name: "Mohit Saini", role: "Outreach Lead", year: "2nd year, IT" },
    ],
  },
  {
    team: "Finance & Records Team",
    description: "Maintains society records and databases, and coordinates finance-related work.",
    members: [
      { name: "Saksham Saharan", role: "Database Head", year: "2nd year, CSE" },
      { name: "Vansh Vats", role: "Records Coordinator", year: "2nd year, CSE" },
      { name: "Sohail", role: "Finance Coordinator", year: "2nd year, IT" },
    ],
  },
];

export const session = "2026–27";
