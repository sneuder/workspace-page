import useDownload from "../../../../hooks/useDownload";
import useLinkFiles from "../../../../hooks/useLinkFiles";

import { Button, Flex, Grid, Heading, Text, useTheme } from "@chakra-ui/react";
import { VscTerminalLinux } from "react-icons/vsc";
import { BsWindows } from "react-icons/bs";

const Heroe = () => {
  const theme = useTheme();

  const linkFiles = useLinkFiles();
  const downloadWindows = useDownload();
  const downloadLinux = useDownload();

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap="38px"
      maxW="100vw"
      h="100vh"
      maxH="100vh"
      p="4rem"
      bgGradient={`linear(to-b, ${theme.colors.midnightNavy}, ${theme.colors.deepTeal})`}
    >
      <Grid
        templateColumns="repeat(1, 1fr)"
        gap={1}
        w="fit-content"
        justifyItems="center"
      >
        <Heading variant="heroe">
          Workspace Wizard:
          <br />
          Craft Docker Workspaces
        </Heading>
        <Text color="silverGray">
          Your Swift Solution for Instant, Portable Development Environments!
        </Text>
      </Grid>

      <Grid templateColumns="repeat(2, 1fr)" gap="16px" w="fit-content">
        <Button
          variant="primary"
          rightIcon={<BsWindows />}
          onClick={() => downloadWindows.downloadFile(linkFiles.windows)}
          isLoading={downloadWindows.downloading}
          loadingText="Downloading"
          spinnerPlacement="end"
        >
          Donwload for
        </Button>
        <Button
          variant="primary"
          rightIcon={<VscTerminalLinux />}
          onClick={() => downloadLinux.downloadFile(linkFiles.linux)}
          isLoading={downloadLinux.downloading}
          loadingText="Downloading"
          spinnerPlacement="end"
        >
          Donwload for
        </Button>
      </Grid>

      <Text color="silverGray" fontSize={12}>
        Beta 1.0.0
      </Text>
    </Flex>
  );
};

export default Heroe;
