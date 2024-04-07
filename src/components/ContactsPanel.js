import { Container, Divider, Flex, IconButton, VStack } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import ContactList from "./ContactList";
import { useState } from "react";
import Footer from "./layout/footer";

function ContactsPanel({ contacts, selectedContact, onSelectContact }) {
  function handleSelectContact(contact) {
    onSelectContact(contact);
  }

  return (
    <VStack h="100%">
      <Flex w="100%" justifyContent={"flex-end"} padding={"10px"}>
        <IconButton icon={<AddIcon />} aria-label={"Add contact"} />
      </Flex>
      <Divider borderColor={"#e4e4e4"} />
      <Container flex={1} padding={"0px"}>
        <ContactList
          activeContactId={selectedContact ? selectedContact._id : null}
          contacts={contacts}
          onSelectContact={(contact) => handleSelectContact(contact)}
        />
      </Container>
      <Footer />
    </VStack>
  );
}

export default ContactsPanel;
