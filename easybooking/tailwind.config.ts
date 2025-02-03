import type { Config } from "tailwindcss"
import daisyui from "daisyui"
import { PluginAPI } from "tailwindcss/types/config"

export type IDaisyUITheme = Record<string, IDaisyUIThemeScheme>

export type IDaisyUIThemeScheme = {
  primary: string
  secondary: string
  accent: string
  neutral: string
  "base-100": string
  "base-200"?: string
  "base-border"?: string
  paper?: string
  info: string
  success: string
  warning: string
  error: string
  disable?: string
  "connect-green"?: string
  black?: string
  medium?: string
}

export default {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "logo-primary": "#1C4189"
      }
    }
  },

  daisyui: {
    logs: false,
    themes: [
      {
        standart: {
          primary: "#0d2b49",
          secondary: "#12446b",
          tertiary: "#520958",
          accent: "#f34f16",
          neutral: "#FFFFFF",
          "base-100": "#FFFFFF",
          paper: "#ffffff",
          info: "#3ABFF8",
          success: "#91d050",
          warning: "#FBBD23",
          error: "#CF3A3A",
          "base-200": "#636a7a",
          "connect-green": "#36D399"
        }
      },
      {
        EbLight: {
          primary: "#0d2b49",
          secondary: "#12446b",
          tertiary: "#520958",
          accent: "#f34f16",
          neutral: "#FFFFFF",
          "base-100": "#f7f8fa",
          "base-200": "#eef1f3",
          "base-border": "#ced1d3",
          paper: "#ffffff",
          info: "#1297d0",
          success: "#91d050",
          warning: "#FBBD23",
          error: "#CF3A3A",
          "connect-green": "#36D399",
          black: "#222222",
          medium: "#6f6f7f",
          "neutral-overlay": "#22222244",
          "mention-background": "#1297d02f"
        }
      },
      "coffee"
    ]
  },

  plugins: [
    daisyui,
    ({ addComponents }: PluginAPI) => {
      addComponents({
        'input[type="number"]::-webkit-outer-spin-button': {
          '-webkit-appearance': 'none',
          margin: '0',
        },
        'input[type="number"]::-webkit-inner-spin-button': {
          '-webkit-appearance': 'none',
          margin: '0',
        },
        'input[type="number"]': {
          '-moz-appearance': 'textfield',
        },
      });
    },
  ]
} satisfies Config
