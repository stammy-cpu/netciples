// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",      // root app/
    "./src/**/*.{js,ts,jsx,tsx,mdx}",      // src/components, etc.
    "./components/**/*.{js,ts,jsx,tsx,mdx}"// if you add root components later
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
