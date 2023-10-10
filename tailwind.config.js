/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",  "./node_modules/flowbite/**/*.js"],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        screens: {
          // Add your custom breakpoints
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1280px',

        },
      },
    },
    colors: {
      themeColor: "#EE9322",
      themeColor_hover: "#E9B824",
      themeColor_red: "#D83F31",
      themeColor_purple: "#4420e1",
      darkTheme: "#191919",
      navbarWhite: "#ffffff2e",
      navbarDark: "#00000057",
      overlayDark: '#000000ad',
      overlayWhite: '#0000006b',
    }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

