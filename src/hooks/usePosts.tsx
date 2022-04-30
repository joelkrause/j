import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

export const usePosts = () => {
  const posts = useStaticQuery(graphql`
      query Posts {
          Storyblok {
              PostItems {
                  items {
                      full_slug
                      name
                      published_at
                      first_published_at
                      uuid
                      content {
                          body
                          component
                          excerpt
                          likes
                          post_hero
                          post_icon
                          categories {
                              uuid
                              name
                          }
                      }
                  }
              }
          }
      }
  `)

  return {
    posts: posts?.Storyblok?.PostItems?.items
  }
}