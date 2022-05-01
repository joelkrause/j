import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const withHomeHero = Component => ({ name = "HomeHero", blok }: any) => {
  Component.displayName = name

  const image = getImage(blok?.image?.filename)

  return <Component blok={blok} image={image} />
}