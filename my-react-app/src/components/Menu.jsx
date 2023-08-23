import { Link } from "react-router-dom"
import React from "react";
import { Flex, HStack, Box, Button, Text, Spacer } from "@chakra-ui/react";

export function Menu() {

    return (
        <>
            <Flex as="nav" alignItems="center" h="7vh" margin="2">
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Box bg="green.50" borderRadius="2xl" padding="2" margin="1">
                        <Link to={"/"}>Home</Link>
                    </Box>
                    <Box bg="green.50" borderRadius="2xl" padding="2" margin="1">
                        <Link to={"/TaskPage"}>Tasks</Link>
                    </Box>
                    <Box bg="green.50" borderRadius="2xl" padding="2" margin="1">
                        <Link to="/AboutUs">About us</Link>
                    </Box>
                </Box>
                <Spacer />
                <HStack spacing="20px">
                    <Box>UN</Box>
                    <Text>UserName</Text>
                    <Button colorScheme="green" color="green.50" bgColor="green.200">Log out</Button>
                </HStack>
            </Flex>
        </>
    )
}