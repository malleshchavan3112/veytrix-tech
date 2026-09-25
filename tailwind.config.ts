import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        canvas: {
          base: '#FBFBFD',
          subtle: '#F1F3F7',
          elevated: '#FFFFFF',
          overlay: 'rgba(15, 23, 42, 0.40)',
        },
        content: {
          primary: '#0F172A',
          secondary: '#475569',
          tertiary: '#64748B',
          muted: '#94A3B8',
        },
        border: {
          hairline: '#E2E8F0',
          default: '#CBD5E1',
          focus: '#2563EB',
        },
        veytrix: {
          navy: '#071A52',
          blue: '#1D4ED8',
          electric: '#2563EB',
          cyan: '#06B6D4',
          teal: '#14B8A6',
          surface: '#F0F7FF',
          dark: '#0A192F',
        },
        accent: {
          blue: '#2563EB',
          hover: '#1D4ED8',
          cyan: '#06B6D4',
          teal: '#14B8A6',
          subtle: 'rgba(37, 99, 235, 0.06)',
          glow: 'rgba(6, 182, 212, 0.20)',
        },
        dark: {
          base: '#0F172A',
          card: '#1E293B',
          border: '#334155',
          text: '#F8FAFC',
          muted: '#94A3B8',
        },
        status: {
          success: '#10B981',
          error: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-geist)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      maxWidth: {
        ultra: '1360px',
        std: '1200px',
        prose: '800px',
        form: '720px',
      },
      borderRadius: {
        sm: '4px',
        md: '6px',
        lg: '10px',
        xl: '14px',
        pill: '9999px',
      },
      boxShadow: {
        'card-hover': '0 8px 24px -4px rgba(15, 23, 42, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.04)',
        'veytrix-glow': '0 0 30px -5px rgba(6, 182, 212, 0.25)',
        'btn-primary': '0 2px 8px -1px rgba(37, 99, 235, 0.35)',
        'btn-hover': '0 6px 16px -2px rgba(37, 99, 235, 0.45)',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        'line-flow': {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
        'line-flow': 'line-flow 3s linear infinite',
        'blink': 'blink 1.2s infinite',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.2, 0, 0, 1)',
        drawer: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
