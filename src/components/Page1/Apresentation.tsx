import {
  Button,
  Flex,
  Link,
  Spacer,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import AvatarShape from "../Avatar/avatarShape";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";
import MenuBar from "../MenuBar/menuBar";

const Apresentation: React.FC = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  return (
    <>
      <Flex w={"full"} h="full" flexDirection="column">
        <Flex p="2rem" position="fixed" zIndex={3}>
          <Stack direction="row" spacing={[200, 600, 1000, 1650]}>
            <Text fontWeight={"bold"} color="green.1" fontSize="menubar">
              julio cesar
            </Text>
            <MenuBar isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
          </Stack>
        </Flex>
        <Flex display="column">
          <Text
            p="6rem 0rem 2rem 2rem"
            fontWeight={"bold"}
            color="green.1"
            fontSize={["title3", "title3", "title2", "title"]}
          >
            Full stack developer
          </Text>
          <Text
            p="2rem 0rem 2rem 2rem"
            fontWeight={"bold"}
            color="white"
            fontSize={["subtitle4", "subtitle2"]}
          >
            I have a passion for crafting robust and scalable solutions that
            provide exceptional user experiences.
          </Text>
          <Flex
            justifyContent={[
              "center",
              "center",
              "space-around",
              "space-around",
            ]}
            display={["column", "column", "flex", "flex"]}
          >
            <Flex w="50%">
              <Text
                p="2rem "
                fontWeight={"bold"}
                color="white"
                fontSize={["text3", "text3", "text2", "text1"]}
              >
                Proficient in progressive enhancement, design systems, and UI
                engineering, I bring a wealth of expertise to the table.
              </Text>
              <Text
                p="2rem "
                fontWeight={"bold"}
                color="white"
                fontSize={["text3", "text3", "text2", "text1"]}
              >
                My track record includes successfully delivering products for
                clients.
              </Text>
            </Flex>
            <Flex
              bgColor={["green.1", "green.1", "transparent", "transparent"]}
            >
              <AvatarShape />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Apresentation;
