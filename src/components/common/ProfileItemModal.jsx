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

export default function ProfileItemModal({
  data,
  isOpen,
  onClose,
  isValidated = false,
  onSave
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onHandleSubmit = async (values) => {
    const obj = { ...values };
    delete obj._id;
    onSave && onSave(values._id, obj);
  };

  const formik = useFormik({
    initialValues: {
      cohort: "",
      title: "",
      first_name: "",
      last_name: "",
      rsa_id_number: "",
      mobile_number: "",
      email: "",
      gender: "",
      disabled: "",
      race: "",
      residential_address: "",
      tax_number: "",
      bank_account_number: "",
      bank_account_type: "",
      bank_branch_code: "",
      start_date: "",
      end_date: "",
      supervisor_name: "",
      host_name: "",
      host_site: "",
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
                  <CSelect options={cohort_options}
                    label="Title"
                    placeholder="Cohort"
                    name="cohort"
                    value={formik.values.cohort}
                    onChange={(val) => formik.setFieldValue('cohort', val)}
                    touched={formik.touched.cohort}
                    errors={formik.errors.cohort} />

                  <CInput
                    label="Title"
                    placeholder="Title"
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    touched={formik.touched.title}
                    errors={formik.errors.title}
                  />
                  <CInput
                    label="First Name"
                    placeholder="First Name"
                    name="first_name"
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    touched={formik.touched.first_name}
                    errors={formik.errors.first_name}
                  />
                  <CInput
                    label="Last Name"
                    placeholder="Last Name"
                    name="last_name"
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                    touched={formik.touched.last_name}
                    errors={formik.errors.last_name}
                  />
                  <CInput
                    label="RSA ID Number"
                    placeholder="RSA ID Number"
                    name="rsa_id_number"
                    value={formik.values.rsa_id_number}
                    onChange={formik.handleChange}
                    touched={formik.touched.rsa_id_number}
                    errors={formik.errors.rsa_id_number}
                  />
                  <CInput
                    label="Mobile Number"
                    placeholder="Mobile Number"
                    name="mobile_number"
                    value={formik.values.mobile_number}
                    onChange={formik.handleChange}
                    touched={formik.touched.mobile_number}
                    errors={formik.errors.mobile_number}
                  />
                  <CInput
                    label="Email Address"
                    placeholder="Email Address"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    touched={formik.touched.email}
                    errors={formik.errors.email}
                  />
                  <CInput
                    label="Gender"
                    placeholder="Gender"
                    name="gender"
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                    touched={formik.touched.gender}
                    errors={formik.errors.gender}
                  />
                  <CInput
                    label="Disabled"
                    placeholder="Disabled"
                    name="disabled"
                    value={formik.values.disabled}
                    onChange={formik.handleChange}
                    touched={formik.touched.disabled}
                    errors={formik.errors.disabled}
                  />
                  <CInput
                    label="Race"
                    placeholder="Race"
                    name="race"
                    value={formik.values.race}
                    onChange={formik.handleChange}
                    touched={formik.touched.race}
                    errors={formik.errors.race}
                  />
                  <CInput
                    label="Residential Address"
                    placeholder="Residential Address"
                    name="residential_address"
                    value={formik.values.residential_address}
                    onChange={formik.handleChange}
                    touched={formik.touched.residential_address}
                    errors={formik.errors.residential_address}
                  />
                  <CInput
                    label="Tax Number"
                    placeholder="Tax Number"
                    name="tax_number"
                    value={formik.values.tax_number}
                    onChange={formik.handleChange}
                    touched={formik.touched.tax_number}
                    errors={formik.errors.tax_number}
                  />
                  <CInput
                    label="Bank Account Number"
                    placeholder="Bank Account Number"
                    name="bank_account_number"
                    value={formik.values.bank_account_number}
                    onChange={formik.handleChange}
                    touched={formik.touched.bank_account_number}
                    errors={formik.errors.bank_account_number}
                  />
                  <CInput
                    label="Bank Account Type"
                    placeholder="Bank Account Type"
                    name="bank_account_type"
                    value={formik.values.bank_account_type}
                    onChange={formik.handleChange}
                    touched={formik.touched.bank_account_type}
                    errors={formik.errors.bank_account_type}
                  />
                  <CInput
                    label="Bank Branch Code"
                    placeholder="Bank Branch Code"
                    name="bank_branch_code"
                    value={formik.values.bank_branch_code}
                    onChange={formik.handleChange}
                    touched={formik.touched.bank_branch_code}
                    errors={formik.errors.bank_branch_code}
                  />
                  {/* New Fields */}
                  <CInput
                    label="Start Date"
                    type="date"
                    placeholder=""
                    name="start_date"
                    value={formik.values.start_date}
                    onChange={formik.handleChange}
                    touched={formik.touched.start_date}
                    errors={formik.errors.start_date}
                  />

                  <CInput
                    label="End Date"
                    type="date"
                    placeholder=""
                    name="end_date"
                    value={formik.values.end_date}
                    onChange={formik.handleChange}
                    touched={formik.touched.end_date}
                    errors={formik.errors.end_date}
                  />

                  {/* Supervisor Name */}
                  <CSelect options={cohort_options}
                    label="Supervisor"
                    placeholder="Supervisor"
                    name="supervisor_name"
                    value={formik.values.supervisor_name}
                    onChange={(val) => formik.setFieldValue('supervisor_name', val)}
                    touched={formik.touched.supervisor_name}
                    errors={formik.errors.supervisor_name} />

                  {/* Host Name */}
                  <CSelect options={cohort_options}
                    label="Host (Implementation Partner)"
                    placeholder="Host"
                    name="host_name"
                    value={formik.values.host_name}
                    onChange={(val) => formik.setFieldValue('host_name', val)}
                    touched={formik.touched.host_name}
                    errors={formik.errors.host_name} />

                  {/* Host Site */}
                  <CSelect options={host_site_options}
                    label="Host Site"
                    placeholder="Host Site"
                    name="host_site"
                    value={formik.values.host_site}
                    onChange={(val) => formik.setFieldValue('host_site', val)}
                    touched={formik.touched.host_site}
                    errors={formik.errors.host_site} />

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
                {data && data.files && data?.files.map((item, i) => {
                  return (
                    <Box key={i}>
                      <Text>{item.name}</Text>
                      <Box borderBottomWidth={1}>
                        <PreviewPDF link={item.link} />
                      </Box>
                    </Box>
                  );
                })}
              </Stack>
            </Stack>
          </SimpleGrid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
