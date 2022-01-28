import { Box, Input } from "@chakra-ui/react";
import React from "react";

import { FiEdit2 } from "react-icons/fi";

const TaskName = () => {
    return(
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} w={'250px'} h={'100px'}>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} w={'100%'} borderRadius={'30px'} bgColor={'#6c4eb3'}>
                    <Input p={'10px'} color={'white'} m={'auto'} variant={'unstyled'} placeholder={'Task: Write an article'}/>
                    <Box w={'20%'} color={'white'}>
                        <FiEdit2 />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default TaskName;