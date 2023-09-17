import { Flex, Img, Text, useDisclosure } from "@chakra-ui/react";
import AvatarShape from "../components/Avatar/avatarShape";
import Habilities from "@/components/Page2/Habilities";
import Apresentation from "@/components/Page1/Apresentation";
import MenuBar from "@/components/MenuBar/menuBar";
import AboutMe from "@/components/Page3/AboutMe";

export default function HomePage() {
  return (
    <>
      <Flex
        direction="column"
        w="100vw"
        h="100vh"
        bgGradient={"linear(to-l, green.1, purple.1)"}
      >
        <Apresentation />
        <Habilities />
        <AboutMe />
      </Flex>
    </>
  );
}
