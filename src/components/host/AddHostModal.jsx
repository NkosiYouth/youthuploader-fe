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
import HostService from '../../services/HostService';

export default function AddHostModal({ loadData }) {
  const toast = useToast();

  const [isOpen, setIsOpen] = useState(false);

  const onShowModal = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const onAddNewHost = async (host) => {
    try {
      await HostService.create(host);
      toast({
        description: "Host Added!",
        status: "success",
        isClosable: true,
      });
      onClose();
      loadData && loadData();
    } catch (error) {
      toast({
        description: "Something went wrong!",
        status: "error",
        isClosable: true,
      });
    }
  }

  const formik = useFormik({
    initialValues: {
      host_name: '',
    },
    validationSchema: Yup.object({
      host_name: Yup.string().required('Host name is required'),
    }),
    onSubmit: values => {
      onAddNewHost(values);
    },
  });

  return (
    <>
      <Flex justifyContent={'flex-end'}>
        <Button onClick={onShowModal} size='sm' colorScheme='green'>Add Host</Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="xl">
          <ModalHeader>Add New Host</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={formik.handleSubmit}>
            <ModalBody pb={6}>
              <FormControl isInvalid={formik.touched.host_name && formik.errors.host_name}>
                <Input
                  placeholder="Host Name"
                  name="host_name"
                  value={formik.values.host_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  borderRadius={10}
                />
                <FormErrorMessage>{formik.errors.host_name}</FormErrorMessage>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" colorScheme="green" backgroundColor={'#E44848'} color={'#fff'} borderRadius={'15px'} width={'100%'} isLoading={formik.isSubmitting}>
                Add New Host
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
