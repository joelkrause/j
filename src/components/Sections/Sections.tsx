import React from "react"

import { withSections } from "./withSections";

export const Sections = withSections(({ sections, ComponentLoader }: any) => (
  sections?.map((blok: any) => {
    return (<ComponentLoader blok={blok} key={blok._uid} />)
  })
))