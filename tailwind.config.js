/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,html}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'ping-short': 'ping-short 2s linear infinite',
      },
      keyframes: {
        'ping-short': {
          '0%': { transform: 'scale(1)', opacity: '1', transformOrigin: 'center' },
          '100%': { transform: 'scale(1.4)', opacity: '0', transformOrigin: 'center' },
        },
      },
    },
  },
  plugins: [],
};
