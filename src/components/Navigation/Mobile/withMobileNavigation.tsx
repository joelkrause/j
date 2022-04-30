import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { useColorMode, useDisclosure } from "@chakra-ui/react";

export const withMobileNavigation = Component => ({ name = "Header" }: any) => {
  Component.displayName = name
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()

  // const data = useStaticQuery(graphql`
  //     query Mobilenavigation {
  //         Storyblok {
  //             GlobalcontentItem(id: "global-content", resolve_links:"url") {
  //                 content {
  //                     header_nav
  //                 }
  //             }
  //         }
  //     }
  // `)
  // const HeaderNav = data.Storyblok.GlobalcontentItem.content.header_nav

  return <Component isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
}