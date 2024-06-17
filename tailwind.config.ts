import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        'avenir-light': 'var(--font-avenir-light)',
        'avenir-regular': 'var(--font-avenir-regular)',
        'avenir-bold': 'var(--font-avenir-bold)',
        'work-sans': 'var(--font-works-sans)',
      },
      colors: {
        primary: '#39CDCC',
        secondary: '#213F7D'
      },
      dropShadow: {
        auth: '0px 15px 90px 0px #00000008'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
