import React, { Component } from 'react';
import { Container, Box, Grid, GridItem, Flex, Button, useColorModeValue, Text, Tooltip } from "@chakra-ui/react";
import { Link } from 'gatsby';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

import { withHeader } from "./withHeader"
import { DesktopNavigation } from "../Navigation/Desktop/DesktopNavigation"

export const Header = withHeader(({ colorScheme, updateColorScheme }) => (
  <Box py={6} position={"sticky"} top={0} bg={useColorModeValue("white","black")} >
    <Container maxW={"container.xl"}>
      <Grid gap={2} gridTemplateColumns={"repeat(12, 1fr)"} alignItems={"center"}>
        <GridItem colSpan={{base: 6, lg: 3}}>
          <Link to="/">
            <Text fontSize={"lg"}>Joel Krause</Text>
          </Link>
        </GridItem>
        <GridItem d={{base: "none", lg: "block"}} colSpan={{base: 0, lg: 6}}>
          <Flex justifyContent={"center"} alignItems={"center"}>
            <DesktopNavigation />
          </Flex>
        </GridItem>
        <GridItem colSpan={{base: 6, lg: 3}}>
          <Flex justifyContent={"flex-end"} alignItems={"center"}>
            <Tooltip hasArrow label={useColorModeValue("Change to dark mode", "Change to light mode")} bg='blue.600'>
              <Button onClick={() => updateColorScheme()}>{colorScheme == "dark" ? <MoonIcon/> : <SunIcon />}</Button>
            </Tooltip>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  </Box>
))
