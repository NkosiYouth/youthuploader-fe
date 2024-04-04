import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import PreviewPDF from "./PreviewPDF";
import { useFormik } from "formik";
import { CInput, CSelect } from "./inputs";
import { profileSchema } from "../../utils/schema";
import { cohort_options } from "../../data/cohort";
import { supervisor_name_options } from "../../data/supervisor";
import { host_site_options } from "../../data/host_site";

const schemaKeys = [
  "cohort",
  "title",
  "first_name",
  "last_name",
  "rsa_id_number",
  "mobile_number",
  "email",
  "gender",
  "disabled",
  "race",
  "residential_address",
  "tax_number",
  "bank_account_number",
  "bank_account_type",
  "bank_branch_code",
  "monthly_salary",
  "start_date",
  "end_date",
  "supervisor_name",
  "host_name",
  "host_site",
  // "isValidated"
];

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function ProfileItemModal({
  data,
  isOpen,
  onClose,
  isValidated = false,
  onSave
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const onHandleSubmit = async (values) => {
    setIsSubmitting(true);
    try {
      // await schema.validate(values, { abortEarly: false });
      console.log(values);
      const {_id, files, ...valuesToUpdate} = values;
      onSave && onSave(data._id, valuesToUpdate);
    } catch (error) {
      toast({
        title: "Validation Error",
        description: error.errors.join("\n"),
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      ...Object.fromEntries(schemaKeys.map(key => [key, ""])),
      ...data // Overwrite with passed data
    },
    validationSchema: profileSchema,
    onSubmit: onHandleSubmit,
  });

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="full"
      scrollBehavior="inside"
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton border={0} _focus={{ outline: 0 }} />
        <ModalBody>
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6}>
            <Stack>
              <Text fontWeight="semibold" fontSize="2xl">
                Youth Data
              </Text>
              <form onSubmit={formik.handleSubmit}>
                <Stack height="90vh" overflowY="auto" pe={4}>
                  {schemaKeys.map((key) => {
                    if(key === 'isValidated') return null;
                    return <CInput
                      key={key}
                      type={key === 'start_date' || key === 'end_date' ? 'date' : 'text'}
                      label={capitalizeFirstLetter(key.replace(/_/g, " "))}
                      placeholder={capitalizeFirstLetter(key.replace(/_/g, " "))}
                      name={key}
                      value={formik.values[key]}
                      onChange={formik.handleChange}
                      touched={formik.touched[key]}
                      errors={formik.errors[key]}
                    />
                  })}
                  {!isValidated ? (
                    <Button
                      type="submit"
                      colorScheme="green"
                      p={6}
                      border={0}
                      rounded="xl"
                      _focus={{ outline: 0 }}
                      isLoading={isSubmitting}
                      loadingText="Validating..."
                    >
                      Confirm & Verify
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      colorScheme="green"
                      p={6}
                      border={0}
                      rounded="xl"
                      _focus={{ outline: 0 }}
                      isLoading={isSubmitting}
                      loadingText="Saving..."
                    >
                      Save
                    </Button>
                  )}
                </Stack>
              </form>
            </Stack>
            <Stack>
              <Text fontWeight="semibold" fontSize="2xl">
                PDF Files Uploaded
              </Text>
              <Stack height="90vh" overflowY="auto">
                {data && data.files && data.files.map((item, i) => (
                  <Box key={i}>
                    <Box borderBottomWidth={1}>
                      <PreviewPDF link={item} />
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </SimpleGrid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
