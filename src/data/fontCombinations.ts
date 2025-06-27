export type FontCombination = {
  id: number;
  name: string;
  heading: {
    family: string;
    weight: string;
    googleFont: string;
  };
  body: {
    family: string;
    weight: string;
    googleFont: string;
  };
};

export const fontCombinations: FontCombination[] = [
  {
    id: 1,
    name: "Modern Sans",
    heading: { family: "Inter", weight: "600", googleFont: "Inter:wght@600;700" },
    body: { family: "Inter", weight: "400", googleFont: "Inter:wght@400;500" }
  },
  {
    id: 2,
    name: "Editorial",
    heading: { family: "Playfair Display", weight: "700", googleFont: "Playfair+Display:wght@700" },
    body: { family: "Source Sans Pro", weight: "400", googleFont: "Source+Sans+Pro:wght@400;600" }
  },
  {
    id: 3,
    name: "Tech Forward",
    heading: { family: "Space Grotesk", weight: "600", googleFont: "Space+Grotesk:wght@600;700" },
    body: { family: "IBM Plex Sans", weight: "400", googleFont: "IBM+Plex+Sans:wght@400;500" }
  },
  {
    id: 4,
    name: "Elegant Classic",
    heading: { family: "Cormorant Garamond", weight: "600", googleFont: "Cormorant+Garamond:wght@600;700" },
    body: { family: "Lato", weight: "400", googleFont: "Lato:wght@400;600" }
  },
  {
    id: 5,
    name: "Creative Bold",
    heading: { family: "Montserrat", weight: "700", googleFont: "Montserrat:wght@700;800" },
    body: { family: "Open Sans", weight: "400", googleFont: "Open+Sans:wght@400;600" }
  },
  {
    id: 6,
    name: "Startup Modern",
    heading: { family: "Poppins", weight: "600", googleFont: "Poppins:wght@600;700" },
    body: { family: "Nunito Sans", weight: "400", googleFont: "Nunito+Sans:wght@400;600" }
  },
  {
    id: 7,
    name: "Luxury Serif",
    heading: { family: "Crimson Text", weight: "600", googleFont: "Crimson+Text:wght@600;700" },
    body: { family: "Libre Franklin", weight: "400", googleFont: "Libre+Franklin:wght@400;500" }
  },
  {
    id: 8,
    name: "Minimal Clean",
    heading: { family: "Work Sans", weight: "600", googleFont: "Work+Sans:wght@600;700" },
    body: { family: "Work Sans", weight: "400", googleFont: "Work+Sans:wght@400;500" }
  },
  {
    id: 9,
    name: "Agency Pro",
    heading: { family: "DM Sans", weight: "700", googleFont: "DM+Sans:wght@700;900" },
    body: { family: "Inter", weight: "400", googleFont: "Inter:wght@400;500" }
  },
  {
    id: 10,
    name: "Creative Studio",
    heading: { family: "Fraunces", weight: "600", googleFont: "Fraunces:wght@600;700" },
    body: { family: "Public Sans", weight: "400", googleFont: "Public+Sans:wght@400;500" }
  }
]; 