import { HStack, IconButton, Stack, Text } from "@chakra-ui/react";
import { BsX } from "react-icons/bs";

export default function SelectedFilesList({
  files,
  onRemoveFile,
  isSubmitting,
}) {
  return (
    <Stack borderWidth={1} rounded="xl" gap={0}>
      <HStack justifyContent="space-between" p={3} bgColor="gray.100">
        <Text fontWeight="semibold" color="gray">
          File Name
        </Text>
        <Text fontWeight="semibold" color="gray">
          Action
        </Text>
      </HStack>
      {files.length > 0 ? (
        files.map((item, i) => {
          return (
            <HStack
              key={i}
              justifyContent="space-between"
              px={3}
              py={2}
              borderBottomWidth={i < files.length - 1 ? 1 : 0}
            >
              <Text>{item.name.split(".")[0]}</Text>
              <IconButton
                icon={<BsX />}
                rounded="xl"
                fontSize="xl"
                bgColor="red.100"
                color="red.500"
                size="sm"
                border={0}
                _focus={{ outline: 0 }}
                _hover={{ backgroundColor: "red.100" }}
                onClick={() => onRemoveFile(i)}
                isDisabled={isSubmitting}
              />
            </HStack>
          );
        })
      ) : (
        <Text p={3} textAlign="center" color="gray">
          No Files Selected
        </Text>
      )}
    </Stack>
  );
}
