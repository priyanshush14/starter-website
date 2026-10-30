/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          primary: 'var(--color-primary)',
          'primary-hover': 'var(--color-primary-hover)',
          secondary: 'var(--color-secondary)',
          'secondary-hover': 'var(--color-secondary-hover)',
          background: 'var(--color-background)',
          foreground: 'var(--color-foreground)',
          muted: 'var(--color-muted)',
          'muted-foreground': 'var(--color-muted-foreground)',
          accent: 'var(--color-accent)',
          'accent-foreground': 'var(--color-accent-foreground)',
          card: 'var(--color-card)',
          'card-foreground': 'var(--color-card-foreground)',
          border: 'var(--color-border)',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        button: 'var(--radius-button)',
        card: 'var(--radius-card)',
      },
    },
  },
  plugins: [],
};
