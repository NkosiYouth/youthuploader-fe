import { Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import ProfileItemModal from "./ProfileItemModal";

export default function ProfileItem({ item, isValidated = false, onSelectProfile }) {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      py={3}
      px={4}
      rounded="xl"
      bgColor={isValidated ? "green.50" : "red.50"}
    >
      <Text
        ps={2}
        borderLeftWidth={4}
        borderColor={isValidated ? "green" : "red"}
      >
        {item.first_name} {item.last_name} - {item._id}
      </Text>
      <Button
        size="sm"
        colorScheme={isValidated ? "green" : "red"}
        rounded="full"
        border={0}
        _focus={{ outline: 0 }}
        onClick={() => onSelectProfile(item)}
      >
        {isValidated ? "View Profile" : "Validate Profile"}
      </Button>
    </Flex>
  );
}
