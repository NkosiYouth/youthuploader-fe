import { Box, Heading } from "@chakra-ui/react";

export default function Topbar() {
  return (
    <Box
      ps={{ base: 16, lg: 8 }}
      pe={8}
      py={{ base: 4, lg: 8 }}
      borderBottomWidth={1}
    >
      <Heading as="h2" fontWeight="semibold">
        Youth Uploader
      </Heading>
    </Box>
  );
}
