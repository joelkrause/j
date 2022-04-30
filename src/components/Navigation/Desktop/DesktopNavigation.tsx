import React, { Component } from 'react';
import { Box, Text, Link} from "@chakra-ui/react";
import { Link as GatsbyLink } from 'gatsby'

import { withDesktopNavigation } from "./withDesktopNavigation"

export const DesktopNavigation = withDesktopNavigation(({ headerNav }: any) => (
  <Box display={"flex"} gap={8}>
    {headerNav.map((navItem: any) => (
      <Link as={GatsbyLink} to={`/${navItem?.link?.story?.full_slug || navItem?.link?.url}`} _hover={{ textDecor: 'none' }}>
        {navItem?.title}
      </Link>
    ))}
  </Box>
))
