import React from "react"
import { Link } from "gatsby"
import { Box, Flex, Heading, Image } from "@chakra-ui/react";

import { withCard } from "./withCard";

export const PostCard = withCard(({ post }: any) => (
  <Link to={post?.full_slug}>
    <Flex alignItems={"center"} gap={6}>
      {post.content.post_icon &&
        <Box>
          <Image src={post.content.post_icon} maxW={10} />
        </Box>
      }
      <Heading as={"h4"} fontSize={26}>{post?.name}</Heading>
    </Flex>
    <pre>{JSON.stringify(post, null,2)}</pre>
  </Link>
))