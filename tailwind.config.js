/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Dark-Gray": "hsl(0, 0%, 55%)",
        "Very-Dark-Gray": "hsl(0, 0%, 41%)",
      },
      backgroundImage: {
        'hero-background-desktop': "url('/src/images/desktop/image-hero.jpg')",
        'hero-background-mobile': "url('/src/images/mobile/image-hero.jpg')",
        'earth-mobile': "url('./src/images/mobile/image-deep-earth.jpg')",
        'earth-desktop': "url('./src/images/desktop/image-deep-earth.jpg')",
        'arcade-mobile': "url('./src/images/mobile/image-night-arcade.jpg')",
        'arcade-desktop': "url('./src/images/desktop/image-night-arcade.jpg')",
        'soccer-mobile': "url('./src/images/mobile/image-soccer-team.jpg')",
        'soccer-desktop': "url('./src/images/desktop/image-soccer-team.jpg')",
        'grid-mobile': "url('./src/images/mobile/image-grid.jpg')",
        'grid-desktop': "url('./src/images/desktop/image-grid.jpg')",
        'above-mobile': "url('./src/images/mobile/image-from-above.jpg')",
        'above-desktop': "url('./src/images/desktop/image-from-above.jpg')",
        'pocket-mobile': "url('./src/images/mobile/image-pocket-borealis.jpg')",
        'pocket-desktop': "url('./src/images/desktop/image-pocket-borealis.jpg')",
        'curiosity-mobile': "url('./src/images/mobile/image-curiosity.jpg')",
        'curiosity-desktop': "url('./src/images/desktop/image-curiosity.jpg')",
        'fisheye-mobile': "url('./src/images/mobile/image-fisheye.jpg')",
        'fisheye-desktop': "url('./src/images/desktop/image-fisheye.jpg')",

        
      }
    },
  },
  plugins: [],
};
