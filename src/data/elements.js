// The five elements PAJAV is named after, in the order of the acronym.
// `id` is used across announcements and projects to tag work by element.
// Colours live in index.css as --el-<id>.

export const elements = [
  {
    id: "prithvi",
    letter: "P",
    name: "Prithvi",
    devanagari: "पृथ्वी",
    english: "Earth",
    domain: "Earth conservation",
    blurb:
      "Reforestation, soil conservation, waste management and sustainable agriculture — plus getting reusable things to people who need them.",
  },
  {
    id: "agni",
    letter: "A",
    name: "Agni",
    devanagari: "अग्नि",
    english: "Fire",
    domain: "Clean energy",
    blurb:
      "Renewable-energy advocacy, energy conservation on campus and fire safety awareness.",
  },
  {
    id: "jal",
    letter: "J",
    name: "Jal",
    devanagari: "जल",
    english: "Water",
    domain: "Water protection",
    blurb:
      "River restoration, clean water access, rainwater harvesting and cutting water waste.",
  },
  {
    id: "aakash",
    letter: "A",
    name: "Aakash",
    devanagari: "आकाश",
    english: "Space",
    domain: "Space & climate science",
    blurb:
      "Climate research, space sustainability and astronomy outreach — looking up to understand what happens down here.",
  },
  {
    id: "vaayu",
    letter: "V",
    name: "Vaayu",
    devanagari: "वायु",
    english: "Air",
    domain: "Air quality",
    blurb:
      "Pollution reduction, emission awareness and green spaces in a city that needs them.",
  },
];

// Work that isn't tied to a single element (the laptop at the centre of the logo).
export const techTag = {
  id: "tech",
  name: "Tech",
  english: "Technology",
  domain: "Technology for the elements",
};

export const elementById = Object.fromEntries(
  [...elements, techTag].map((e) => [e.id, e])
);
