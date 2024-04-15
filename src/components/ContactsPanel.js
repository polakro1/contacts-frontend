import {
  Container,
  Divider,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from "@chakra-ui/react";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import ContactList from "./ContactList";
import Footer from "./layout/Footer";
import { Form, Link, useLoaderData, useSubmit } from "react-router-dom";
import { getContacts } from "../services/ContactService";

function ContactsPanel() {
  const { search } = useLoaderData();
  const submit = useSubmit();
  return (
    <VStack flex={1} minH={0} h={"100%"}>
      <Flex w="100%" justifyContent={"flex-end"} padding={"10px"}>
        <Container as={Form} id={"search-form"} flex={1}>
          <InputGroup>
            <InputLeftElement>
              <SearchIcon />
            </InputLeftElement>
            <Input
              type={"search"}
              id={"search"}
              name={"search"}
              placeholder={"Search"}
              defaultValue={search}
              onChange={(e) => submit(e.currentTarget.form)}
            />
          </InputGroup>
        </Container>
        <IconButton
          as={Link}
          to={"/contacts/new"}
          icon={<AddIcon />}
          aria-label={"Add contact"}
        />
      </Flex>
      <Divider borderColor={"#e4e4e4"} />
      <ContactList />
      <Footer />
    </VStack>
  );
}

export default ContactsPanel;

export async function loader({ request }) {
  const url = new URL(request.url);
  const search = url.searchParams.get("search");
  const contacts = await getContacts(search);
  return { contacts };
}
