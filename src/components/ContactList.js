import { getContacts } from "../services/ContactService";
import { Text, VStack } from "@chakra-ui/react";
import ContactListItem from "./Contact/ContactListItem";
import { redirect, useLoaderData } from "react-router-dom";

function ContactList() {
  const { contacts } = useLoaderData();

  return (
    <VStack
      minH={0}
      width={"100%"}
      overflowY="auto"
      h={"100%"}
      padding={"15px"}
    >
      {contacts.length === 0 && <Text>Nothing here...</Text>}
      {contacts.map((contact) => (
        <ContactListItem key={contact._id} contact={contact} />
      ))}
    </VStack>
  );
}

export default ContactList;

export async function loader({ request }) {
  try {
    const url = new URL(request.url);
    const search = url.searchParams.get("search");
    const contacts = await getContacts(search);
    return { contacts, search };
  } catch (error) {
    if (error.response.status === 401) {
      return redirect("/login");
    }
  }
}
