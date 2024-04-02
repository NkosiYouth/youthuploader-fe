import { HStack, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { HiOutlineUpload, HiOutlineEye, HiOutlineUser } from "react-icons/hi";

export default function NavMenu() {
  const menu = [
    {
      link: "/",
      title: "Upload Files",
      icon: HiOutlineUpload,
    },
    {
      link: "/validate-profiles",
      title: "Validate Profiles",
      icon: HiOutlineEye,
    },
    {
      link: "/all-youth-data",
      title: "All Youth Data",
      icon: HiOutlineUser,
    },
  ];

  return (
    <Stack gap={3}>
      {menu.map((item, i) => {
        return (
          <Link
            key={i}
            as={NavLink}
            to={item.link}
            role="group"
            _activeLink={{
              "& > div": { backgroundColor: "gray.100" },
              "& > div svg": { color: "black" },
              "& > div p": { color: "black" },
            }}
            style={{ textDecoration: "none" }}
          >
            <HStack
              gap={3}
              py={3}
              px={4}
              rounded="xl"
              color="gray"
              _groupHover={{ color: "black" }}
            >
              <Icon as={item.icon} fontSize="xl" />
              <Text fontSize="sm">{item.title}</Text>
            </HStack>
          </Link>
        );
      })}
    </Stack>
  );
}
