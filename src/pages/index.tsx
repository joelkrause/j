import React, { Component } from 'react';
import { PageProps, useStaticQuery, graphql, Link } from 'gatsby';
import { Box } from "@chakra-ui/react";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Box h={7000}>
      home page
    </Box>
  )
}

export default IndexPage
