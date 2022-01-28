import React from "react";
import { Box, Text, Select } from "@chakra-ui/react";

const Dropdown = () => {
    return(
        <Box display={'flex'} color={'white'} justifyContent={'space-between'} w={'250px'} p={'10px'} bgColor={'#2D2C3F'} borderRadius={'20px'}>
                <Text>Focus Time: </Text>
                <Select variant={'unstyled'} color={'brand.700'} w={'100px'}>
                    <option>25 min</option>
                    <option>25 min</option>
                    <option>25 min</option>
                </Select>
            </Box>
    )
}


export default Dropdown;