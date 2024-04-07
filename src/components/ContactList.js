import { useEffect, useState } from "react";
import Contact from "./Contact/Contact";
import { getContacts } from "../services/ContactService";
import { Container, VStack } from "@chakra-ui/react";
import ContactListItem from "./Contact/ContactListItem";

function ContactList({
  contacts: passedContacts,
  onSelectContact,
  activeContactId,
}) {
  const [contacts, setContacts] = useState(passedContacts);

  function handleSelectContact(contact) {
    onSelectContact(contact);
  }

  return (
    <Container overflowY="auto">
      <VStack>
        {contacts.map((contact) => (
          <ContactListItem
            key={contact._id}
            contact={contact}
            isActive={activeContactId === contact._id}
            onClick={(contact) => handleSelectContact(contact)}
          />
        ))}
      </VStack>
    </Container>
  );
}

export default ContactList;
