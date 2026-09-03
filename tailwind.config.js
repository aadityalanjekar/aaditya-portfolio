/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark theme base
        dark: {
          900: '#070710',
          800: '#0d0d1a',
          700: '#111120',
          600: '#161628',
          500: '#1e1e30',
          400: '#252540',
          300: '#2e2e50',
        },
        // Primary violet
        violet: {
          950: '#1a0533',
          900: '#2e0f5e',
          800: '#4c1d95',
          700: '#5b21b6',
          600: '#7c3aed',
          500: '#8b5cf6',
          400: '#a78bfa',
          300: '#c4b5fd',
          200: '#ddd6fe',
          100: '#ede9fe',
        },
        // Accent cyan
        cyan: {
          900: '#083344',
          800: '#155e75',
          600: '#0891b2',
          500: '#06b6d4',
          400: '#22d3ee',
          300: '#67e8f9',
          200: '#a5f3fc',
        },
        // Accent rose/pink  
        rose: {
          500: '#f43f5e',
          400: '#fb7185',
        },
        // Neutral text
        slate: {
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(135deg, #070710 0%, #0d0d1a 50%, #070710 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(34,211,238,0.05) 100%)',
        'gradient-border': 'linear-gradient(135deg, #7c3aed, #22d3ee)',
        'gradient-violet-cyan': 'linear-gradient(135deg, #7c3aed 0%, #22d3ee 100%)',
        'gradient-text': 'linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'blob': 'blob 10s ease-in-out infinite',
        'typing': 'typing 2s steps(20, end)',
        'blink': 'blink 0.7s infinite',
        'shimmer': 'shimmer 2s infinite linear',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(124,58,237,0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(34,211,238,0.4), 0 0 60px rgba(124,58,237,0.2)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-violet': '0 0 30px rgba(124, 58, 237, 0.4)',
        'glow-cyan': '0 0 30px rgba(34, 211, 238, 0.3)',
        'glow-sm': '0 0 15px rgba(124, 58, 237, 0.2)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.4), 0 1px 0 rgba(255,255,255,0.05) inset',
        'card-hover': '0 16px 48px rgba(124, 58, 237, 0.2), 0 1px 0 rgba(255,255,255,0.08) inset',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}
