import { Box, Button, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Dropdown from "../components/Dropdown.component";
import NavIcons from "../components/NavIcons.component";

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import '../styles/settings.style.css';
import { Link } from "react-router-dom";

const Settings = () => {
    return(
        <>
            <Box background={'brand.900'} h={'100%'} display={'flex'} flexDir={'column'} justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'} position={'relative'}>
            <Box position={'relative'} display={'flex'} justifyContent={'center'} alignItems={'center'} width={'100%'} height={'70px'} color={'white'}>
                <Box position={'absolute'} top={'15px'} left={'20px'}>
                    <Button colorScheme={'purple'} variant={'outline'}>
                        <Link to={'/'}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </Link>
                    </Button>
                </Box>
                <Box>
                    <Text  >
                        Add New Timer
                    </Text>
                </Box>
            </Box>
            <Box display={'flex'} flexDir={'column'} h={'570px'} justifyContent={'center'} alignItems={'center'} gap={'40px'} m={'auto'}>
                <Box display={'flex'} flexDir={'column'} gap={'10px'}>
                    <Dropdown />
                    <Dropdown />
                    <Dropdown />
                    <Dropdown />
                </Box>
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Stack direction={'row'} spacing={4} align={'center'}>
                        <Button colorScheme={'purple'} variant={'outline'}>Cancel</Button>
                        <Button colorScheme={'purple'} variant={'solid'}>Save</Button>
                    </Stack>
                </Box>
            </Box>  
            
            <NavIcons />    
            </Box>
        </>
    )
}

export default Settings;