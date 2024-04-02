import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import NavMenu from "./NavMenu";
import { HiOutlineMenu } from "react-icons/hi";

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Stack
        px={8}
        pt={32}
        w="280px"
        borderRightWidth={1}
        display={{ base: "none", lg: "block" }}
      >
        <NavMenu />
      </Stack>
      <IconButton
        icon={<HiOutlineMenu style={{ marginInlineStart: "12px" }} />}
        aria-label="menu-button"
        position="absolute"
        display={{ base: "auto", lg: "none" }}
        ms={3}
        mt={4}
        _focus={{ outlineWidth: 0 }}
        onClick={onOpen}
      />
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton _focus={{ outlineWidth: 0 }} />
          <DrawerBody pt={14}>
            <NavMenu />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
