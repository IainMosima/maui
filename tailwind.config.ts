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
        background: '#1E1E1E',
        background2: '#F7F7C5',
        background3: '#E1E1B4',
        purple: '#7B2D3A',
        grey: "#808080"
      }
    },
  },
  plugins: [],
};
export default config;
