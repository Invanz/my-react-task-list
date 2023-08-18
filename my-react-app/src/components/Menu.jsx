import { Link } from "react-router-dom"
import React from "react";
import { Heading, Flex, HStack, Box, Button, Text, Spacer } from "@chakra-ui/react";

export function Menu() {
    return (
        <>
        <Flex as="nav" alignItems="center">
            <Heading>TaskFlow</Heading>
            <Spacer />
            <HStack spacing="20px">
                <Box>AG</Box>
                <Text>nombreDeUsuario</Text>
                <Button>Log out</Button>
            </HStack>
        </Flex>
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/TaskPage"}>Tareas</Link>
                </li>
                <li>
                    <Link to="/AboutUs">Sobre Nosotros</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}