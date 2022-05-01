import React from "react"

export const withCard = Component => ({ name = "PostCard", post }: any) => {
  Component.displayName = name

  return <Component post={post} />
}