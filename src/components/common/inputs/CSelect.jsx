import { FormLabel, Stack, FormErrorMessage, HStack, Flex } from '@chakra-ui/react';
import React from 'react';
import Select from 'react-select';

export default function CSelect({ touched, errors, label, name, options=[], placeholder, value, onChange, afterLabel }) {
    const handleCohortChange = (selectedOption) => {
        if (selectedOption) {
            onChange(selectedOption.value);
        }
    };

    const getValue = () => {
        if(options.length > 0 && value){
            return options.find(option => option.value === value)
        }
        return null;
    }

    return (
        <Stack>
            <Flex justifyContent={'space-between'}>
                <FormLabel>{label}</FormLabel>
                <HStack>
                    {afterLabel && afterLabel}
                </HStack>
            </Flex>
            <Select options={options} value={getValue()} onChange={handleCohortChange} placeholder={placeholder} />
            {errors && touched && <FormErrorMessage>{errors}</FormErrorMessage>}
        </Stack>
    );
}
