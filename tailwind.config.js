/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // App Router paths
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Optional: Pages Router
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono), monospace", // Fixed typo and added fallback
    },
    
  	extend: {

      colors:{
        primary: '#1c1c22',
        accent: {
          DEFAULT: '#00ff99',
          hover: '#00e187',
        }
      },
  	}
  },
  plugins: [require("tailwindcss-animate")],
};