/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/images/**/*.{png,jpg,jpeg,gif,svg}",
  ],
  prefix: "",
  theme: {
    screens: {
      sm: { min: "359px", max: "415px" },
      md: { min: "760px", max: "1290px" },
      xl: { min: "1280px", max: "1441px" },
    },
    extend: {
      backgroundImage: {
        "ZX7-SPEAKER": "url('/images/home/desktop/image-speaker-zx7.jpg')",
        "hero-img": "url('/images/home/desktop/image-hero.jpg')",
        "hero-img-md": "url('/images/home/tablet/image-header.jpg')",
        "hero-img-sm": "url('/images/home/mobile/image-header.jpg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
