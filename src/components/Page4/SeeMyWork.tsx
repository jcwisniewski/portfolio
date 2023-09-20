import { Box, Button, Flex, Text, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";
import { PiArrowRightThin } from "react-icons/pi";
import { useState } from "react";

const SeeMyWork: React.FC = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <>
      <animated.div style={props}>
        <Flex bgColor="gray.2" justify="center">
          <Flex
            mt="2rem"
            bgColor="white"
            gap="1rem"
            direction="column"
            padding={[
              "5rem 0rem 0rem 3rem",
              "5rem 0rem 0rem 3rem",
              "15rem",
              "15rem",
            ]}
          >
            <Text
              fontSize={["title3", "title"]}
              color="purple.1"
              fontWeight={"Bold"}
            >
              I Build & design stuff
            </Text>
            <Text fontSize={"1.3rem"} color="gray.1">
              You can see my work accessing below!
            </Text>
            <Flex align="center" w="full">
              <Button
                //here call function to change stage of hover
                _hover={{
                  transition: "width 0.5s",
                  width: "full",
                  bgColor: "purple.1",
                  color: "white",
                }}
                border="1px"
                borderColor={"purple.1"}
                fontSize={"1.3rem"}
                height="3rem"
                width="70%"
                bg="white"
              >
                See my work <PiArrowRightThin />
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </animated.div>
    </>
  );
};

export default SeeMyWork;
