import React, { useContext } from "react";
import { Box, Button, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import TaskContainer from "./TaskContainer.component";
import SettingsContainer from "./SettingsContainer.component";
import TaskName from "./TaskName.component";
import { PomodoroContext } from "../Contexts/PomodoroContexts";


const TaskList = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { taskArray, taskID, setTaskID } = useContext(PomodoroContext)

    // console.log(taskArray)
    return(
        <>
            <Box position={'relative'} display={'flex'} flexDir={'column'} gap={'15px'} justifyContent={'center'} alignItems={'center'}>
                <Box color={'white'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'300px'} borderBottom={'1px'} borderColor={'brand.800'} borderStyle={'solid'} p={'10px'} textAlign={'center'}>
                    Tasks
                    <Button variant={'unstyled'} onClick={onOpen} >
                        <FontAwesomeIcon icon={faPlusCircle} onClick={() => setTaskID(taskID + 1)} />
                    </Button>
                </Box>
                {
                    taskArray.map((task) => (
                        <TaskContainer name={task[0].name} key={task[0].id} />
                        ))
                }
            </Box>

            <Modal isOpen={isOpen} size={'xs'} onClose={onClose}>
                <ModalOverlay />
                <ModalContent backgroundColor={'brand.900'} color={'white'}>
                <ModalHeader>Add New Timer</ModalHeader>
                <ModalCloseButton />
                <ModalBody height={'400px'}>
                    <TaskName />
                    <SettingsContainer />
                </ModalBody>
                </ModalContent>
            </Modal>
        </>

    )
}

export default TaskList;