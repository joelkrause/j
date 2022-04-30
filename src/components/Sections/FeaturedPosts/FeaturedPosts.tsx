import React from "react"
import {Box, Container, Heading} from "@chakra-ui/react";

import { withFeaturedPosts } from "./withFeaturedPosts";

export const FeaturedPosts = withFeaturedPosts(({ blok, posts }: any) => (
  <Box>
    <Container maxW={"container.xl"}>
      {blok?.heading && <Heading as={"h2"}>{blok?.heading}</Heading>}
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </Container>
  </Box>
))