// Things PAJAV members made. `kind` decides how the item is drawn:
//   "image"  — needs `image` (in /public) and `alt`
//   "quote"  — needs `text`, drawn as type
// `credits` are member names; they link to the People page.

export const showcase = [
  {
    id: "logo",
    kind: "image",
    title: "The PAJAV logo",
    note: "Earth, fire, water, sky and air around a laptop — the five elements with technology at the centre.",
    image: "/logo.webp",
    alt: "PAJAV logo: leaves, flame, water, a night sky and a cloud surrounding a laptop, ringed by the words Official Society of IT – MAIT",
    credits: ["Pranav Warvadekar", "Arush Gupta", "Saurabh", "Ashish Upadhyay"],
    team: "Logo",
  },
  {
    id: "donation-poster",
    kind: "image",
    title: "Donation Drive poster",
    note: "Poster for the February 2025 drive.",
    image: "/donation-drive-2025.webp",
    original: "/DONATION.jpg",
    alt: "Poster for the PAJAV Donation Drive, 18 February 2025, Room 812, Block 8, MAIT",
    credits: ["Shreya Chadha", "Divyatmika Sah"],
    team: "Poster",
  },
  {
    id: "tagline",
    kind: "quote",
    title: "The tagline",
    text: "Extending hope and empowering future",
    note: "The society's motto, in five words.",
    credits: ["Dhruv Raheja", "Sarthak", "Ansh Pruthi"],
    team: "Tagline",
  },
];
