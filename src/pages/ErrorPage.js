import { Center, Heading, Text, VStack } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Center>
      <VStack marginTop={"10vh"}>
        <Heading>Chyba!</Heading>
        <Text>Něco se nepodařilo</Text>
        <Text>{error.statusText || error.message}</Text>
      </VStack>
    </Center>
  );
}

export default ErrorPage;
