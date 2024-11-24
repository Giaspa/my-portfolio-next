import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'futuristic': '0 10px 20px rgba(0, 0, 0, 0.3), 0 6px 6px rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,17,121,1) 0%, rgba(0,0,0,1) 100%)'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
} satisfies Config;
