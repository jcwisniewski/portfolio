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
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";

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
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <Flex
              gap="2rem"
              display={"flex"}
              align={"start"}
              direction="column"
            >
              <Button
                target="_blank"
                as={Link}
                href="/work"
                variant="link"
                color="purple.1"
              >
                My work
              </Button>
              <Button
                target="_blank"
                as={Link}
                href="https://www.linkedin.com/in/julio-cesar-de-oliveira-945723b9/"
                variant="link"
                color="purple.1"
              >
                My resume
              </Button>
            </Flex>
          </DrawerBody>
          <DrawerFooter>
            <Flex color="purple.1" direction="row" gap="1rem">
              <AiOutlineMail />
              <Button
                as={Link}
                href="mailto:julio.wisnieski@gmail.com"
                variant="link"
                color="purple.1"
              >
                sayhelloto@me.com
              </Button>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
