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
  Select,
} from '@chakra-ui/react';
import HostAddressService from '../../services/HostAddressService';

export default function AddHostAddressModal({ hostOptions, loadData }) {
  const toast = useToast();

  const [isOpen, setIsOpen] = useState(false);

  const onShowModal = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const onAddNewHostAddress = async (hostAddress) => {
    try {
      await HostAddressService.create(hostAddress);
      toast({
        description: "Host Address Added!",
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
      host: '',
      host_address: '',
    },
    validationSchema: Yup.object({
      host: Yup.string().required('Host is required'),
      host_address: Yup.string().required('Host address is required'),
    }),
    onSubmit: values => {
      onAddNewHostAddress(values);
    },
  });

  return (
    <>
      <Flex justifyContent={'flex-end'}>
        <Button onClick={onShowModal} size='sm' colorScheme='green'>Add Host Address</Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="xl">
          <ModalHeader>Add New Host Address</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={formik.handleSubmit}>
            <ModalBody pb={6}>
              <FormControl isInvalid={formik.touched.host && formik.errors.host} mb={4}>
                <Select
                  placeholder="Select Host"
                  name="host"
                  value={formik.values.host}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  borderRadius={10}
                >
                  {hostOptions.map(host => (
                    <option key={host.value} value={host._id}>{host.label}</option>
                  ))}
                </Select>
                <FormErrorMessage>{formik.errors.host}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.touched.host_address && formik.errors.host_address}>
                <Input
                  placeholder="Host Address"
                  name="host_address"
                  value={formik.values.host_address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  borderRadius={10}
                />
                <FormErrorMessage>{formik.errors.host_address}</FormErrorMessage>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" colorScheme="green" backgroundColor={'#E44848'} color={'#fff'} borderRadius={'15px'} width={'100%'} isLoading={formik.isSubmitting}>
                Add New Host Address
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
