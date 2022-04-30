import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { useColorMode } from "@chakra-ui/react";

export const withDesktopNavigation = Component => ({ name = "Header" }: any) => {
  Component.displayName = name
  const { colorMode, toggleColorMode } = useColorMode()

  const data = useStaticQuery(graphql`
      query GlobalContent {
          Storyblok {
              GlobalcontentItem(id: "global-content", resolve_links:"url") {
                  content {
                      header_nav
                  }
              }
          }
      }
  `)
  const HeaderNav = data.Storyblok.GlobalcontentItem.content.header_nav

  return <Component colorScheme={colorMode} updateColorScheme={toggleColorMode} headerNav={HeaderNav} />
}