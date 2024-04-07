import { VStack } from "@chakra-ui/react";
import Header from "../components/layout/Header";
import ContactView from "../components/ContactView";

function Homepage() {
  return (
    <VStack flex={1} w="100%" minH={"100vh"} padding={"0"} gap={"0"}>
      <Header />
      <VStack flex={1} w={"100%"} padding={"0"}>
        <ContactView />
      </VStack>
    </VStack>
  );
}

export default Homepage;
