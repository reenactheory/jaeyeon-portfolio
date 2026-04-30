/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#111110',
        paper: '#FEFEFE',
        line: '#E8E8E6',
        mute: '#8E8E8C',
        accent: '#1A1A1A',
      },
      fontFamily: {
        display: ['"Pretendard Variable"', 'system-ui', 'sans-serif'],
        sans: ['"Pretendard Variable"', 'system-ui', 'sans-serif'],
        kr: ['"Pretendard Variable"', 'system-ui', 'sans-serif'],
        serif: ['"Pretendard Variable"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter2: '-0.03em',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
