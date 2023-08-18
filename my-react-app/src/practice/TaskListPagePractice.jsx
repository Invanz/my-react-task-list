import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Button,
} from '@chakra-ui/react';

export function TaskListPagePractice() {
    return (
        <Box display="flex" justifyContent="center">
            <Box w="80%" display="flex" justifyContent="center" bg="green.100" borderRadius="2xl" padding="4">
                <Accordion allowToggle bg="green.200" w="95%" margin="2">
                    <AccordionItem padding="2">
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' bg="green.400">
                                    📄 Título tarea
                                    <Button>hola</Button>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box textAlign='left'>
                                📄 Título tarea 2
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
        </Box>
    )
}