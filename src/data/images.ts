// Placeholder photography from Unsplash (free to use under the Unsplash licence).
// Every image is matched to the content it sits beside. Swap `src` when real
// photography is supplied — layout and treatment stay the same.

export type ImageKey = keyof typeof images;

export const images = {
  londonCity: {
    src: 'https://images.unsplash.com/photo-1627899016844-34b0dea76d9c',
    alt: "The City of London skyline on a clear day",
    credit: "Timothy Batchelder", // https://unsplash.com/photos/city-buildings-near-body-of-water-during-daytime-5wpczBCo0rQ
  },
  defence: {
    src: 'https://images.unsplash.com/photo-1642137006177-8257e34d8af8',
    alt: "A white radar dome on a steel tower against a blue sky",
    credit: "Robin Wilde", // https://unsplash.com/photos/a-large-white-ball-sitting-on-top-of-a-metal-structure-k_c59659vAw
  },
  hospitality: {
    src: 'https://images.unsplash.com/photo-1742844552193-2fd3425cd26d',
    alt: "A sunlit hotel lobby with a reception area",
    credit: "Zoshua Colah", // https://unsplash.com/photos/a-grand-hotel-lobby-filled-with-sunlight-SXePqzrArfY
  },
  media: {
    src: 'https://images.unsplash.com/photo-1782889187454-a568fe1f20e2',
    alt: "A film crew silhouetted around a camera against a pale sky",
    credit: "Unsplash", // https://unsplash.com/photos/film-crew-with-large-camera-under-a-cloudy-sky
  },
  construction: {
    src: 'https://images.unsplash.com/photo-1655975719898-8f3432eed322',
    alt: "A tower crane lifting materials on a construction site",
    credit: "Adesh Bankar", // https://unsplash.com/photos/a-crane-lifting-a-building-YNm1fhRIMa8
  },
  commercialProperty: {
    src: 'https://images.unsplash.com/photo-1621831337128-35676ca30868',
    alt: "The curved glass facade of a commercial office building",
    credit: "Kenrick Baksh", // https://unsplash.com/photos/white-and-blue-glass-walled-building-Wm8opOd-MDE
  },
  consultingTable: {
    src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952',
    alt: "Consultants reviewing documents around a meeting table",
    credit: "Dylan Gillis", // https://unsplash.com/photos/people-sitting-on-chair-in-front-of-table-while-holding-pens-during-daytime-KdeqA3aTnBY
  },
  reception: {
    src: 'https://images.unsplash.com/photo-1543325042-c67825847491',
    alt: "A marble reception desk in a corporate lobby",
    credit: "Random Institute", // https://unsplash.com/photos/white-and-brown-table-FDcydLvV7Io
  },
  accessControl: {
    src: 'https://images.unsplash.com/photo-1636770192011-3df8d0c1436d',
    alt: "A card reader mounted beside a secure steel door",
    credit: "Caleb Wright", // https://unsplash.com/photos/a-close-up-of-a-metal-door-with-a-red-light-on-it-NEbllmrTUMQ
  },
  analyst: {
    src: 'https://images.unsplash.com/photo-1615914143778-1a1a6e50c5dd',
    alt: "An analyst writing notes beside a laptop",
    credit: "Vadim Bozhko", // https://unsplash.com/photos/person-writing-in-notebook-at-desk-lbO1iCnbTW0
  },
  filing: {
    src: 'https://images.unsplash.com/photo-1569235186275-626cb53b83ce',
    alt: "An open drawer of a filing cabinet",
    credit: "Maksym Kaharlytskyi", // https://unsplash.com/photos/file-cabinet-Q9y3LRuuxmg
  },
  lobby: {
    src: 'https://images.unsplash.com/photo-1768270181430-3e3672a32283',
    alt: "A modern office lobby with marble floors",
    credit: "Andy Wang", // https://unsplash.com/photos/modern-lobby-with-marble-floors-and-decorative-ceiling-08MQb0SSUDQ
  },
  gallery: {
    src: 'https://images.unsplash.com/photo-1735605917461-4c1b77a6616f',
    alt: "A gallery hung with valuable paintings",
    credit: "Neon Wang", // https://unsplash.com/photos/a-room-with-a-lot-of-paintings-on-the-walls-PmF9EcHvFB0
  },
  londonAerial: {
    src: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad',
    alt: "An aerial view of London and the Thames",
    credit: "Benjamin Davies", // https://unsplash.com/photos/aerial-photography-of-london-skyline-during-daytime-Oja2ty_9ZLM
  },
  londonDusk: {
    src: 'https://images.unsplash.com/photo-1654457949106-d4f818c49536',
    alt: "The London skyline at dusk",
    credit: "Andrea De Santis", // https://unsplash.com/photos/a-view-of-a-city-at-sunset-with-boats-in-the-water-onNuFFz3L_E
  },
  boardroom: {
    src: 'https://images.unsplash.com/photo-1571624436279-b272aff752b5',
    alt: "A bright meeting room with a wooden boardroom table and chairs",
    credit: "Unsplash", // https://unsplash.com/photos/brown-wooden-9-piece-office-table-and-chairs-1RT4txDDAbM
  },
  officeCorridor: {
    src: 'https://images.unsplash.com/photo-1554232456-8727aae0cfa4',
    alt: "A glass-walled corridor between offices in a corporate building",
    credit: "Unsplash", // https://unsplash.com/photos/glass-paneled-long-wooden-floored-hallway
  },
  eventTrusses: {
    src: 'https://images.unsplash.com/photo-1781459359076-a1e563cbc7b2',
    alt: "Event staging trusses against an open sky",
    credit: "Unsplash", // https://unsplash.com/photos/two-white-metal-trusses-with-chains-against-a-sky
  },
  westEnd: {
    src: 'https://images.unsplash.com/photo-1610813328519-0ade655c40c1',
    alt: "A curving West End street in central London on a clear day",
    credit: "Unsplash", // https://unsplash.com/photos/red-and-black-bus-on-road-near-building-during-daytime
  },
  substation: {
    src: 'https://images.unsplash.com/photo-1790994538837-6b20c2473b6d',
    alt: "A secured gate in front of an electrical substation",
    credit: "Unsplash", // https://unsplash.com/photos/a-chain-link-gate-with-geometric-metal-bars-in-front-of-an-electrical-substation
  },
  casePapers: {
    src: 'https://images.unsplash.com/photo-1631651693480-97f1132e333d',
    alt: "Financial papers and a pen spread across a desk",
    credit: "Unsplash", // https://unsplash.com/photos/a-wooden-table-topped-with-papers-and-a-pen
  },
  cityAerial: {
    src: 'https://images.unsplash.com/photo-1520425785126-a1fe4bfaf006',
    alt: "An aerial view of the City of London's streets and rooftops",
    credit: "Unsplash", // https://unsplash.com/photos/birds-eye-view-of-high-rise-buildings
  },
} as const;
