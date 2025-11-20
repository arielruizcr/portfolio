/** @type {import('tailwindcss').Config} */
module.exports = {
  // Content paths - Tailwind scans these files to determine which classes to include
  // This ensures unused CSS is purged in production builds
  content: [
    "./index.html",
    "./**/*.html",
    "./assets/js/**/*.js"
  ],
  theme: {
    extend: {
      // You can extend the default theme here if needed
      // Example: custom colors, fonts, spacing, etc.
    },
  },
  plugins: [],
  // Production optimizations
  corePlugins: {
    // Ensure all core plugins are available
  },
}

