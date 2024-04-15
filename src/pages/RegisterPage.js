import RegisterForm from "../components/Forms/RegisterForm";
import { Heading, VStack } from "@chakra-ui/react";

export default function RegisterPage() {
  return (
    <VStack marginTop={"10vh"} gap={"7vh"}>
      <Heading size={"4xl"}>Contacts</Heading>
      <VStack>
        <Heading size={"lg"} alignSelf={"flex-start"}>
          Registration
        </Heading>
        <RegisterForm />
      </VStack>
    </VStack>
  );
}
