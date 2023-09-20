import { Button, Flex, IconButton, Link, Text } from "@chakra-ui/react";
import { BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <Flex
        align="start"
        gap="3rem"
        bgColor="purple.2"
        color="green.1"
        direction="column"
        p={[
          "5rem 0rem 5rem 2rem",
          "5rem 0rem 5rem 6rem",
          "5rem 0rem 5rem 6rem",
          "5rem 0rem 5rem 6rem",
        ]}
      >
        <Flex
          borderTop="1px"
          color="green.1"
          direction="row"
          justifyContent={"space-between"}
          w="90%"
          align="start"
          gap="2rem"
          mb="1rem"
        >
          <Flex direction="column" align="start" gap="2rem">
            <Button
              mt="2rem"
              fontSize={["subtitle3", "subtitle2"]}
              target="_blank"
              as={Link}
              href="/work"
              variant="link"
              color="green.1"
            >
              My work
            </Button>
            <Button
              fontSize={["subtitle3", "subtitle2"]}
              target="_blank"
              as={Link}
              href="/work"
              variant="link"
              color="green.1"
            >
              My resume
            </Button>
          </Flex>
          <Flex
            direction="column"
            gap="2rem"
            fontSize={["subtitle3", "subtitle2"]}
          >
            <Text mt="2rem">by julio cesar ®</Text>
            <Button
              target="_blank"
              as={Link}
              value="+55 41 99591 5693"
              variant="link"
              href="https://wa.me/5541995915693"
              aria-label="Whatsapp number"
            >
              <BsWhatsapp />
              +55 41 99591 5693
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
