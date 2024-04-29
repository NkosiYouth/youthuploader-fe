import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  Input,
  FormErrorMessage,
  Flex,
  useToast,
} from '@chakra-ui/react';
import SupervisorService from '../../services/SupervisorService';

export default function AddSupervisorModal({ loadData }) {
  const toast = useToast();

  const [isOpen, setIsOpen] = useState(false);

  const onShowModal = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const onAddNewSupervisor = async (supervisor) => {
    try{
      await SupervisorService.create(supervisor);
      toast({
        description: "Supervisor Added!",
        status: "success",
        isClosable: true,
      });
      onClose();
      loadData && loadData();
    } catch(error){
      toast({
        description: "Something went wrong!",
        status: "error",
        isClosable: true,
      });
    }
  }

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required('First name is required'),
      last_name: Yup.string().required('Last name is required'),
      email: Yup.string().nullable().email('Invalid email address'),
      phone: Yup.string().nullable(),
    }),
    onSubmit: values => {
      onAddNewSupervisor(values);
    },
  });

  return (
    <>
      <Flex justifyContent={'flex-end'}>
        <Button onClick={onShowModal} size='xs' colorScheme='green' bgColor={'#7f8c8d'}>Add Supervisor</Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="xl">
          <ModalHeader>Add New Supervisor</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={formik.handleSubmit}>
            <ModalBody pb={6}>
              <FormControl isInvalid={formik.touched.first_name && formik.errors.first_name}>
                <Input
                  placeholder="First Name"
                  name="first_name"
                  value={formik.values.first_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  borderRadius={10}
                />
                <FormErrorMessage>{formik.errors.first_name}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.touched.last_name && formik.errors.last_name} mt={4}>
                <Input
                  placeholder="Last Name"
                  name="last_name"
                  value={formik.values.last_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  borderRadius={10}
                />
                <FormErrorMessage>{formik.errors.last_name}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.touched.email && formik.errors.email} mt={4}>
                <Input
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  borderRadius={10}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.touched.phone && formik.errors.phone} mt={4}>
                <Input
                  placeholder="Phone"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  borderRadius={10}
                />
                <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" colorScheme="green" backgroundColor={'#E44848'} color={'#fff'} borderRadius={'15px'} width={'100%'} isLoading={formik.isSubmitting}>
                Add New Supervisor
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
