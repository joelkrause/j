import React, { Component } from 'react';
import { Box} from "@chakra-ui/react";
import { Link } from "gatsby"

import { withDesktopNavigation } from "./withDesktopNavigation"

export const DesktopNavigation = withDesktopNavigation(({ headerNav }) => (
  <Box>
    {/*<pre>{JSON.stringify(headerNav, null, 2)}</pre>*/}
    {headerNav.map(navItem => (<Link to={navItem?.link?.story?.full_slug || navItem?.link?.url}>{navItem?.title}</Link>))}
  </Box>
))
