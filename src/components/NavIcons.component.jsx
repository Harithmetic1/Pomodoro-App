import React from "react";
import { Link } from "react-router-dom";


import { Box, Stack } from "@chakra-ui/react";

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'

const NavIcons = () => {
    return(
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} position={['relative', 'absolute']} top={'20px'} right={'10px'} w={['100%', '30px']} h={'95%'}>
                <Stack m={'auto'} direction={['row', 'column' ]} spacing={'24px'} color={'white'} fontSize={'30px'}>
                    <Box>
                        <Link to={'/'}>
                            <FontAwesomeIcon icon={faClock} />
                        </Link>
                    </Box>
                    <Box>
                        <Link to={'/settings'}>
                            <FontAwesomeIcon icon={faSlidersH} transform={{ rotate: 90 }}/>
                        </Link>
                    </Box>
                </Stack>
            </Box>
    )
}

export default NavIcons;