/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#a21bff",
          50: "#fdf5ff",
          100: "#f8e8ff",
          200: "#f0ccff",
          300: "#e5a9ff",
          400: "#d977ff",
          500: "#c241ff",
          600: "#a21bff",
          700: "#8614e8",
          800: "#5b0db6",
          900: "#3b0a78",
        },
        accent: "#FF5621",
        background: "#ffffff",
        foreground: "#171717",
        text: {
          DEFAULT: "#171717",
          light: "#ededed",
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0.75rem",
        lg: "1.25rem",
      },
      boxShadow: {
        card: "0 8px 24px rgba(0,0,0,.07)",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
  plugins: [],
}; 