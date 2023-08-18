import { Heading, Text, Box } from "@chakra-ui/react"

export function HomePagePractice() {
    return (
        <>
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                <Heading as="h1" size="4xl" gap="10px" padding="10px">TaskFlow</Heading>
                <Text>Worry not, go with the flow.</Text>
            </Box>
        </>
    )
}