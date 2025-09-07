// tailwind.config.js
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      animation: {
        'spin-fast': 'spin 0.5s linear infinite', // 0.5s মানে দ্রুত স্পিন
        'gradient-x': 'gradient-x 3s ease infinite', // নতুন gradient animation
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      backgroundSize: {
        '200': '200% 200%', // gradient animation বড় করার জন্য
      },
    },
  },
  plugins: [],
};
