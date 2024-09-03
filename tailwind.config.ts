import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        comment: "#00000042",
        border: "#E0E0E0",
        primary: "#007B3D",
        background: "#F2F2F2",
        "button-background": "##0000001F",
      },
      fontSize: {
        sm: ["12px", "12px"],
        md: ["16px", "16px"],
        xl: ["30px", "30px"],
      },
    },
  },
  plugins: [],
};
export default config;
