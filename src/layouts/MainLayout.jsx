import Topbar from "./partials/Topbar";
import Sidebar from "./partials/Sidebar";
import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

export default function MainLayout() {
  return (
    <Flex height={"100vh"}>
      <Sidebar />
      <Box width={{ base: "100vw", lg: "calc(100vw - 280px)" }} height={"100%"}>
        <Topbar />
        <Box p={8} height={{ base: "90%", lg: "84%" }} overflowY="auto">
          <Outlet />
        </Box>
      </Box>
    </Flex>
  );
}
