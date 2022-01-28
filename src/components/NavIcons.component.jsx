import React from "react";
import { Link } from "react-router-dom";


import { Box, Stack } from "@chakra-ui/react";
import { GiSettingsKnobs } from 'react-icons/gi'
import { IoTimeOutline } from 'react-icons/io5'

const NavIcons = () => {
    return(
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} position={['relative', 'absolute']} top={'20px'} right={'10px'} w={['100%', '30px']} h={'95%'}>
                <Stack m={'auto'} direction={['row', 'column' ]} spacing={'24px'} color={'white'} fontSize={'30px'}>
                    <Box>
                        <Link to={'/'}>
                            <IoTimeOutline />
                        </Link>
                    </Box>
                    <Box>
                        <Link to={'/settings'}>
                            <GiSettingsKnobs />
                        </Link>
                    </Box>
                </Stack>
            </Box>
    )
}

export default NavIcons;