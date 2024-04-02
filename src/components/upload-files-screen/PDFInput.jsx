import { Button, useToast } from "@chakra-ui/react";
import { useRef } from "react";
import { HiOutlineUpload } from "react-icons/hi";

export default function PDFInput({ value, setValue }) {
  const inputRef = useRef(null);
  const toast = useToast();
  const validFileExtensions = { file: ["pdf"] };

  function isValidFileType(fileName, fileType) {
    return (
      fileName &&
      validFileExtensions[fileType].indexOf(fileName.split(".").pop()) > -1
    );
  }

  const onFileSelected = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      let files = Array.from(e.target.files);
      if (files.every((obj) => isValidFileType(obj.name, "file"))) {
        setValue([...value, ...files]);
      } else {
        toast({
          description: "Only pdf files are allowed!",
          status: "error",
          isClosable: true,
        });
      }
    }
  };

  return (
    <>
      <Button
        leftIcon={<HiOutlineUpload />}
        width="fit-content"
        rounded="full"
        backgroundColor="red.100"
        color="red.500"
        border={0}
        _hover={{ backgroundColor: "red.100" }}
        _focus={{ outline: 0 }}
        onClick={() => inputRef.current.click()}
      >
        Select PDF Files
      </Button>
      <input
        ref={inputRef}
        type="file"
        accept="application/pdf"
        onChange={onFileSelected}
        style={{ display: "none" }}
        multiple
      />
    </>
  );
}
