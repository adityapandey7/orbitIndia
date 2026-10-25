export type Industry = {
  slug: string;
  name: string;
  blurb: string;
  instruments: string[];
};

export const industries: Industry[] = [
  {
    slug: "fuels-energy",
    name: "Fuels & Energy",
    blurb:
      "Analysers for coal & coke, liquid fuels, biomass, explosives, fossil and alternative fuels and refuse-derived fuels.",
    instruments: ["Calorimeters", "Elemental Analyzers", "Proximate Analyzers", "Consumables"],
  },
  {
    slug: "minerals-materials",
    name: "Minerals & Materials",
    blurb:
      "A unique range of analytical instruments for minerals, materials, ceramics and polymers.",
    instruments: ["Calorimeters", "Elemental Analyzers", "Proximate Analyzers", "Consumables"],
  },
  {
    slug: "cement-steel",
    name: "Cement & Steel",
    blurb: "Test and quality-control instruments for the cement and steel industries.",
    instruments: ["Elemental Analyzers", "TGA", "Consumables"],
  },
  {
    slug: "chemical-pharmaceutical",
    name: "Chemical & Pharmaceutical",
    blurb: "A customised range of lab reactors and analytical instruments.",
    instruments: ["Reactors", "Elemental Analyzers", "TGA"],
  },
  {
    slug: "research-education",
    name: "R&D & Educational Institutes",
    blurb: "State-of-the-art analytical instruments and laboratory reactors.",
    instruments: ["Reactors", "Calorimeters", "Elemental Analyzers", "TGA"],
  },
  {
    slug: "food-agriculture",
    name: "Food & Agriculture",
    blurb:
      "Analysers and reactors for food, feed, soil testing, refuse derivatives, textiles, animal feed and many more applications.",
    instruments: ["Calorimeters", "Elemental Analyzer", "TGA", "Consumables"],
  },
];
