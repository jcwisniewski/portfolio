import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { CiMenuFries } from "react-icons/ci";

type menuBarTypes = {
  onOpen: () => void;
  isOpen: boolean;
  onClose: () => void;
};

type FocusableElement = HTMLElement | null;

export default function MenuBar({ onOpen, isOpen, onClose }: menuBarTypes) {
  const btnRef: React.LegacyRef<HTMLButtonElement> = React.useRef(null);

  return (
    <>
      <IconButton
        as={Button}
        _hover={{
          bgColor: "green.1",
          color: "purple.1",
        }}
        variant="ghost"
        ref={btnRef}
        bgColor={"green.1"}
        aria-label="Search database"
        icon={<CiMenuFries />}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
