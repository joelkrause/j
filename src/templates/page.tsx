import * as React from "react"
import { Sections } from "../components/Sections/Sections";

const Page = ({ pageContext, location }: any) => {
  let story = pageContext.story

  return (
  <>
    {story?.content?.modules && <Sections sections={story.content.modules} />}
  </>
)}
 
export default Page