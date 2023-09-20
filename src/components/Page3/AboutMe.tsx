import {
  Button,
  Flex,
  Img,
  Link,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";

const AboutMe: React.FC = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  return (
    <>
      <Flex
        p="2rem"
        mt="2rem"
        bgColor={"purple.1"}
        display={"flex"}
        direction={["column", "column", "row", "row"]}
        justifyContent={"space-around"}
      >
        <Flex direction="column" w={["full", "full", "50%", "50%"]}>
          <Text fontWeight={"Bold"} fontSize="title">
            Over the years,
          </Text>
          <Text
            mt="2rem"
            color="white"
            fontWeight={"Semibold"}
            fontSize="1.3rem"
          >
            I have worn many hats as a Systems Analyst and Product Manager. My
            role revolves around project support and efficient task delegation
            to my team. My toolkit includes a wide range of technologies such as
            Git, Notion, AWS, Azure DevOps, SQL, NoSQL, LSP in the Senior
            system, G5 technology in the Senior system, Node.js and C# APIs,
            report development within the Senior system, data import and export
            processes, as well as Pentaho ETL.
          </Text>
          <Text
            color="white"
            mt="1.5rem"
            fontWeight={"Semibold"}
            fontSize="1.3rem"
          >
            My responsibilities span across data analysis, customized solutions,
            API development, report generation, and ensuring seamless data
            integration. I take the lead in team management, task assignment,
            and ensuring the successful execution of projects. Currently, I am
            actively involved with tire retailers such as Pneufree.com, RS
            Pneus, and Pneuzão.
          </Text>
          <Text
            color="white"
            mt="1.5rem"
            fontWeight={"Semibold"}
            fontSize="1.3rem"
          >
            Beyond my managerial roles, Im a dedicated developer committed to
            delivering tailor-made, high-quality solutions that cater to your
            unique requirements. Whether you need customized software
            development, API integration, or advanced report generation, I
            possess the expertise to turn your concepts into reality.
          </Text>
        </Flex>
        <Img src="/iconThinking.svg" />
      </Flex>
    </>
  );
};

export default AboutMe;
