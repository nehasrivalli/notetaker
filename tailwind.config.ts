// tailwind.config.ts
export {}; // Add this line to make it a module

/** @type {import('tailwindcss').Config} */
const config: import('tailwindcss').Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};

export default config; // Export the configuration
