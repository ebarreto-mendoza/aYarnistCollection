/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'dominant': '#ffffff',
        'secondary': '#333333',
        'accent': {
          50: '#FFF5EC',
          100: '#FFEBD8',
          200: '#FFD7B2',
          300: '#FFC28B',
          400: '#FFAE65',
          500: '#FF9A3E',
          600: '#D07D32',
          700: '#A16025',
          800: '#734419',
          900: '#44270C',
        },
      },
    },
  },
  plugins: [],
};
