import React from "react"

import { usePosts } from "../../../hooks/usePosts";

export const withFeaturedPosts = Component => ({ name = "FeaturedPosts", blok }: any) => {
  Component.displayName = name
  const { posts } = usePosts()

  const filteredPosts = posts?.filter(post => blok?.posts.includes(post?.uuid))

  return <Component blok={blok} posts={filteredPosts} />
}