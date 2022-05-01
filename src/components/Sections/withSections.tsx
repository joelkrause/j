import React from "react"
import { AllPosts } from './AllPosts/AllPosts'
import { FeaturedPosts } from './FeaturedPosts/FeaturedPosts'
import { HomeHero} from "./HomeHero/HomeHero"

export const withSections = Component => ({ name = "Sections", sections }: any) => {
  Component.displayName = name

  const Components = {
    'allPosts': AllPosts,
    'featuredPosts': FeaturedPosts,
    'homeHero': HomeHero
  }

const ComponentLoader = ({blok}) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    return (<div><Component blok={blok} /></div>)
  }
  return `${blok.component} not found`
};

  return <Component sections={sections} ComponentLoader={ComponentLoader} />
}