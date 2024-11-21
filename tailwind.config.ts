import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        layout: "144rem", // 1440px container
        "ultra-layout": "192rem", // 1920px ultra-wide container
      },
      height: {
        "112rem": "112rem", // 1120px height (for larger screens)
        "80rem": "80rem", // 800px height (for mobile)
        "100rem": "100rem", // 1000px height (for tablets)
      },
      fontSize: {
        base: "1.6rem", // 16px
        sm: "1.2rem", // 12px
        lg: "2rem", // 20px
        xl: "2.4rem", // 24px
        "2xl": "3.2rem", // 32px
        "3xl": "4rem", // 40px
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      lineHeight: {
        none: "1",
        tight: "1.2",
        snug: "1.4",
        normal: "1.6",
        relaxed: "1.75",
        loose: "2",
        custom: "2.5", // Example custom line height
      },
      spacing: {
        "1": "0.1rem", // 1px
        "2": "0.2rem", // 2px
        "4": "0.4rem", // 4px
        "8": "0.8rem", // 8px
        "10": "1rem", // 10px
        "20": "2rem", // 20px
        "30": "3rem", // 30px
        "40": "4rem", // 40px
        "container-padding": "8rem", // 80px padding
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
        custom: "0.15em", // Example custom spacing
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightgray: "var(--text-gray)",
      },
      screens: {
        sm: "48rem", // 768px
        md: "64rem", // 1024px
        lg: "75rem", // 1200px
        xl: "90rem", // 1440px
        "ultra-wide": "120rem", // 1920px in rem
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("daisyui"),
  ],
} satisfies Config
