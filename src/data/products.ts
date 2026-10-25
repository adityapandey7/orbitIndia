export type Category = {
  slug: string;
  name: string;
  /** Short micro-snippet shown at the top of the category page. */
  blurb: string;
  /** Long-form educational copy shown below the grid inside a Read more block. */
  guide: string[];
  /** FAQ block near the page footer — targets long-tail buyer queries. */
  faq: { q: string; a: string }[];
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  brand: string;
  origin: string;
  tagline: string;
  description: string;
  features: string[];
  applications: string[];
};

export const categories: Category[] = [
  {
    slug: "calorimeters",
    name: "Calorimeters",
    blurb:
      "Bomb, semimicro, solution, detonation and reaction calorimeters from Parr Instrument Company, USA.",
    guide: [
      "A calorimeter measures the heat released when a sample burns, which is how the calorific value of coal, coke, liquid fuels, biomass and refuse-derived fuels is determined. Choosing the right instrument comes down to sample type, throughput and the standard you must comply with — ASTM D240 and ISO 1928 for solid fuels, ASTM D4809 for liquid fuels.",
      "Parr's isoperibol models (7200 and 7400) suit most fuel-testing laboratories: the 7200 delivers research-grade precision, while the 7400 automates the full cycle for high-throughput quality-control work. For smaller sample masses, the semimicro calorimeter handles samples as light as 0.8 g, and specialised detonation and reaction calorimeters cover explosive-energy and reaction-heat measurement. Every unit we supply is installed, commissioned and serviced by our own engineers, with bombs, ignition wires, benzoic acid standards and spares held in stock across India.",
    ],
    faq: [
      { q: "Which calorimeter should I choose for routine coal analysis?", a: "For routine coal and coke CV testing, the Parr 7400 is the best fit — it runs the complete calorimetric cycle automatically, so one operator can process a full day of determinations. If you need research-grade precision on fewer samples, the 7200 is the better choice." },
      { q: "Do you supply benzoic acid standards and bomb consumables?", a: "Yes. We stock benzoic acid calibration standards, ignition wires, rings, gaskets, O-rings and stainless-steel bomb options, and can dispatch them with the instrument or separately against a purchase order." },
      { q: "Is installation and training included?", a: "Installation, commissioning and operator training are provided by our field engineers at your site, anywhere in India. Annual maintenance and calibration support are available after the warranty period." },
      { q: "Which standards do these calorimeters comply with?", a: "The Parr isoperibol range is built to ASTM D240, ASTM D4809, ISO 1928 and equivalent national standards for gross calorific value determination. Tell us your compliance requirement and we will configure the instrument and reporting accordingly." },
    ],
  },
  {
    slug: "thermogravimetric-analysers",
    name: "Thermogravimetric Analysers",
    blurb:
      "Reliable and fast proximate analysis by thermogravimetry — TGA 3000 and TGA 1500.",
    guide: [
      "Thermogravimetric analysis determines moisture, volatile matter, fixed carbon and ash in a single run by measuring weight change as the sample is heated through a defined temperature programme. It replaces the traditional muffle-furnace workflow — less operator time, better repeatability and closed-loop reporting for fuel and mineral laboratories.",
      "The TGA 3000 handles up to 34 samples in a single sequence with automatic evaluation, while the benchtop TGA 1500 suits lower-throughput labs. Both are widely used for coal, coke, biomass, petroleum coke and soil analysis under ASTM D7582 and ISO 17245. Orbit supplies the instruments with calibration, method setup and after-sales service through our 14 sales & service locations.",
    ],
    faq: [
      { q: "How many samples can the TGA 3000 run at once?", a: "The TGA 3000 accepts up to 34 samples in one automatic sequence, so a full proximate analysis of a day's batch runs unattended — including moisture, volatile matter, fixed carbon and ash calculation." },
      { q: "Which standards apply to thermogravimetric proximate analysis?", a: "The TGA range follows ASTM D7582, ISO 17245 and ISO 11722 for proximate analysis of solid fuels, and we can set up methods matching your lab's own quality scheme." },
      { q: "Can TGA replace the muffle furnace method?", a: "Yes — TGA delivers the same moisture, volatile and ash results in one automated run with far less operator handling. Most labs we supply to have fully retired the manual furnace method after validation." },
    ],
  },
  {
    slug: "elemental-analyzers",
    name: "Elemental Analyzers",
    blurb:
      "Carbon & Sulfur, ONH and CHNS/O analysers for inorganic and organic elemental analysis.",
    guide: [
      "Elemental analysers quantify carbon, sulfur, hydrogen, nitrogen, oxygen and moisture in a sample — critical for fuel quality, cement raw meals, steel and alloys, pharmaceuticals, soils and environmental testing. The technique depends on your matrix: combustion-infrared for total carbon and sulfur, inert-gas fusion for oxygen and hydrogen in metals, and CHNS/O pyrolysis for organic compounds.",
      "Orbit represents NCS Testing Technology (Germany) for Carbon & Sulfur and ONH analysers, and NC Technologies (Italy) for CHNS/O systems, with Elemental Microanalysis (UK) standards and consumables to keep them calibrated. Gas generators, calibrations standards and service contracts are supplied alongside every instrument so your laboratory stays audit-ready.",
    ],
    faq: [
      { q: "Which analyser do I need for carbon and sulfur in steel or coal?", a: "For total carbon and sulfur in metals, ores, coal and cement, a high-frequency combustion-infrared analyser from the NCS range is the standard choice. Share your sample type and expected ranges and we will recommend the exact model and crucible chemistry." },
      { q: "Do you supply calibrations standards and consumables?", a: "Yes — Elemental Microanalysis certified standards, tin and steel crucibles, crucible tongs, combustion tubes, filters and reagents are stocked as consumables and can be ordered against your service contract." },
      { q: "Are gas generators required with these analysers?", a: "CHNS/O analysers need purified oxygen, helium or hydrogen and nitrogen. We supply the matching zero-air, nitrogen and hydrogen gas generators so the instrument can run without cylinder changes." },
    ],
  },
  {
    slug: "ash-fusion-analyzers",
    name: "Ash Fusion Analyzers",
    blurb:
      "Fusion temperature analysis of coal ash and biomass ash samples by the IF2000G series and EATC analysers.",
    guide: [
      "Ash fusion temperature (AFT) testing determines the temperature at which coal or biomass ash deforms, softens, spheres and flows — the key indicator of slagging and fouling risk in boilers, gasifiers and cement kilns. Results drive fuel-selection decisions and blend optimisation for power and cement plants.",
      "The Sylab IF2000G automates sample positioning, imaging and deformation-point evaluation under a controlled reducing or oxidising atmosphere, with the EATC analyser covering electrical-ash-fusion testing needs. Samples are prepared as standard cones or cylinders, heated at a defined rate, and the four AFT points are captured on camera — removing operator subjectivity from the reading. Orbit supplies the full workflow: preparation equipment, instruments, reference materials and operator training.",
    ],
    faq: [
      { q: "What are the four ash fusion points?", a: "Deformation (DT), softening (ST), hemispherical (HT) and fluid (FT). The IF2000G captures and evaluates all four automatically under reducing or oxidising atmosphere conditions per ASTM D1857 / ISO 5416." },
      { q: "Can the IF2000G test biomass ash as well as coal ash?", a: "Yes — biomass and refuse-derived fuel ashes are tested the same way, provided samples are prepared to the standard cone or cylinder geometry. We can advise on preparation for high-ash or high-alkali biomass fuels." },
      { q: "Do you provide sample preparation for AFT testing?", a: "We supply muffle furnaces for ash preparation, pellet presses and sieving equipment for producing uniform test pieces, plus certified reference ashes for validation." },
    ],
  },
  {
    slug: "coal-coke-testing",
    name: "Coal & Coke Testing Instruments",
    blurb:
      "Plastometers, dilatometers and furnaces for volatile matter, free swelling index and allied coal tests.",
    guide: [
      "Coal and coke testing covers the physical and thermal characterisation of solid fuels: plastometer testing for Gieseler fluidity, dilatometer testing for swelling behaviour, free swelling index, volatile matter and ash determination, and proximate analysis. Coke producers, power plants and steel plants use these results to blend coals, predict coking performance and validate incoming fuel.",
      "Sylab supplies the plastometer and dilatometer systems, the free swelling index furnace and the volatile matter furnaces, all built to ASTM and ISO methods. Pair them with analytical balances, sieves and sample preparation equipment for a complete coal laboratory — Orbit can design, install and commission the whole bench, including extraction and safety accessories.",
    ],
    faq: [
      { q: "Which test tells me if a coal is suitable for coke making?", a: "Gieseler plastometry and Arnu dilatometry together describe the plastic range, maximum fluidity and swelling of a coal — the two standard indicators used for coking-coal blend design." },
      { q: "How is the free swelling index determined?", a: "A 1 g sample is heated to 820 °C in a standard crucible and the resulting coke button is compared with a calibration chart. Our FSI furnace runs the complete test cycle to ASTM D720 / ISO 501." },
      { q: "Do you supply the complete coal testing bench?", a: "Yes — plastometer, dilatometer, FSI and VM furnaces, analytical balances, sample mills and sieves are supplied together with installation, training and service as one turnkey package." },
    ],
  },
  {
    slug: "reactor-systems",
    name: "Reactor Systems",
    blurb:
      "High pressure and high temperature laboratory reactors, pressure vessels and custom reactor systems.",
    guide: [
      "Laboratory reactors let you run chemical reactions, digests and material treatments under controlled pressure and temperature — from Parr's benchtop stirred reactors and stainless-steel pressure vessels to high-temperature, high-pressure systems for hydrothermal and catalytic work. Typical applications include polymerisation, hydrogenation, dissolution, digestion and catalyst screening in chemical, pharmaceutical and research laboratories.",
      "Selecting a reactor means matching vessel volume, pressure rating, temperature limit, agitation and wetted materials to your chemistry. Parr Instrument Company (USA) supplies the standard range and custom designs; Orbit handles sizing, supply, installation and after-sales support, plus spare parts such as rupture discs, gaskets, impellers and control modules.",
    ],
    faq: [
      { q: "What pressure and temperature ranges are available?", a: "Benchtop Parr reactors cover laboratory-scale work up to several hundred bar and 350 °C+ depending on configuration, with larger pressure vessels available on request. Share your reaction conditions and we will size the correct vessel and rating." },
      { q: "Can you supply custom reactor configurations?", a: "Yes — Parr builds custom vessels, lid patterns, impellers, thermowells and material-of-construction options. Send us your P&ID or specification and we will quote the configured system with lead times." },
      { q: "Which spares should we keep in stock?", a: "Rupture discs, PTFE gaskets, sealing rings and impellers are the common consumables. We recommend a spares kit with every reactor to avoid downtime, and can arrange a consignment stock for plants running several vessels." },
    ],
  },
  {
    slug: "sample-preparation",
    name: "Sample Preparation Equipment",
    blurb:
      "Sieving, milling, pulverising and pellet pressing equipment for XRF/ICP and laboratory sample preparation.",
    guide: [
      "Sample preparation determines the quality of every result downstream. Crushers, ring mills and pulverisers reduce laboratory samples to a uniform particle size; test sieves classify material by size; pellet presses produce flat, stable discs for XRF analysis; and pulverisers prepare homogeneous samples for coal, ore, cement and soil testing.",
      "SIEBTECHNIK TEMA (Germany) supplies the full range — jaw crushers, pulverisers, sieve shakers and pellet presses — with Sylab covering specialised preparation units. Choosing the right combination depends on your sample type and final fineness: we help match feed size, throughput and vessel material (agate, tungsten carbide, steel) to your application, and stock the matching sieves, vials and discs as consumables.",
    ],
    faq: [
      { q: "Which mill is right for XRF sample preparation?", a: "A ring mill / pulveriser that takes crushed material below 75 µm produces the flat, homogeneous pellet XRF requires. We will recommend the vessel material based on your sample hardness and contamination limits." },
      { q: "Do you supply replacement sieves and mill parts?", a: "Yes — test sieves (ISO 3310 / ASTM E11), sieve shakers, mill rings, sets, vessels and gaskets are stocked as consumables and dispatched nationwide." },
      { q: "How do I avoid cross-contamination between samples?", a: "Use dedicated vessels per sample type, clean between runs with brushed or rinsed cycles, and run a blank. We can advise on a cleaning protocol and supply separate vessels for different materials." },
    ],
  },
  {
    slug: "furnaces",
    name: "Laboratory & Industrial Furnaces",
    blurb:
      "Chamber, tube and high-temperature furnaces and ovens from Elite Thermal Systems, UK and Linn High Therm, Germany.",
    guide: [
      "Laboratory furnaces cover drying, ashing, sintering, heat treatment and controlled-atmosphere work across cement, steel, ceramics, research and quality-control laboratories. Chamber furnaces handle batch ashing and ignition tests; tube furnaces provide zoned, atmosphere-controlled profiles; and high-temperature furnaces reach 1200 °C, 1400 °C or beyond for advanced materials.",
      "Elite Thermal Systems (UK) supplies chamber and ovens ranges now manufactured in India by Sylab Scientific, while Linn High Therm (Germany) covers tube and high-temperature furnaces. Key selection criteria are maximum temperature, chamber volume, heating uniformity and atmosphere requirement — we help size the furnace to your standard (for example ash content to ISO 1171) and supply matching crucibles, controllers and extraction accessories.",
    ],
    faq: [
      { q: "What furnace do I need for ash content testing?", a: "A muffle furnace capable of 750–950 °C with uniform heating across the chamber suits ash determination to ISO 1171 / ASTM D3174. Chamber volume should match your daily sample count." },
      { q: "Are these furnaces available in India with local service?", a: "Yes — Elite ranges are now manufactured in India by Sylab Scientific, and all furnace lines are supplied, installed and serviced by Orbit across our 14 locations with spares held in stock." },
      { q: "Can we get a furnace with a programmable controller and atmosphere?", a: "Programmable multi-segment controllers are standard on most models, and tube furnaces can be supplied with flowing atmosphere connections. Send us your temperature profile and atmosphere and we will configure the unit." },
    ],
  },
  {
    slug: "reference-materials",
    name: "CRM's, SRM's & Laboratory Accessories",
    blurb:
      "Certified and standard reference materials, consumables and labware from world-renowned companies.",
    guide: [
      "Certified reference materials (CRMs) and standard reference materials (SRMs) are how a laboratory proves accuracy: they validate calibration, demonstrate traceability and satisfy audit requirements under ISO/IEC 17025. Elemental Microanalysis (UK) supplies standards and consumables for elemental analysers of every brand, alongside a broad laboratory accessories range.",
      "Beyond CRMs, this category covers the everyday consumables that keep an analytical laboratory running — combustion tubes, filters, crucibles, standards solutions, labware and accessories. Ordering them from the same supplier as your instruments keeps compatibility and documentation simple, and Orbit can set up a scheduled replenishment plan tied to your instrument service contracts.",
    ],
    faq: [
      { q: "Which CRM do I need to calibrate my analyser?", a: "It depends on the element and matrix — for example acetonitrile or acetanilide standards for CHNS, benzoic acid for calorimetry, and mineral standards for carbon/sulfur. Tell us your instrument and target elements and we will match the right certified materials." },
      { q: "How should reference materials be stored?", a: "Keep CRMs sealed, dry and labelled with their expiry date, away from direct light and humidity. We supply them in sealed packs with certificates of analysis for your quality records." },
      { q: "Can you supply consumables on a scheduled contract?", a: "Yes — we can set up scheduled replenishment for standards, crucibles, filters and labware aligned to your consumption and service contracts, so you never run short mid-batch." },
    ],
  },
];

