import { Heading, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Progress } from '@chakra-ui/react'
import React from 'react'

const steps = {
    1: 'Processing files!'
}

export default function LoadingModal({isOpen, step, title}) {

 const getStep = () => {
    if(steps.hasOwnProperty(step)) return steps[step];
    return 'Processing data...'
 }

  return (
    <Modal isOpen={isOpen} isCentered>
        <ModalOverlay/>
        <ModalContent>
            <ModalBody textAlign={'center'}>
                <Progress size='xs' isIndeterminate />
                <Heading fontSize={'15px'} my={'20px'}>{getStep()}</Heading>
                <Heading fontSize={'15px'} my={'20px'}>{title ?? 'Data'}</Heading>
            </ModalBody>
        </ModalContent>
    </Modal>
  )
}
