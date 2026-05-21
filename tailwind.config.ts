import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-deep": "#0A1628",
        "blue-mid": "#1B3A6B",
        "blue-accent": "#2E6DB4",
        "brown-warm": "#8B5E3C",
        "brown-light": "#C49A6C",
        "white-pure": "#FFFFFF",
        "white-soft": "#F5F0EA",
        "white-muted": "#D6CFC5",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.3em",
        widest3: "0.5em",
      },
      backgroundImage: {
        "brown-gradient": "linear-gradient(135deg, #8B5E3C 0%, #C49A6C 50%, #8B5E3C 100%)",
        "blue-gradient": "linear-gradient(135deg, #1B3A6B 0%, #2E6DB4 100%)",
      },
      animation: {
        ticker: "ticker 30s linear infinite",
        shimmer: "shimmer 2.5s ease-in-out infinite",
        "scroll-indicator": "scrollBounce 1.5s ease-in-out infinite",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        scrollBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
