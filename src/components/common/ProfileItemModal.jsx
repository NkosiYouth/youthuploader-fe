import {
  Box,
  Button,
  Flex,
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
import { useEffect, useState } from "react";
import PreviewPDF from "./PreviewPDF";
import { useFormik } from "formik";
import { CInput, CSelect } from "./inputs";
import { profileSchema } from "../../utils/schema";
import { cohort_options } from "../../data/cohort";
import { supervisor_name_options } from "../../data/supervisor";
import { host_site_options } from "../../data/host_site";
import AddSupervisorModal from "../supervisor/AddSupervisorModal";
import AddHostModal from '../host/AddHostModal';
import SupervisorService from "../../services/SupervisorService";
import HostService from "../../services/HostService";
import HostAddressService from "../../services/HostAddressService";
import AddHostAddressModal from "../host/AddHostAddressModal";

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
  "next_of_kin_name",
  "next_of_kin_relationship",
  "next_of_kin_mobile_no",
  "work_experience_title",
  "monthly_salary",
  "start_date",
  "end_date",
  "supervisor",
  "host",
  "host_address",
  // "isValidated"
];

const dropdownOptions = {
  title: ["Mr", "Ms", "Mrs", "Miss", "Dr"],
  gender: ["Male", "Female", "Other"],
  disabled: ["Yes", "No"],
  race: ["Asian", "African", "Indian", "White", "Coloured", "Other"],
  bank_account_type: ["Savings", "Cheque", "Credit Card"],
  bank_branch_code: ["632005", "250655", "051001", "198765", "470010", "678910", "679000", "430000"],
  supervisor: [],
  host: [],
  host_address: []
};

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

  const [isUpdated, setIsUpdated] = useState(false);
  const [supervisoOptions, setSupervisorOptions] = useState([]);
  const [hostOptions, setHostOptions] = useState([]);
  const [hostAddresses, setHostAddresses] = useState([]);
  const [hostAddressOptions, setHostAddressOptions] = useState([]);

  const onHandleSubmit = async (values) => {
    console.log(values);
    return;
    setIsSubmitting(true);
    try {
      // Convert "Yes" or "No" to true or false for MongoDB
      const valuesToUpdate = { ...values, disabled: values.disabled === "Yes" ? true : false };
      console.log(valuesToUpdate);
      const { _id, files, ...valuesToSave } = valuesToUpdate;
      //Check if the data is validated
      let dataIsValidated = isValidated;
      let isUpdatedAndVerified = false;
      if (isValidated) {

      }
      onSave && onSave(data._id, valuesToSave, dataIsValidated, isUpdatedAndVerified);
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


  const fetchSupervisors = async () => {
    try {
      let data = await SupervisorService.getAll();
      data = data.data;
      console.log('㊙️ DATA:', data);
      let options = data.map((item) => ({ label: `${item.first_name} ${item.last_name}`, value: item._id }))
      setSupervisorOptions(options);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchHosts = async () => {
    try {
      let data = await HostService.getAll();
      data = data.data;
      console.log('㊙️ DATA:', data);
      let options = data.map((item) => ({ label: item.host_name, value: item._id }))
      setHostOptions(options);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchHostAddresses = async () => {
    try {
      let data = await HostAddressService.getAll();
      data = data.data;
      console.log('㊙️ DATA:', data);
      let options = data.map((item) => ({ label: item.host_address, value: item._id }));
      setHostAddresses(options);
      setHostAddressOptions(options);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchSupervisors();
    fetchHosts();
    fetchHostAddresses();
  }, []);

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
                  {schemaKeys.map((key, index) => {
                    if (key === 'isValidated') return null;
                    let options;
                    if (key === 'supervisor') options = supervisoOptions;
                    else if (key === 'host') options = hostOptions;
                    else if (key === 'host_address') options = hostAddressOptions;
                    else options = dropdownOptions[key]?.map(option => ({ value: option, label: option })) || [];

                    if (dropdownOptions.hasOwnProperty(key)) {
                      return (
                        <>
                          <CSelect
                            key={index}
                            label={capitalizeFirstLetter(key.replace(/_/g, " "))}
                            name={key}
                            value={formik.values[key]}
                            onChange={(selectedOption) => formik.setFieldValue(key, selectedOption)}
                            options={options}
                            touched={formik.touched[key]}
                            errors={formik.errors[key]}
                            afterLabel={
                              <>
                                {key === 'supervisor' && <AddSupervisorModal loadData={fetchSupervisors} />}
                                {key === 'host' && <AddHostModal loadData={fetchHosts} />}
                                {key === 'host_address' && <AddHostAddressModal hostOptions={hostOptions} loadData={fetchHostAddresses} />}
                              </>
                            }
                          />
                        </>
                      );
                    } else {
                      return (
                        <CInput
                          key={index}
                          type={key === 'start_date' || key === 'end_date' ? 'date' : 'text'}
                          label={capitalizeFirstLetter(key.replace(/_/g, " "))}
                          placeholder={capitalizeFirstLetter(key.replace(/_/g, " "))}
                          name={key}
                          value={formik.values[key]}
                          onChange={formik.handleChange}
                          touched={formik.touched[key]}
                          errors={formik.errors[key]}
                        />
                      );
                    }
                  })}
                  {!isValidated ? (
                    <Flex justifyContent={'space-between'} gap={2}>
                      <Button
                        type="submit"
                        colorScheme="green"
                        backgroundColor={'#C98E58'}
                        onClick={() => setIsUpdated(true)}
                        color={'#fff'}
                        p={6}
                        border={0}
                        rounded="xl"
                        _focus={{ outline: 0 }}
                        isLoading={isSubmitting}
                        loadingText="Validating..."
                        width={'100%'}
                      >
                        Save Updates
                      </Button>
                      <Button
                        type="submit"
                        colorScheme="green"
                        p={6}
                        border={0}
                        rounded="xl"
                        _focus={{ outline: 0 }}
                        isLoading={isSubmitting}
                        loadingText="Validating..."
                        width={'100%'}
                      >
                        Confirm & Verify
                      </Button>
                    </Flex>
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
