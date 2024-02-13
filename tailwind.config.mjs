/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  prefix: "",
  theme: {
    screens: {
      sm: { min: "640px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      xl: { min: "1280px", max: "1440px" },
    },
    extend: {
      backgroundImage: {
        "ZX7-SPEAKER": "url('/images/home/desktop/image-speaker-zx7.jpg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
