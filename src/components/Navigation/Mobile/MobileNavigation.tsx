import React, { Component } from 'react';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { Link as GatsbyLink } from 'gatsby'
import { HamburgerIcon } from '@chakra-ui/icons'

import { withMobileNavigation } from "./withMobileNavigation"

export const MobileNavigation = withMobileNavigation(({ isOpen, onClose, onOpen }: any) => (
  <>
    <Button onClick={() => onOpen()}>
      <HamburgerIcon />
    </Button>
    <Drawer
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
      size={"md"}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Navigation</DrawerHeader>

        <DrawerBody>
          hi
        </DrawerBody>

        {/*<DrawerFooter>*/}
        {/*  <Button variant='outline' mr={3} onClick={onClose}>*/}
        {/*    Cancel*/}
        {/*  </Button>*/}
        {/*  <Button colorScheme='blue'>Save</Button>*/}
        {/*</DrawerFooter>*/}
      </DrawerContent>
    </Drawer>
    {/*<Box display={"flex"} gap={8}>*/}
    {/*  {headerNav.map((navItem: any) => (*/}
    {/*    <Link as={GatsbyLink} to={navItem?.link?.story?.full_slug || navItem?.link?.url} _hover={{ textDecor: 'none' }}>*/}
    {/*      {navItem?.title}*/}
    {/*    </Link>*/}
    {/*  ))}*/}
    {/*</Box>*/}
  </>
))
