import React from "react"

import { withAllPosts } from "./withAllPosts";

export const AllPosts = withAllPosts(({ blok }: any) => (
  <>
    <pre>{JSON.stringify(blok, null,2)}</pre>
  </>
))