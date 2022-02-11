import React from "react";
// import { Link } from "react-router-dom";


import { Box, Stack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from "@chakra-ui/react";


// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons'
// import { faClock } from '@fortawesome/free-regular-svg-icons'
import SettingsContainer from "./SettingsContainer.component";

const NavIcons = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()


    return(
        <>
        <Box  position={['relative', 'absolute']} top={['0px', '20px']} right={'10px'} w={['','30px']} h={'95%'}>
                <Stack m={'auto'} direction={['row', 'column' ]} spacing={'24px'} color={'white'} fontSize={'30px'}>
                    <Box>
                        {/* <Link to={'/'}>
                            <FontAwesomeIcon icon={faClock} />
                        </Link> */}
                    </Box>
                    <Box>
                        <FontAwesomeIcon onClick={onOpen} icon={faSlidersH} transform={{ rotate: 90 }}/>
                    </Box>
                </Stack>
            </Box>

            <Modal isOpen={isOpen} size={'xs'} onClose={onClose}>
                <ModalOverlay />
                <ModalContent backgroundColor={'brand.900'} color={'white'}>
                <ModalHeader>Timer Settings</ModalHeader>
                <ModalCloseButton />
                <ModalBody height={'400px'}>
                    <SettingsContainer />
                </ModalBody>
                </ModalContent>
            </Modal>


            </>
    )
}

export default NavIcons;