import { deleteContact, getContact } from "../../services/ContactService";
import {
  Avatar,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  ChatIcon,
  DeleteIcon,
  EditIcon,
  EmailIcon,
  PhoneIcon,
} from "@chakra-ui/icons";
import { Form, Link, redirect, useLoaderData } from "react-router-dom";

export default function Contact() {
  const { contact } = useLoaderData();

  return (
    <VStack>
      <Flex w={"100%"} justifyContent={"flex-end"} padding={"10px"} gap={"5px"}>
        <IconButton
          as={Link}
          to={`/contacts/${contact._id}/edit`}
          icon={<EditIcon />}
        >
          Edit
        </IconButton>
        <Form method={"post"} action={"delete"}>
          <IconButton type={"submit"} icon={<DeleteIcon />} colorScheme={"red"}>
            Delete
          </IconButton>
        </Form>
      </Flex>
      <Avatar size={"2xl"} gap={"5px"} />
      <Heading>
        {contact.firstName} {contact.lastName}
      </Heading>
      <HStack>
        <Button as={"a"} href={`tel:${contact.tel}`} leftIcon={<PhoneIcon />}>
          Call
        </Button>
        <Button as={"a"} href={`sms:${contact.tel}`} leftIcon={<ChatIcon />}>
          Message
        </Button>
        <Button
          as={"a"}
          href={`mailto:${contact.email}`}
          leftIcon={<EmailIcon />}
        >
          Email
        </Button>
      </HStack>
      <Heading size={"sm"}>Phone number</Heading>
      <Text>{contact.tel}</Text>
      <Heading size={"sm"}>Email</Heading>
      <Text>{contact.email}</Text>
    </VStack>
  );
}

export async function loader({ params }) {
  try {
    const contact = await getContact(params.contactId);
    return { contact };
  } catch (error) {
    if (error.response.status === 401) {
      return redirect("/login");
    }
  }
}

export async function deleteAction({ params }) {
  await deleteContact(params.contactId);
  return redirect("/");
}
