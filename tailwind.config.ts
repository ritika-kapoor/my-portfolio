import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: '#244855',  // deep blue
          light: '#90AEAD',    // muted blue-gray
          dark: '#1a3640',     // darker blue
        },
        secondary: {
          DEFAULT: '#E64833',  // terracotta
          light: '#ff6b4a',    // lighter terracotta
          dark: '#874F41',     // deep brown
        },
        accent: {
          DEFAULT: '#FBE9D0',  // vintage cream
          light: '#fff4e6',    // lighter cream
          dark: '#e6d4bc',     // darker cream
        },
        background: {
          dark: '#1a3640',     // deep vintage blue
          light: '#244855',    // medium vintage blue
        },
        text: {
          light: '#FBE9D0',    // vintage cream
          dark: '#244855',     // deep blue
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, var(--tw-colors-background-dark), var(--tw-colors-background-light))',
      },
    },
  },
  plugins: [],
} satisfies Config; 