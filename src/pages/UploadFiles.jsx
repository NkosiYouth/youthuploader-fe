import { Box, Button, FormLabel, Stack, Text, useToast } from "@chakra-ui/react";
import { LoadingModal, PDFInput, SelectedFilesList } from "../components";
import { useEffect, useState } from "react";
import FilesService from '../services/FilesService';
import Select from "react-select";
import cohort from "../data/cohort";

export default function UploadFiles() {
  const toast = useToast();

  const cohort_options = cohort.map((c) => ({ label: c, value: c }));

  const [files, setFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [selectedCohort, setSelectedCohort] = useState(undefined);

  const onUpload = async () => {
    try {
      setIsSubmitting(true);
      let result = await FilesService.postFiles({
        files: files,
        data: {
          cohort: selectedCohort.value
        }
      });
      toast({
        description: "Files Uploaded!",
        status: "success",
        isClosable: true,
      });
      setFiles([]);
      setIsSubmitting(false);
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
      toast({
        description: "Something went wrong!",
        status: "error",
        isClosable: true,
      }); n
    }
  };

  const onRemoveFile = (index) => {
    let temp = [...files];
    temp.splice(index, 1);
    setFiles(temp);
  };

  const handleCohortChange = (option) => {
    setSelectedCohort(option);
  }

  useEffect(() => {
    setSelectedCohort(cohort_options[0])
  }, []);

  return (
    <>
      <Stack gap={6} width={{ base: "100%", lg: "50%" }}>
        <Text fontSize="xl" fontWeight="semibold">
          Select Files To Upload
        </Text>
        <PDFInput value={files} setValue={setFiles} />
        <Box>
          <FormLabel>Select Cohort</FormLabel>
          <Select options={cohort_options} value={selectedCohort} onChange={handleCohortChange} />
        </Box>
        <Button
          rounded="xl"
          colorScheme="red"
          p={6}
          border={0}
          _focus={{ outline: 0 }}
          isDisabled={files.length < 1}
          isLoading={isSubmitting}
          loadingText="Uploading..."
          onClick={onUpload}
        >
          Upload Now
        </Button>

        <SelectedFilesList
          files={files}
          onRemoveFile={onRemoveFile}
          isSubmitting={isSubmitting}
        />
      </Stack>
    </>
  );
}
