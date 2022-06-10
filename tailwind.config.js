module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {

          "primary": "#009BDF",

          "secondary": "#FF451B",

          "accent": "#1FB2A6",

          "neutral": "#191D24",

          "base-100": "#F5F4F2",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui"),
  require('@tailwindcss/forms'),],
}
