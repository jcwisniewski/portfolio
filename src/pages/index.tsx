import { Flex, Img, Text } from "@chakra-ui/react";
import AvatarShape from "../components/Avatar/avatarShape";
import Habilities from "@/components/Page2/Habilities";

export default function HomePage() {
  return (
    <>
      <Flex bgColor="green.1" h="900px" w="100%" position="relative">
        <Flex h="900px" bgColor="purple.1" w="70%" display="table">
          <Text
            pl="2rem"
            pt="3rem"
            fontSize={"menubar"}
            color="green.1"
            textStyle="bold"
          >
            julio cesar{" "}
          </Text>
          <Flex
            justify={"center"}
            align={"center"}
            position="absolute"
            top="0"
            left="550"
            right="0"
            bottom="0"
          >
            <AvatarShape />
          </Flex>
          <Flex ml="5rem" mt="5rem" w="27%">
            <Text fontSize="title" textStyle="bold">
              Full Stack Engineer.
            </Text>
          </Flex>
          <Flex ml="5rem" mt="5rem" w="60%">
            <Text fontSize="text1" textStyle="bold">
              I like to craft solid and scalable products with great user
              experiences.
            </Text>
          </Flex>
          <Flex ml="5rem" mt="5rem" w="30%">
            <Text fontSize="text3">
              Highly skiiled atprogressive Enhancement, design systems & UI
              Engineering.
            </Text>
            <Text fontSize="text3">
              Proven experiencebuilding successfulproducts for clients.
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Habilities />
    </>
  );
}
