import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: false
}

const theme = extendTheme({ config,   fonts: {
    body: 'Outfit, sans-serif',
  }, })

export default theme