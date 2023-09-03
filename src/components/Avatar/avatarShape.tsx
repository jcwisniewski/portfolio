import { Flex, Img } from "@chakra-ui/react";
import image from "../../../public/img/photo_of_julio.png";

export default function AvatarShape() {
  return (
    <Flex inset="250px" w="461px" h="373px">
      <Img src="/avatarShape.svg" />
    </Flex>
  );
}
