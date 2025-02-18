/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Quét tất cả các file trong src có chứa JSX/TSX
  ],
  theme: {
    extend: {
      fontFamily: {
        grechen: ['Grechen Fuemen', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
