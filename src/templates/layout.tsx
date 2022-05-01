import React, { Component } from 'react';
import { PageProps, useStaticQuery, graphql, Link } from 'gatsby';
import { Box, ChakraProvider } from "@chakra-ui/react";

import '@fontsource/outfit/400.css'
import '@fontsource/outfit/700.css'
import '@fontsource/syncopate/700.css'

import { Header } from "../components/Header/Header"
import theme from "../theme.ts"

const Layout: React.FC<PageProps> = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box as={"main"} mt={{ base: 16, lg: 40 }}>{children}</Box>
    </ ChakraProvider>
  )
}

export default Layout
