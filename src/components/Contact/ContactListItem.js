import { useState } from "react";
import { Button, Container, Flex, Text } from "@chakra-ui/react";

function ContactListItem({ contact: passedContact, onClick, isActive }) {
  const [contact] = useState(passedContact);

  function handleOnClick() {
    onClick(contact);
  }

  return (
    <Flex
      w={"100%"}
      onClick={handleOnClick}
      bg={isActive ? "blue" : "initial"}
      borderRadius={"5px"}
      padding={"5px 5px"}
    >
      <Text fontSize={"xl"} color={isActive ? "white" : "initial"}>
        {contact.firstName} {contact.lastName}
      </Text>
    </Flex>
  );
}

export default ContactListItem;
