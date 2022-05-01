import React, { Component } from 'react';
import {Container, Box, Grid, GridItem, Flex, Button, useColorModeValue, Text, Tooltip } from "@chakra-ui/react";
import { Link } from 'gatsby';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

import { withHeader } from "./withHeader"
import { DesktopNavigation } from "../Navigation/Desktop/DesktopNavigation"
import { MobileNavigation } from "../Navigation/Mobile/MobileNavigation"

export const Header = withHeader(({ colorScheme, updateColorScheme, isScrolling }: any) => (
  <Box as={"header"} w={"full"} boxShadow={isScrolling ? "md" : null} h={{ base: 16, lg: isScrolling ? 20 : 32 }} display={"flex"} alignItems={"center"} position={"fixed"} top={0} bg={useColorModeValue("white","primary.darkGray")} transition={"all 0.25s"}>
    <Container maxW={"container.xl"}>
      <Grid gap={2} gridTemplateColumns={"repeat(12, 1fr)"} alignItems={"center"}>
        <GridItem colSpan={6}>
          <Link to="/">
            <Text fontSize={"lg"} fontWeight={700}>
              jkrs.dev
            </Text>
          </Link>
        </GridItem>
        <GridItem colSpan={6}>
          <Flex justifyContent={"flex-end"} alignItems={"center"}>
            <Tooltip hasArrow label={useColorModeValue("Change to dark mode", "Change to light mode")} bg='blue.600'>
              <Button mr={{base: 4, lg: 4}} onClick={() => updateColorScheme()}>{colorScheme == "dark" ? <MoonIcon/> : <SunIcon />}</Button>
            </Tooltip>
            <DesktopNavigation />
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  </Box>
))
