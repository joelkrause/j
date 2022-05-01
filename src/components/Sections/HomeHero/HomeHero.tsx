import React from "react"
import { Box, Container, Grid, GridItem, Image } from "@chakra-ui/react";
import { render } from 'storyblok-rich-text-react-renderer';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { withHomeHero } from "./withHomeHero";

export const HomeHero = withHomeHero(({ blok, image }: any) => (
  <Box py={"20"}>
    <Container maxW={"container.xl"}>
      <Grid gap={20} gridTemplateColumns={"repeat(12, 1fr)"} alignItems={"center"}>
        {blok?.content && (
          <GridItem colSpan={{ base: 12, lg: 6 }}>
            {render(blok?.content)}
          </GridItem>
        )}
        {blok?.image && (
          <GridItem colSpan={{base: 12, lg: 6 }}>
            <Image src={blok?.image?.filename} maxW={"full"}/>
          </GridItem>
        )}
      </Grid>
    </Container>
  </Box>
))