export type ColorScheme = {
  id: number;
  name: string;
  colors: {
    primary: string;
    primaryHover: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    muted: string;
    mutedForeground: string;
    border: string;
    card: string;
    cardForeground: string;
  };
};

export const colorSchemes: ColorScheme[] = [
  {
    id: 1,
    name: "Soft Cream",
    colors: {
      primary: "#8B7355",
      primaryHover: "#6B5A44",
      secondary: "#F5F1EB",
      accent: "#E8A87C",
      background: "#FEFCF8",
      foreground: "#2C2419",
      muted: "#F0EBE3",
      mutedForeground: "#6B5A44",
      border: "#E8E1D8",
      card: "#FFFFFF",
      cardForeground: "#2C2419",
    }
  },
  {
    id: 2,
    name: "Sage Green",
    colors: {
      primary: "#7A8471",
      primaryHover: "#5F6B56",
      secondary: "#F0F3ED",
      accent: "#A8C090",
      background: "#FAFBF8",
      foreground: "#1F2419",
      muted: "#E8EDE2",
      mutedForeground: "#5F6B56",
      border: "#D9E2CE",
      card: "#FFFFFF",
      cardForeground: "#1F2419",
    }
  },
  {
    id: 3,
    name: "Warm Blush",
    colors: {
      primary: "#B8827D",
      primaryHover: "#9A6B66",
      secondary: "#FAF5F4",
      accent: "#E6A5A0",
      background: "#FEFAF9",
      foreground: "#2B1F1E",
      muted: "#F2E8E6",
      mutedForeground: "#9A6B66",
      border: "#E8D5D2",
      card: "#FFFFFF",
      cardForeground: "#2B1F1E",
    }
  },
  {
    id: 4,
    name: "Ocean Mist",
    colors: {
      primary: "#6B8CAE",
      primaryHover: "#5A7A9B",
      secondary: "#F2F6FA",
      accent: "#8FB4D3",
      background: "#FAFCFE",
      foreground: "#1A2332",
      muted: "#E6F0F7",
      mutedForeground: "#5A7A9B",
      border: "#D1E3F0",
      card: "#FFFFFF",
      cardForeground: "#1A2332",
    }
  },
  {
    id: 5,
    name: "Lavender Dream",
    colors: {
      primary: "#9B87B5",
      primaryHover: "#8575A3",
      secondary: "#F7F5FA",
      accent: "#C4B5DB",
      background: "#FDFCFE",
      foreground: "#241F2B",
      muted: "#F0EBF5",
      mutedForeground: "#8575A3",
      border: "#E2D5EA",
      card: "#FFFFFF",
      cardForeground: "#241F2B",
    }
  },
  {
    id: 6,
    name: "Golden Hour",
    colors: {
      primary: "#C4965A",
      primaryHover: "#B08649",
      secondary: "#FBF7F0",
      accent: "#E6C084",
      background: "#FEFBF6",
      foreground: "#2B2419",
      muted: "#F5EFE3",
      mutedForeground: "#B08649",
      border: "#EBE0CE",
      card: "#FFFFFF",
      cardForeground: "#2B2419",
    }
  },
  {
    id: 7,
    name: "Fresh Mint",
    colors: {
      primary: "#5A9B8E",
      primaryHover: "#4A8A7C",
      secondary: "#F0F8F6",
      accent: "#7BC4B5",
      background: "#FAFEFE",
      foreground: "#1A2B27",
      muted: "#E3F2EF",
      mutedForeground: "#4A8A7C",
      border: "#CCE8E1",
      card: "#FFFFFF",
      cardForeground: "#1A2B27",
    }
  },
  {
    id: 8,
    name: "Soft Coral",
    colors: {
      primary: "#D4847A",
      primaryHover: "#C7736A",
      secondary: "#FDF7F6",
      accent: "#F0A99E",
      background: "#FFFCFB",
      foreground: "#2B1E1C",
      muted: "#F7ECEA",
      mutedForeground: "#C7736A",
      border: "#F0DDD9",
      card: "#FFFFFF",
      cardForeground: "#2B1E1C",
    }
  },
  {
    id: 9,
    name: "Cloud Gray",
    colors: {
      primary: "#8A8A8A",
      primaryHover: "#757575",
      secondary: "#F8F8F8",
      accent: "#B5B5B5",
      background: "#FDFDFD",
      foreground: "#1F1F1F",
      muted: "#F0F0F0",
      mutedForeground: "#757575",
      border: "#E5E5E5",
      card: "#FFFFFF",
      cardForeground: "#1F1F1F",
    }
  },
  {
    id: 10,
    name: "Peachy Keen",
    colors: {
      primary: "#E6A073",
      primaryHover: "#DB9461",
      secondary: "#FEF8F4",
      accent: "#F5C49A",
      background: "#FFFDF9",
      foreground: "#2B1F17",
      muted: "#F9F0E8",
      mutedForeground: "#DB9461",
      border: "#F2E3D5",
      card: "#FFFFFF",
      cardForeground: "#2B1F17",
    }
  }
];