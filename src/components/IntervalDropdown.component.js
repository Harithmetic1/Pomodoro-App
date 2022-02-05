import React from "react";
import { Box, Text, Select } from "@chakra-ui/react";

const IntervalDropdown = ({ name }) => {
    const dropdownValues = () => {
        let numbArray = []
        for(let i = 0; i <= 60; i += 5){
            numbArray.push(i)
        }
        return numbArray
    }
    let optionsArray = dropdownValues()
    return(
        <Box display={'flex'} color={'white'} justifyContent={'space-between'} w={'250px'} p={'10px'} bgColor={'#2D2C3F'} borderRadius={'20px'}>
                <Text>{name}: </Text>
                <Select variant={'unstyled'} color={'brand.700'} w={'100px'}>
                {
                    optionsArray.map((option) => {
                        return (
                        <option key={option}>{option} mins</option>
                    )
                    }
                    )
                }
                </Select>
            </Box>
    )
}


export default IntervalDropdown;