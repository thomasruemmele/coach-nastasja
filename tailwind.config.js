/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'night': '#0F172A',
        'card': '#131a30',
        'slate-soft': '#1e293b',
        'gold': { DEFAULT: '#C8A96B', soft: '#A88C5C' },
        'text-primary': '#ffffff',
        'text-secondary': '#cbd5e0',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"SF Mono"', 'monospace'],
      },
      maxWidth: {
        'content': '720px',
        'narrow': '640px',
        'wide': '1200px',
      },
      letterSpacing: {
        'tight-headline': '-0.02em',
        'kicker': '0.2em',
      },
    }
  }
};