export const products: Product[] = [
  // ---------------------------- Calorimeters ----------------------------
  {
    slug: "7200-precision-isoperibol-calorimeter",
    name: "7200 Precision Isoperibol Calorimeter",
    category: "calorimeters",
    brand: "Parr Instrument Company",
    origin: "USA",
    tagline: "High-precision true isoperibol automatic calorimeter",
    description:
      "The 7200 delivers true isoperibolic operation with fully automatic control of the calorimetric cycle — from ignition through equilibration to the final result. Built for laboratories that demand research-grade precision on every determination.",
    features: [
      "True isoperibolic measurement with precisely controlled jacket temperature",
      "Automatic ignition, equilibration and endpoint detection",
      "High-precision temperature measurement for demanding fuel testing",
      "Integrated software for result calculation and data export",
      "Stainless steel bomb options for a wide range of sample types",
    ],
    applications: ["Coal & coke", "Liquid fuels", "Biomass", "Refuse-derived fuels"],
  },
  {
    slug: "7400-automatic-isoperibol-calorimeter",
    name: "7400 Automatic Isoperibol Calorimeter",
    category: "calorimeters",
    brand: "Parr Instrument Company",
    origin: "USA",
    tagline: "Fully automatic calorimeter for high-throughput laboratories",
    description:
      "The 7400 combines true isoperibolic measurement with a high degree of automation, letting a single operator run a full day of determinations with minimal hands-on time — ideal for routine quality-control laboratories.",
    features: [
      "Fully automatic calorimetric cycle",
      "True isoperibolic measurement principle",
      "Designed for high sample throughput",
      "Automatic handling of ignition and results",
      "Rugged construction for industrial laboratory environments",
    ],
    applications: ["Power plants", "Cement plants", "Steel plants", "Fuel quality control"],
  },
  {
    slug: "detonation-calorimeter",
    name: "Detonation Calorimeter",
    category: "calorimeters",
    brand: "Parr Instrument Company",
    origin: "USA",
    tagline: "For the measurement of explosive energy release",
    description:
      "Purpose-built for determining the energy of detonation of explosive materials, this calorimeter adapts the Parr bomb principle to the special safety and handling requirements of energetic materials.",
    features: [
      "Engineered for energetic and explosive sample materials",
      "Heavy-duty bomb construction for high-pressure combustion",
      "Controlled, reproducible ignition",
      "Supplied with application-specific fittings",
    ],
    applications: ["Explosives", "Propellants", "Pyrotechnics", "Defence research"],
  },
  {
    slug: "power-compensation-reaction-calorimeter",
    name: "Power Compensation Reaction Calorimeter",
    category: "calorimeters",
    brand: "Parr Instrument Company",
    origin: "USA",
    tagline: "Reaction calorimetry with precise power compensation control",
    description:
      "A power-compensation reaction calorimeter for studying the heat of chemical reactions under controlled conditions — supporting process-safety studies and reaction optimisation in chemical development.",
    features: [
      "Power compensation heating and control",
      "Real-time heat-flow measurement during reactions",
      "Suitable for batch reaction studies",
      "Compatible with stirred reactor vessels",
    ],
    applications: ["Chemical process safety", "Pharma process development", "Polymerisation studies"],
  },

  // --------------------- Thermogravimetric Analysers ---------------------
  {
    slug: "tga-3000",
    name: "TGA 3000 Thermogravimetric Analyser",
    category: "thermogravimetric-analysers",
    brand: "Sylab",
    origin: "France / India",
    tagline: "Reliable and fast proximate analysis by TGA",
    description:
      "The TGA 3000 performs rapid proximate analysis — moisture, volatile matter, fixed carbon and ash — by thermogravimetry in a single, controlled heating program, replacing slow conventional furnace methods.",
    features: [
      "Complete proximate analysis in a single run",
      "Fast, repeatable furnace programming",
      "Applicable to coal, coke, biomass and other solid fuels",
      "Result calculation and reporting software",
      "Now manufactured in India by Sylab Scientific",
    ],
    applications: ["Coal & coke", "Biomass", "Refuse-derived fuels", "Cement"],
  },
  {
    slug: "tga-1500",
    name: "TGA 1500 Thermogravimetric Analyser",
    category: "thermogravimetric-analysers",
    brand: "Sylab",
    origin: "France / India",
    tagline: "Compact thermogravimetric analyser for routine proximate analysis",
    description:
      "The TGA 1500 brings thermogravimetric proximate analysis to laboratories that need a compact, economical instrument without compromising on repeatability.",
    features: [
      "Compact benchtop footprint",
      "Single-sample proximate analysis",
      "Straightforward operation for routine labs",
      "Low maintenance furnace and balance design",
    ],
    applications: ["Fuel testing laboratories", "Quality control", "Educational institutes"],
  },

  // --------------------------- Elemental Analyzers --------------------------
  {
    slug: "carbon-sulfur-analyzers",
    name: "Carbon & Sulfur Analyzers",
    category: "elemental-analyzers",
    brand: "NCS Testing Technology",
    origin: "Germany",
    tagline: "High-frequency infrared carbon & sulfur determination",
    description:
      "Carbon and sulfur analysers for inorganic materials, using high-frequency combustion and infrared detection to determine total carbon and sulfur in metals, ores, ceramics and geological samples.",
    features: [
      "High-frequency induction furnace combustion",
      "Infrared detection of CO₂ and SO₂",
      "Suitable for metals, ores, refractories and geological samples",
      "Rapid analysis cycle with automatic baseline correction",
    ],
    applications: ["Steel & iron", "Ores & minerals", "Cement", "Refractories"],
  },
  {
    slug: "fusion-master-onh-analyzer",
    name: "Fusion Master ONH Analyzer",
    category: "elemental-analyzers",
    brand: "NCS Testing Technology",
    origin: "Germany",
    tagline: "Oxygen, nitrogen and hydrogen analysis by inert gas fusion",
    description:
      "The Fusion Master determines oxygen, nitrogen and hydrogen in inorganic materials by pulse-heating fusion in an inert gas stream, with thermal conductivity and infrared detection.",
    features: [
      "Pulse-heating inert gas fusion technique",
      "Simultaneous O, N and H determination",
      "Analysis of metals, alloys, oxides and ceramics",
      "Automatic blank compensation and calibration routines",
    ],
    applications: ["Metals & alloys", "Rare earths", "Ceramics", "Powder metallurgy"],
  },
  {
    slug: "chns-o-analyzers",
    name: "CHNS/O Analyzers",
    category: "elemental-analyzers",
    brand: "NC Technologies",
    origin: "Italy",
    tagline: "High-performance elemental analysers for organic compounds",
    description:
      "CHNS/O analysers for organic elemental analysis, available in single-furnace and dual-furnace configurations, delivering fast and precise carbon, hydrogen, nitrogen, sulfur and oxygen determination.",
    features: [
      "Single and dual furnace configurations",
      "CHNS and separate oxygen determination",
      "High-temperature combustion for difficult matrices",
      "Suitable for soils, fertilisers, food, pharma and polymers",
    ],
    applications: ["Soil & fertiliser testing", "Food & feed", "Pharmaceuticals", "Polymers"],
  },

  // --------------------------- Ash Fusion Analyzers --------------------------
  {
    slug: "if2000g-hdc",
    name: "IF2000G-HDC Ash Fusion Analyser",
    category: "ash-fusion-analyzers",
    brand: "Sylab",
    origin: "France / India",
    tagline: "Automatic ash fusion temperature analysis",
    description:
      "The IF2000G-HDC determines the deformation, hemisphere and flow temperatures of coal and biomass ash automatically, recording the full deformation curve of the ash cone during heating.",
    features: [
      "Automatic determination of DT, HT and FT temperatures",
      "Continuous imaging of the ash cone deformation",
      "Reproducible heating program per standard methods",
      "Digital result storage and reporting",
    ],
    applications: ["Coal ash", "Biomass ash", "Slagging propensity studies"],
  },
  {
    slug: "if2000g-hdbm",
    name: "IF2000G-HDBM Ash Fusion Analyser",
    category: "ash-fusion-analyzers",
    brand: "Sylab",
    origin: "France / India",
    tagline: "Ash fusion analyser with reduced-temperature measurement",
    description:
      "The HDBM variant of the IF2000G series performs ash fusion temperature analysis with a modified atmosphere arrangement, suited to laboratories characterising a wide variety of ash and slag samples.",
    features: [
      "Automatic deformation, hemisphere and flow readings",
      "Controlled furnace atmosphere",
      "Digital imaging and analysis software",
      "Robust furnace design for continuous operation",
    ],
    applications: ["Coal & biomass", "Cement raw meals", "Waste-derived fuels"],
  },
  {
    slug: "eatc16",
    name: "EATC16 Ash Fusion Analyser",
    category: "ash-fusion-analyzers",
    brand: "Sylab",
    origin: "France / India",
    tagline: "Compact ash fusion temperature characterisation",
    description:
      "The EATC16 provides ash fusion temperature measurement in a compact format for laboratories that need reliable, standard-compliant ash behaviour characterisation.",
    features: [
      "Standard-compliant ash fusion measurement",
      "Compact benchtop design",
      "Automatic temperature logging",
      "Easy sample loading and cone preparation",
    ],
    applications: ["Fuel laboratories", "Power generation", "Research institutes"],
  },

  // -------------------------- Coal & Coke Testing ---------------------------
  {
    slug: "plastometer-pf-12",
    name: "Plastometer PF-12",
    category: "coal-coke-testing",
    brand: "Sylab",
    origin: "France / India",
    tagline: "Fully automatic plastometer for coal fluidity",
    description:
      "A fully automatic plastometer measuring the fluidity of coal as per ASTM D2639 and ISO 10329, recording the maximum fluidity and plastic layer behaviour during programmed heating.",
    features: [
      "Compliant with ASTM D2639 and ISO 10329",
      "Fully automatic test cycle",
      "Digital recording of fluidity curves",
      "Repeatable results with minimal operator intervention",
    ],
    applications: ["Coking coal evaluation", "Coke oven charging", "Coal blending studies"],
  },
  {
    slug: "dilatometer-df-4",
    name: "Dilatometer DF-4",
    category: "coal-coke-testing",
    brand: "Sylab",
    origin: "France / India",
    tagline: "Automatic dilatometer for coal swelling behaviour",
    description:
      "The DF-4 measures the swelling and contraction of coal briquettes under programmed heating, characterising dilatation behaviour for coking coal assessment.",
    features: [
      "Automatic dilatation measurement",
      "Programmed heating per standard methods",
      "Digital recording of expansion and contraction",
      "Suited to routine coking coal laboratories",
    ],
    applications: ["Coking coal", "Coal blending", "Metallurgical laboratories"],
  },
  {
    slug: "free-swelling-index-furnace",
    name: "Free Swelling Index Furnace (FSI)",
    category: "coal-coke-testing",
    brand: "Sylab",
    origin: "France / India",
    tagline: "Dedicated furnace for the Free Swelling Index test",
    description:
      "A dedicated laboratory furnace for determining the Free Swelling Index of coal, maintaining the standard temperature profile required for repeatable crucible tests.",
    features: [
      "Standard-compliant temperature profile",
      "Positioned crucible holders for consistent heating",
      "Robust insulation for stable high-temperature operation",
      "Simple, focused operation for routine testing",
    ],
    applications: ["Coal laboratories", "Power & fuel testing", "Coke production"],
  },

  // ------------------------------ Reactor Systems -----------------------------
  {
    slug: "series-5100-glass-reactors",
    name: "Series 5100 Glass Reactors (160–1500 ml)",
    category: "reactor-systems",
    brand: "Parr Instrument Company",
    origin: "USA",
    tagline: "Borosilicate glass reactors for visible, low-pressure reactions",
    description:
      "Parr Series 5100 glass reactors give researchers a clear view of the reaction in borosilicate vessels from 160 to 1500 ml, ideal for fermentation, extraction and other low-pressure chemistry.",
    features: [
      "Borosilicate glass vessels, 160–1500 ml",
      "Stirred and non-stirred configurations",
      "Quick-open closures for fast turnaround",
      "Benchtop stands with overhead stirring",
    ],
    applications: ["Fermentation", "Extraction", "Dissolution studies", "Process scouting"],
  },
  {
    slug: "series-3910-shaker-hydrogenation-apparatus",
    name: "Series 3910 Shaker Hydrogenation Apparatus",
    category: "reactor-systems",
    brand: "Parr Instrument Company",
    origin: "USA",
    tagline: "Hydrogenation reactor system with reciprocating shaker",
    description:
      "The Series 3910 combines small stirred pressure vessels with a vigorous shaking mechanism to keep hydrogen in contact with the catalyst during hydrogenation reactions at moderate pressures.",
    features: [
      "Reciprocal shaking for gas-liquid contact",
      "Multiple small-volume vessels per run",
      "Heating capability for elevated-temperature reactions",
      "Parr safety fittings and rupture disc protection",
    ],
    applications: ["Catalyst screening", "Hydrogenation", "Food & oil research", "Pharma R&D"],
  },
  {
    slug: "continuous-flow-tubular-reactors-5400",
    name: "5400 Continuous Flow Tubular Reactors",
    category: "reactor-systems",
    brand: "Parr Instrument Company",
    origin: "USA",
    tagline: "Continuous-flow high-pressure tubular reactor systems",
    description:
      "The 5400 series continuous flow tubular reactors allow uninterrupted high-pressure, high-temperature reactions for process development — from biofuel research to gas-to-liquid studies.",
    features: [
      "Continuous feed and product withdrawal",
      "High-pressure, high-temperature operation",
      "Modular preheater and reactor tube options",
      "A touch-screen variant (5420) available for direct control",
    ],
    applications: ["Biofuel & alternative fuel research", "GTL systems", "Corrosion studies", "Catalysis"],
  },
  {
    slug: "rotating-cylinder-electrode-system",
    name: "HP/HT Rotating Cylinder Electrode (RCE) System",
    category: "reactor-systems",
    brand: "Parr Instrument Company",
    origin: "USA",
    tagline: "Corrosion studies under high pressure and high temperature",
    description:
      "A high-pressure, high-temperature rotating cylinder electrode system for studying corrosion and erosion-corrosion behaviour of metals under controlled hydrodynamic conditions.",
    features: [
      "High-pressure, high-temperature autoclave",
      "Controlled cylinder rotation for defined flow conditions",
      "Electrochemical measurement capability",
      "Also supplied as rotating cage corrosion apparatus",
    ],
    applications: ["Oil & gas corrosion", "Power plant materials", "Chemical plant metallurgy"],
  },

  // ------------------------------ Sample Preparation -----------------------------
  {
    slug: "vibratory-sieve-shaker",
    name: "Vibratory Sieve Shaker",
    category: "sample-preparation",
    brand: "SIEBTECHNIK TEMA",
    origin: "Germany",
    tagline: "Efficient particle size analysis by vibratory sieving",
    description:
      "A vibratory sieve shaker for accurate particle size determination of dry and wet samples, delivering reproducible sieving action suitable for routine and research laboratories.",
    features: [
      "Adjustable amplitude and sieving time",
      "Stacks of test sieves up to several levels",
      "Suitable for powders, granulates and ores",
      "Quiet, low-maintenance operation",
    ],
    applications: ["Minerals & ores", "Cement", "Agriculture", "Powder metallurgy"],
  },
  {
    slug: "jaw-crusher",
    name: "Jaw Crusher",
    category: "sample-preparation",
    brand: "SIEBTECHNIK TEMA",
    origin: "Germany",
    tagline: "Primary crushing of hard materials for laboratory sample prep",
    description:
      "A robust laboratory jaw crusher for the primary size reduction of hard and brittle materials — ores, clinker, slag and similar — producing a uniform feed for subsequent milling.",
    features: [
      "Crushing of hard, brittle materials",
      "Uniform output particle size",
      "Wear-resistant crushing surfaces",
      "Easy cleaning between samples to avoid cross-contamination",
    ],
    applications: ["Mining & geology", "Cement", "Metallurgy", "Environmental testing"],
  },
  {
    slug: "planetary-ball-mill",
    name: "Planetary Ball Mill",
    category: "sample-preparation",
    brand: "SIEBTECHNIK TEMA",
    origin: "Germany",
    tagline: "Fine grinding and alloying down to micrometre range",
    description:
      "A planetary ball mill for fine grinding, mixing and alloying of sample materials, achieving particle sizes in the sub-micrometre range for XRF, ICP and downstream analysis.",
    features: [
      "Planetary motion for high energy input",
      "Grinding down to fine and ultrafine ranges",
      "Multiple grinding jar materials for contamination-free work",
      "Suitable for alloying and mechanical activation",
    ],
    applications: ["XRF/ICP sample prep", "Alloying", "Ceramics", "Research institutes"],
  },
  {
    slug: "hydraulic-pellet-press",
    name: "Hydraulic Pellet Press",
    category: "sample-preparation",
    brand: "Sylab",
    origin: "France / India",
    tagline: "Consistent pellets for XRF and ICP sample presentation",
    description:
      "A hydraulic press producing uniform, defect-free pellets of powdered samples for XRF analysis, with manual and semiautomatic variants including the Semiautomatic Pellet Ultrapress.",
    features: [
      "Reproducible pressing force",
      "Manual, semiautomatic and Ultrapress configurations",
      "Pellet sizes for standard XRF sample holders",
      "Simple die and mould changes",
    ],
    applications: ["XRF sample preparation", "Cement", "Mining", "Geological survey"],
  },

  // --------------------------------- Furnaces ---------------------------------
  {
    slug: "chamber-furnace",
    name: "Laboratory Chamber Furnace",
    category: "furnaces",
    brand: "Elite Thermal Systems",
    origin: "UK",
    tagline: "General-purpose laboratory chamber furnace",
    description:
      "A general-purpose chamber furnace for routine heat treatment, ashing and determinations in laboratories — now also manufactured in India by Sylab Scientific following Elite Thermal's acquisition.",
    features: [
      "Uniform chamber temperature",
      "Programmable heating options",
      "Bottom-loading and light industrial variants available",
      "Durable refractory lining for long service life",
    ],
    applications: ["Ashing", "Heat treatment", "Ceramics", "Quality control"],
  },
  {
    slug: "bottom-loading-chamber-furnace",
    name: "Bottom Loading Chamber Furnace",
    category: "furnaces",
    brand: "Elite Thermal Systems",
    origin: "UK",
    tagline: "Vertical-loading furnace for safe handling of hot loads",
    description:
      "A bottom-loading design places the hearth below the heating chamber, allowing heavy or delicate samples to be loaded and unloaded vertically without disturbing the hot zone.",
    features: [
      "Vertical bottom-loading hearth",
      "Reduced heat exposure for the operator",
      "High-temperature chamber options",
      "Suitable for delicate or heavy workloads",
    ],
    applications: ["Heat treatment", "Foundry research", "Technical ceramics"],
  },
  {
    slug: "split-tube-furnace",
    name: "Split Tube Furnace",
    category: "furnaces",
    brand: "Elite Thermal Systems",
    origin: "UK",
    tagline: "Split-tube design for easy sample access along the hot zone",
    description:
      "A split tube furnace that opens along its length for quick tube and sample access, supporting a wide variety of atmosphere and vacuum experiments over long hot zones.",
    features: [
      "Split-body design for fast access",
      "Long uniform hot zone",
      "Single and multi-zone configurations",
      "Vacuum and controlled-atmosphere variants available",
    ],
    applications: ["Tube experiments", "Atmosphere-controlled heating", "Materials research"],
  },
  {
    slug: "linn-ht-1800-high-temperature-tube-furnace",
    name: "High Temperature Tube Furnace HT 1800",
    category: "furnaces",
    brand: "Linn High Therm",
    origin: "Germany",
    tagline: "Tube furnace for extreme temperatures up to 1800 °C",
    description:
      "The HT 1800 high-temperature tube furnace from Linn High Therm reaches temperatures up to 1800 °C, with resistance, induction and microwave heating platforms available across the Linn range.",
    features: [
      "Maximum temperature up to 1800 °C",
      "Graphite and ceramic tube options",
      "Vacuum and protective atmosphere capable",
      "Broader Linn range: LM, VMK, HT-Vac, HT-Graphit series and more",
    ],
    applications: ["Advanced ceramics", "Sintering", "Crystal growth", "Materials research"],
  },

  // ----------------------------- Reference Materials ----------------------------
  {
    slug: "certified-reference-materials",
    name: "Certified & Standard Reference Materials",
    category: "reference-materials",
    brand: "Elemental Microanalysis",
    origin: "UK",
    tagline: "Standards and consumables for elemental analysers of every brand",
    description:
      "A comprehensive range of certified and standard reference materials plus consumables for elemental analysers — supporting accurate calibration and validation regardless of instrument brand.",
    features: [
      "Certified reference materials for CHNS/O and C&S analysis",
      "Standards for coal, coke, soils, foods and more",
      "Consumables: crucibles, boats, filters and reagents",
      "Compatible with all major analyser brands",
    ],
    applications: ["Calibration & QA/QC", "Accredited laboratories", "Routine analysis"],
  },
  {
    slug: "laboratory-consumables-and-labware",
    name: "Laboratory Consumables & Labware",
    category: "reference-materials",
    brand: "Orbit Technologies",
    origin: "India",
    tagline: "Labware, pumps, samplers and containers from world-renowned companies",
    description:
      "An extensive range of laboratory accessories including screw joints and components, tubing, films and tiles, temperature measurement accessories, vessels and distillation equipment, pumps, samplers and containers.",
    features: [
      "Screw joints and components up to 5 bar and EX-protection variants",
      "Tubing, films and PTFE laboratory components",
      "Vessels and distillation equipment",
      "Pumps, samplers and sample containers",
    ],
    applications: ["Everyday laboratory operations", "Sampling", "Distillation", "General labware"],
  },
];

export function productsByCategory(slug: string) {
  return products.filter((p) => p.category === slug);
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug) ?? null;
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug) ?? null;
}

/** Stable catalogue code derived from the product (category prefix + slug hash). */
export function productCode(p: Product) {
  const prefix = p.category
    .split("-")
    .map((w) => w[0] ?? "")
    .join("")
    .slice(0, 3)
    .toUpperCase();
  let h = 7;
  for (let i = 0; i < p.slug.length; i++) {
    h = (h * 31 + p.slug.charCodeAt(i)) >>> 0;
  }
  return `OT-${prefix}-${1000 + (h % 9000)}`;
}
