import ContactList from "./ContactList";
import Contact from "./Contact/Contact";
import { useEffect, useState } from "react";
import { Container, Grid, GridItem, Show } from "@chakra-ui/react";
import { getContacts } from "../services/ContactService";
import ContactsPanel from "./ContactsPanel";

function ContactView() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getContacts().then((res) => {
      setContacts(res);
      setIsLoading(false);
    });
  }, []);

  function handleSelectContact(contact) {
    setSelectedContact(contact);
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Grid
      w={"100%"}
      h="100%"
      flex={"1"}
      templateColumns={{ base: "1fr", md: "2fr 5fr" }}
    >
      <Show above="md">
        <GridItem borderRight={"solid 1px #e4e4e4"} bg={"#f7f7f7"}>
          <ContactsPanel
            contacts={contacts}
            selectedContact={selectedContact}
            onSelectContact={handleSelectContact}
          />
        </GridItem>
        <GridItem>
          {selectedContact && (
            <Contact key={selectedContact._id} contact={selectedContact} />
          )}
        </GridItem>
      </Show>
      <Show below={"md"}>
        <Container>
          {!selectedContact && (
            <ContactsPanel
              contacts={contacts}
              onSelectContact={(contact) => handleSelectContact(contact)}
            />
          )}

          {selectedContact && (
            <Contact key={selectedContact._id} contact={selectedContact} />
          )}
        </Container>
      </Show>
    </Grid>
  );
}

export default ContactView;
