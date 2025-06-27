/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
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
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
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