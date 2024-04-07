import { Center, Container, Heading, Text } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Center>
      <Heading>Chyba!</Heading>
      <Text>Něco se nepodařilo</Text>
      <Text>{error.statusText || error.message}</Text>
    </Center>
  );
}

export default ErrorPage;
