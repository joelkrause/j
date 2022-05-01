import { extendTheme, useColorModeValue, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: false
}

const theme = extendTheme({ config,
  styles: {
    global: () => ({
      body: {
        bg: useColorModeValue("#fff","#222"),
        fontSize:"1.25rem"
      }
    })
  },
  fonts: {
    body: 'Outfit, sans-serif',
    heading: 'Outfit, sans-serif'
  },
  colors: {
    primary: {
      darkGray: "#222",
    },
  }
})

export default theme