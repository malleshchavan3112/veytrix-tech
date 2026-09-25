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
          focus: '#3B82F6',
        },
        accent: {
          blue: '#3B82F6',
          hover: '#2563EB',
          subtle: 'rgba(59, 130, 246, 0.08)',
          glow: 'rgba(59, 130, 246, 0.20)',
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
        pill: '9999px',
      },
      boxShadow: {
        'card-hover': '0 4px 12px rgba(15, 23, 42, 0.04)',
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
