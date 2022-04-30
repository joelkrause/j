import React, { useState, useEffect } from "react"
import { useColorMode } from "@chakra-ui/react";

export const withHeader = Component => ({ name = "Header" }: any) => {
  Component.displayName = name
  const { colorMode, toggleColorMode } = useColorMode()

  return <Component colorScheme={colorMode} updateColorScheme={toggleColorMode} />
}