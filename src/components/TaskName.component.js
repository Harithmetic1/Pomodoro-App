import { Box, Input } from "@chakra-ui/react";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const TaskName = () => {
    return(
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} w={'250px'} h={'100px'}>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} w={'100%'} borderRadius={'30px'} bgColor={'#6c4eb3'}>
                    <Input p={'10px'} color={'white'} m={'auto'} variant={'unstyled'} placeholder={'Task: Write an article'}/>
                    <Box w={'20%'} color={'white'}>
                        <FontAwesomeIcon icon={faPen} />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default TaskName;