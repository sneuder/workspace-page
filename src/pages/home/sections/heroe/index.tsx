import { Button, Flex, Grid, Heading, Text, useTheme } from '@chakra-ui/react'

const Heroe = () => {
  const theme = useTheme()

  return (
    <Flex direction="column" align="center" justify="center" gap="38px" maxW="100vw" h="100vh" maxH="100vh" p="4rem" bgGradient={`linear(to-b, ${theme.colors.midnightNavy}, ${theme.colors.deepTeal})`}>
      <Grid templateColumns='repeat(1, 1fr)' gap={1} w="fit-content" justifyItems="center">
        <Heading variant="heroe">
          Workspace Wizard:<br />
          Craft Docker Workspaces
        </Heading>
        <Text color="silverGray">Your Swift Solution for Instant, Portable Development Environments!</Text>
      </Grid>

      <Grid templateColumns='repeat(2, 1fr)' gap="16px" w="fit-content">
        <Button variant="primary">Donwload for Linux</Button>
        <Button variant="primary">Donwload for Linux</Button>
      </Grid>
    </Flex>
  )
}

export default Heroe
