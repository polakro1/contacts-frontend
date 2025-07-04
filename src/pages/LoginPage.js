import LoginForm from "../components/Forms/LoginForm";
import { Heading, VStack } from "@chakra-ui/react";

function LoginPage() {
  return (
    <VStack marginTop={"10vh"} gap={"7vh"}>
      <Heading size={"4xl"}>Contacts</Heading>
      <VStack>
        <Heading size={"lg"} alignSelf={"flex-start"}>
          Login
        </Heading>
        <LoginForm />
      </VStack>
    </VStack>
  );
}

export default LoginPage;
