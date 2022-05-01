import React, { Component } from 'react';
import {
  Box,
  Text,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as GatsbyLink } from 'gatsby'

import { withDesktopNavigation } from "./withDesktopNavigation"

export const DesktopNavigation = withDesktopNavigation(({ headerNav, socialLinks }: any) => (
  <Menu placement={"bottom-end"}>
    {({ isOpen }) => (
      <>
        <MenuButton as={Button}>
          {isOpen ? <CloseIcon /> : <HamburgerIcon />}
        </MenuButton>
        <MenuList>
          <MenuGroup title='Navigation'>
            {headerNav.map((navItem: any) => (
              <MenuItem>
                <Link as={GatsbyLink} to={`/${navItem?.link?.story?.full_slug || navItem?.link?.url}`} display={"block"} w={"full"}>
                  {navItem?.title}
                </Link>
              </MenuItem>
            ))}
          </MenuGroup>
          <MenuGroup title='Social'>
            {socialLinks.map((navItem: any) => (
              <MenuItem>
                {navItem?.title}
              </MenuItem>
            ))}
          </MenuGroup>
        </MenuList>
      </>
    )}
  </Menu>
  // <Box display={"flex"} gap={8}>
  //   {headerNav.map((navItem: any) => (
  //     <Link as={GatsbyLink} to={`/${navItem?.link?.story?.full_slug || navItem?.link?.url}`} _hover={{ textDecor: 'none' }}>
  //       {navItem?.title}
  //     </Link>
  //   ))}
  // </Box>
))
