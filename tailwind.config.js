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
        'earth-mobile': "url('/image-deep-earth.jpg')",
        'earth-desktop': "url('/image-deep-earth-desktop.jpg')",
        'arcade-mobile': "url('/image-night-arcade.jpg')",
        'arcade-desktop': "url('/image-night-arcade-desktop.jpg')",
        'soccer-mobile': "url('/image-soccer-team.jpg')",
        'soccer-desktop': "url('/image-soccer-team-desktop.jpg')",
        'grid-mobile': "url('/image-grid.jpg')",
        'grid-desktop': "url('/image-grid-desktop.jpg')",
        'above-mobile': "url('/image-from-above.jpg')",
        'above-desktop': "url('/image-from-above-desktop.jpg')",
        'pocket-mobile': "url('/image-pocket-borealis.jpg')",
        'pocket-desktop': "url('/image-pocket-borealis-desktop.jpg')",
        'curiosity-mobile': "url('/image-curiosity.jpg')",
        'curiosity-desktop': "url('/image-curiosity-desktop.jpg')",
        'fisheye-mobile': "url('/image-fisheye.jpg')",
        'fisheye-desktop': "url('/image-fisheye-desktop.jpg')",

        
      }
    },
  },
  plugins: [],
};
