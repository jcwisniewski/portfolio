import {
  Button,
  Flex,
  Link,
  Spacer,
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
        <Flex p="2rem" justifyContent={"space-between"}>
          <Text fontWeight={"bold"} color="green.1" fontSize="menubar">
            julio cesar
          </Text>
          <MenuBar isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
        </Flex>
        <Flex display="column">
          <Text
            p="2rem 0rem 2rem 2rem"
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
            I like to craft solid and scalable frontend products with great user
            experiences.
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
                Highly skiiled at progressive Enhancement, design systems & UI
                Engineering..
              </Text>
              <Text
                p="2rem "
                fontWeight={"bold"}
                color="white"
                fontSize={["text3", "text3", "text2", "text1"]}
              >
                Proven experience building successful products for clients
                across several countries.
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
