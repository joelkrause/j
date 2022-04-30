import React, { Component } from 'react';
import { PageProps, useStaticQuery, graphql, Link } from 'gatsby';
import { ChakraProvider } from "@chakra-ui/react";

import '@fontsource/outfit/400.css'
import '@fontsource/outfit/700.css'

import { Header } from "../components/Header/Header"
import theme from "../theme.ts"

const Layout: React.FC<PageProps> = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <main>{children}</main>
    </ ChakraProvider>
  )
}

export default Layout
