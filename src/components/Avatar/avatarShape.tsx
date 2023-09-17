import { Flex, Img } from "@chakra-ui/react";
import image from "../../../public/img/photo_of_julio.png";

export default function AvatarShape() {
  return (
    <Flex w={"461px"} h={"367px"}>
      <Img src="/avatarShape.svg" />
    </Flex>
  );
}
