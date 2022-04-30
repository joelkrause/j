import React, { useState, useEffect } from "react"
import { useColorMode } from "@chakra-ui/react";

export const withHeader = Component => ({ name = "Header" }: any) => {
  Component.displayName = name
  const { colorMode, toggleColorMode } = useColorMode()

  const [isScrolling, setScrolling] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollPos = window.pageYOffset

      if (scrollPos >= 80) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    })
  }, [])

  return <Component colorScheme={colorMode} updateColorScheme={toggleColorMode} isScrolling={isScrolling} />
}