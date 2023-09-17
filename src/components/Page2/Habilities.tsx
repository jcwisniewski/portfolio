import { Flex, Text } from "@chakra-ui/react";

export default function Habilities() {
  return (
    <Flex
      mt={["20rem", "9rem", "7.5rem", "7.5rem"]}
      bgColor={"white"}
      direction={["column", "column", "row", "row"]}
    >
      <Flex
        p={["3rem", "4rem", "8rem", "9rem"]}
        justify="center"
        display="block"
        w={["full", "full", "50%", "50%"]}
      >
        <Text color="purple.1" fontSize="title" fontWeight="bold">
          Design
        </Text>
        <Text color="gray.1" fontSize="text1" fontWeight="bold">
          Im probably not the typical designer positioned behind an Illustrator
          artboard adjusting pixels, but I design. Immersed in stylesheets
          tweaking font sizes and contemplating layouts is where youll find me.
          Im committed to creating fluent user experiences while staying
          fashionable.
        </Text>
      </Flex>
      <Flex
        p={["3rem", "4rem", "18rem 5rem 1rem 8rem", "18rem 5rem 1rem 8rem"]}
        w={["full", "full", "50%", "50%"]}
        direction={"column"}
      >
        <Text color="purple.1" fontSize="title" fontWeight="bold">
          Engineering
        </Text>
        <Text color="gray.1" fontSize="text1" fontWeight="bold">
          In building JavaScript applications, Im equipped with just the right
          tools, and can absolutely function independently of them to deliver
          fast, resilient solutions optimized for scale — performance and
          scalabilty are priorities on my radar.
        </Text>
      </Flex>
    </Flex>

    // <Flex w={"full"} h="full">
    //   <Flex
    //     ml="10rem"
    //     mt="10rem"
    //     bgColor="white"
    //     w="40%"
    //     flexDirection={"column"}
    //   >
    //     <Text color="purple.1" fontSize="title" fontWeight="bold">
    //       Design
    //     </Text>
    //     <Text color="gray.1" fontSize="subtitle" fontWeight="bold">
    //       Im probably not the typical designer positioned behind an Illustrator
    //       artboard adjusting pixels, but I design. Immersed in stylesheets
    //       tweaking font sizes and contemplating layouts is where youll find me.
    //       Im committed to creating fluent user experiences while staying
    //       fashionable.
    //     </Text>
    //   </Flex>
    //   <Flex
    //     justify={"center"}
    //     align="start"
    //     bgColor="white"
    //     color="purple.1"
    //     w="40%"
    //     h="100%"
    //     flexDirection={"column"}
    //   >
    //     <Text fontSize="title" fontWeight="bold">
    //       Engineer
    //     </Text>
    //     <Text color="gray.1" fontSize="subtitle" fontWeight="bold">
    //       Im probably not the typical designer positioned behind an Illustrator
    //       artboard adjusting pixels, but I design. Immersed in stylesheets
    //       tweaking font sizes and contemplating layouts is where youll find me.
    //       Im committed to creating fluent user experiences while staying
    //       fashionable.
    //     </Text>
    //   </Flex>
    // </Flex>
  );
}
