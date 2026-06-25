import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "var(--color-primary)",
        "navy-strong": "var(--color-primary-strong)",
        gold: "var(--color-accent)",
        accent: "var(--color-accent)",
        "accent-soft": "var(--color-accent-soft)",
        mist: "var(--color-surface)",
        "light-gray": "var(--color-border)",
        graphite: "var(--color-graphite)",
        "graphite-soft": "var(--color-muted)",
        success: "var(--color-success)",
        "success-soft": "var(--color-success-soft)",
        warning: "var(--color-warning)",
        "warning-soft": "var(--color-warning-soft)",
        error: "var(--color-error)",
        "error-soft": "var(--color-error-soft)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "Helvetica", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        form: "var(--shadow-form)"
      },
      borderRadius: {
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)"
      }
    }
  },
  plugins: []
};

export default config;
