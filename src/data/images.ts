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
  uhnw: {
    src: 'https://images.unsplash.com/photo-1670589953882-b94c9cb380f5',
    alt: "A modern private residence with a pool",
    credit: "Salman Saqib", // https://unsplash.com/photos/a-building-with-a-pool-z6UAWpQAhXs
  },
  sensitiveInvestigations: {
    src: 'https://images.unsplash.com/photo-1583521214690-73421a1829a9',
    alt: "Stacks of paper files and folders",
    credit: "Wesley Tingey", // https://unsplash.com/photos/stacks-of-paper-documents-and-file-folders-snNHKZ-mGfE
  },
  media: {
    src: 'https://images.unsplash.com/photo-1651465531201-7e430660fd82',
    alt: "A broadcast studio with cameras and lighting rigs",
    credit: "Brad Weaver", // https://unsplash.com/photos/a-room-with-a-camera-and-equipment-qhamVJdrkRs
  },
  activist: {
    src: 'https://images.unsplash.com/photo-1783196721433-b164299aaddf',
    alt: "The glass-fronted entrance of a corporate headquarters",
    credit: "David Klein", // https://unsplash.com/photos/a-modern-building-with-glass-facade-and-grand-staircases-J6NuCvwbARc
  },
  retail: {
    src: 'https://images.unsplash.com/photo-1783700085825-1df197a49f40',
    alt: "A quiet, modern retail interior",
    credit: "ULISES RAMIREZ", // https://unsplash.com/photos/modern-empty-interior-with-wooden-furniture-and-concrete-walls-A1bMeaftZi4
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
  planning: {
    src: 'https://images.unsplash.com/photo-1603901622056-0a5bee231395',
    alt: "Architectural plans with drafting tools on a desk",
    credit: "Lucas Kepner", // https://unsplash.com/photos/architectural-blueprints-with-drafting-tools-Yn8D5B8C-eY
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
  worldMap: {
    src: 'https://images.unsplash.com/photo-1524661135-423995f22d0b',
    alt: "A world map",
    credit: "Andrew Stutesman", // https://unsplash.com/photos/blue-green-and-yellow-world-map-l68Z6eF2peA
  },
  warehouse: {
    src: 'https://images.unsplash.com/photo-1644079446600-219068676743',
    alt: "A long warehouse aisle lined with racking",
    credit: "Lance Chang", // https://unsplash.com/photos/a-large-warehouse-filled-with-lots-of-shelves-h3pVxOIpnzk
  },
  port: {
    src: 'https://images.unsplash.com/photo-1678182451047-196f22a4143e',
    alt: "Shipping containers stacked at a container port",
    credit: "Ali Mkumbwa", // https://unsplash.com/photos/a-large-amount-of-containers-are-stacked-on-top-of-each-other-Annl9CjEaEs
  },
  mapPins: {
    src: 'https://images.unsplash.com/photo-1619468129361-605ebea04b44',
    alt: "A hand placing a pin on a city map",
    credit: "GeoJango Maps", // https://unsplash.com/photos/person-placing-red-pin-on-city-map-Z8UgB80_46w
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
  executiveCar: {
    src: 'https://images.unsplash.com/photo-1764090317825-9b76e437c8d8',
    alt: "A black executive saloon parked at the kerb",
    credit: "Ilya Godze", // https://unsplash.com/photos/a-black-luxury-sedan-parked-on-the-roadside-vp9A1TJ9KoY
  },
  londonStreet: {
    src: 'https://images.unsplash.com/photo-1658658000582-1ee91a498fa1',
    alt: "A curved London high street in daylight",
    credit: "Thomas Konings", // https://unsplash.com/photos/a-red-bus-on-the-street-7uV0rCUZS3I
  },
  londonAerial: {
    src: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad',
    alt: "An aerial view of London and the Thames",
    credit: "Benjamin Davies", // https://unsplash.com/photos/aerial-photography-of-london-skyline-during-daytime-Oja2ty_9ZLM
  },
  meetingRoom: {
    src: 'https://images.unsplash.com/photo-1464029902023-f42eba355bde',
    alt: "A quiet meeting room overlooking the city",
    credit: "Alexander Pemberton", // https://unsplash.com/photos/orange-fabric-padded-armchair-with-black-metal-base-near-round-clear-glass-top-table-and-gray-sofa-skLqGtLrYKc
  },
  londonDusk: {
    src: 'https://images.unsplash.com/photo-1654457949106-d4f818c49536',
    alt: "The London skyline at dusk",
    credit: "Andrea De Santis", // https://unsplash.com/photos/a-view-of-a-city-at-sunset-with-boats-in-the-water-onNuFFz3L_E
  },
} as const;
