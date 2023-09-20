import {
  Box,
  Button,
  Flex,
  Input,
  Link,
  Stack,
  Text,
  Textarea,
  keyframes,
  useOutsideClick,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";
import { PiArrowRightThin } from "react-icons/pi";
import { useEffect, useState } from "react";
import React from "react";
import { useRouter } from "next/router";

const SendMeAMessage: React.FC = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  const ref = React.useRef<any>();
  const ref2 = React.useRef<any>();
  const ref3 = React.useRef<any>();

  const [colorText, setColorText] = useState<string>("gray.1");
  const [colorTextMail, setColorTextMail] = useState<string>("gray.1");
  const [colorTextArea, setColorTextArea] = useState<string>("gray.1");
  const [opacity, setOpacity] = useState<string>("50%");
  const [opacityEmail, setOpacityEmail] = useState<string>("50%");
  const [opacityTextArea, setOpacityTextArea] = useState<string>("50%");
  const [name, setName] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [text, setText] = useState<string>("");

  useOutsideClick({
    ref: ref,
    handler: () => {
      setOpacity("50%");
      setColorText("gray.1");
    },
  });
  useOutsideClick({
    ref: ref2,
    handler: () => {
      setOpacityEmail("50%");
      setColorTextMail("gray.1");
    },
  });
  useOutsideClick({
    ref: ref3,
    handler: () => {
      setOpacityTextArea("50%");
      setColorTextArea("gray.1");
    },
  });

  return (
    <>
      <animated.div style={props}>
        <Flex bgColor="gray.2" justify="center">
          <Flex
            gap="1rem"
            direction="column"
            padding={[
              "5rem 2rem 5rem 3rem",
              "5rem 0rem 5rem 3rem",
              "15rem",
              "15rem",
            ]}
          >
            <Text
              fontSize={["title3", "title"]}
              color="purple.1"
              fontWeight={"Bold"}
            >
              Send me a message!
            </Text>
            <Text fontSize={"1.3rem"} color="gray.1">
              Got a question or proposal, or just want to say hello? Go ahead.
            </Text>

            <Flex w="full" direction="row" display={"inline"} align="center">
              <Stack spacing={8}>
                <Flex gap="2rem">
                  <Flex direction={"column"}>
                    <Text opacity={opacity} color={colorText}>
                      Your name
                    </Text>
                    <Input
                      type="text"
                      ref={ref}
                      onClick={() => {
                        setColorText("purple.1");
                        setOpacity("100%");
                      }}
                      focusBorderColor="purple.1"
                      color="black"
                      variant="flushed"
                      onChange={(e) => setName(e.currentTarget.value)}
                    />
                  </Flex>
                  <Flex direction={"column"}>
                    <Text opacity={opacityEmail} color={colorTextMail}>
                      Your e-mail
                    </Text>
                    <Input
                      type="email"
                      ref={ref2}
                      onClick={() => {
                        setColorTextMail("purple.1");
                        setOpacityEmail("100%");
                      }}
                      focusBorderColor="purple.1"
                      color="black"
                      variant="flushed"
                      onChange={(e) => setMail(e.currentTarget.value)}
                    />
                  </Flex>
                </Flex>

                <Text opacity={opacityTextArea} color={colorTextArea}>
                  Your doubt, propose or ask! =)
                </Text>
                <Textarea
                  ref={ref3}
                  onClick={() => {
                    setColorTextArea("purple.1");
                    setOpacityTextArea("100%");
                  }}
                  focusBorderColor="purple.1"
                  color="black"
                  variant="flushed"
                  placeholder=""
                  onChange={(e) => setText(e.currentTarget.value)}
                />
                <Button
                  //here call function to change stage of hover
                  as={Link}
                  href={`https://wa.me/5541995915693?text=Im+${name}.${text}.My+mail+is+${mail}`}
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
                  target="_blank"
                >
                  Send <PiArrowRightThin />
                </Button>
              </Stack>
            </Flex>
          </Flex>
        </Flex>
      </animated.div>
    </>
  );
};

export default SendMeAMessage;
