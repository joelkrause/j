import React from "react"

export const withAllPosts = Component => ({ name = "AllPosts", blok }: any) => {
  Component.displayName = name

  return <Component blok={blok} />
}