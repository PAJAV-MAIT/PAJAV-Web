// The five elements PAJAV is named after, in the order of the acronym.
// `id` is used to tag projects and events; the colour lives in index.css (--el-<id>).

export const elements = [
  {
    id: "prithvi",
    letter: "P",
    name: "Prithvi",
    devanagari: "पृथ्वी",
    english: "Earth",
    domain: "Land, waste & food",
    blurb: "Waste management, recycling, sustainable agriculture and green campuses.",
  },
  {
    id: "agni",
    letter: "A",
    name: "Agni",
    devanagari: "अग्नि",
    english: "Fire",
    domain: "Energy",
    blurb: "Clean energy, smarter power use and safety systems.",
  },
  {
    id: "jal",
    letter: "J",
    name: "Jal",
    devanagari: "जल",
    english: "Water",
    domain: "Water",
    blurb: "Clean water access, leak detection, rainwater harvesting and saving every litre.",
  },
  {
    id: "aakash",
    letter: "A",
    name: "Aakash",
    devanagari: "आकाश",
    english: "Sky",
    domain: "Climate & space",
    blurb: "Climate data, satellites, space tech and the science above our heads.",
  },
  {
    id: "vayu",
    letter: "V",
    name: "Vayu",
    devanagari: "वायु",
    english: "Air",
    domain: "Air quality",
    blurb: "Air-quality sensing, pollution awareness and cleaner cities.",
  },
];

// For work that serves people and communities rather than one element
// (the laptop at the centre of the logo).
export const techTag = { id: "tech", name: "Tech for good", english: "Technology", domain: "Society" };

export const elementById = Object.fromEntries([...elements, techTag].map((e) => [e.id, e]));
