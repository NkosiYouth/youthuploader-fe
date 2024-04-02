import React, { useState } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Textarea,
} from "@chakra-ui/react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function CInput({
  label,
  type = "text",
  labelProps,
  touched,
  errors,
  ...inputProps
}) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  return (
    <FormControl isInvalid={errors && touched}>
      <FormLabel fontWeight="semibold" {...labelProps}>
        {label}
      </FormLabel>
      {type === "textarea" ? (
        <Textarea
          bg="white"
          borderRadius="xl"
          focusBorderColor="gray.300"
          {...inputProps}
        />
      ) : type === "password" ? (
        <InputGroup>
          <Input
            pr="3rem"
            type={show ? "text" : "password"}
            bg="white"
            borderRadius="xl"
            focusBorderColor="gray.300"
            {...inputProps}
          />
          <InputRightElement width="3rem">
            <IconButton
              color={show ? "green" : "gray"}
              bgColor="transparent"
              fontSize="24px"
              icon={show ? <AiFillEyeInvisible /> : <AiFillEye />}
              onClick={handleShow}
            />
          </InputRightElement>
        </InputGroup>
      ) : type === "number" ? (
        <NumberInput
          bg="white"
          borderRadius="xl"
          focusBorderColor="gray.300"
          {...inputProps}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      ) : (
        <Input
          type={type}
          bg="white"
          borderRadius="xl"
          focusBorderColor="gray.300"
          {...inputProps}
        />
      )}
      {errors && touched && <FormErrorMessage>{errors}</FormErrorMessage>}
    </FormControl>
  );
}
