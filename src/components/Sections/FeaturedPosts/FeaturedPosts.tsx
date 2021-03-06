import React from "react"
import {Box, Container, Heading} from "@chakra-ui/react";

import { withFeaturedPosts } from "./withFeaturedPosts";
import {PostCard} from "../../Post/Card/Card";

export const FeaturedPosts = withFeaturedPosts(({ blok, posts }: any) => (
  <Box>
    <Container maxW={"container.xl"}>
      {blok?.heading && <Heading as={"h2"}>{blok?.heading}</Heading>}
      {posts?.map((post: any) => <PostCard post={post} key={post?.uuid} />)}
    </Container>
  </Box>
))