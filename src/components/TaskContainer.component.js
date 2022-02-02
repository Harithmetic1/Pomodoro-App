import React from "react";

import { Box, Text } from "@chakra-ui/react";

const TaskContainer = () => {
    return(
        <Box>
            <Box width={'300px'} marginBottom={'15px'} color={'white'}>
                <Box display={'flex'} 
                _active={{
                    transform: 'scale(1.1)'
                }} 
                justifyContent={'space-between'} 
                p={'10px'} 
                backgroundColor={'brand.800'}>
                    <Text>Shower Money</Text>
                    <Text>0/1</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default TaskContainer;