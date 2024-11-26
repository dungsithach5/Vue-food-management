/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "node_modules/flowbite/**/*.js"  // Thêm dòng này để bao gồm Flowbite
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')  // Thêm plugin Flowbite
  ],
}