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
            As a Systems Analyst/ Product Manager, my role is to support
            projects and delegate tasks to my team. I work with technologies
            like Git, Notion , AWS, Azure Devops, SQL, NoSQL, LSP in the Senior
            system, G5 technology in the Senior system, API in Node.js and C#,
            report development in the Senior system, data importers and
            exporters, and Pentaho ETL.
          </Text>
          <Text
            color="white"
            mt="1.5rem"
            fontWeight={"Semibold"}
            fontSize="1.3rem"
          >
            I analyze data, customize solutions, develop APIs, create reports,
            and ensure smooth data integration. I lead the team, assign tasks,
            and ensure project success.I currently work in the group of tire
            sellers such Pneufree.com, RS Pneus and Pneuzão
          </Text>
        </Flex>

        <Img src="/iconThinking.svg" />
      </Flex>
    </>
  );
};

export default AboutMe;
