import { extendTheme } from '@chakra-ui/react'

const customTheme = extendTheme({
  colors: {
    primary: {
      50: '#e2fbed',
      100: '#c2ebd4',
      200: '#9fddb9',
      300: '#7ccf9e',
      400: '#58c184',
      500: '#3ea76a',
      600: '#2e8251',
      700: '#1f5d3a',
      800: '#0f3921',
      900: '#001506',
    },
  },
  fonts: {
    heading: "'Playfair Display', serif",
    body: '"Poppins", sans-serif',
    mono: "'Fira Mono', monospace",
  },
})

export default customTheme
