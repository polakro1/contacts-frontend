import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { updateContact } from "../../services/ContactService";
import {
  AbsoluteCenter,
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ChatIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";

function Contact({ contact: passedContact }) {
  const [contact, setContact] = useState(passedContact);
  const [isEditing, setIsEditing] = useState(false);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  }

  function handleEditButton() {
    setIsEditing((prevState) => !prevState);
  }

  function handleCancelEdit() {
    cancelEdit();
  }

  function cancelEdit() {
    setContact(contact);
    setIsEditing(false);
  }

  function handleSaveEdit(e) {
    e.preventDefault();
    updateContact(contact).then((res) => {
      cancelEdit();
    });
  }

  if (!isEditing) {
    return (
      <VStack>
        <Flex w={"100%"} justifyContent={"flex-end"} padding={"10px"}>
          <Button onClick={handleEditButton}>Edit</Button>
        </Flex>
        <Avatar size={"2xl"} gap={"5px"} />
        <Heading>
          {contact.firstName} {contact.lastName}
        </Heading>
        <HStack>
          <Button leftIcon={<PhoneIcon />}>Call</Button>
          <Button leftIcon={<ChatIcon />}>Message</Button>
          <Button leftIcon={<EmailIcon />}>Email</Button>
        </HStack>
        <Heading size={"sm"}>Phone number</Heading>
        <Text>{contact.tel}</Text>
        <Heading size={"sm"}>Email</Heading>
        <Text>{contact.email}</Text>
      </VStack>
    );
  }
  if (isEditing) {
    return (
      <div>
        <form onSubmit={handleSaveEdit}>
          <label htmlFor={"firstname"}>Name</label>
          <input
            id={"firstName"}
            name={"firstName"}
            onChange={handleChange}
            defaultValue={contact.firstName}
          />
          <label htmlFor={"lastName"}>Surname</label>
          <input
            id={"lastName"}
            name={"lastName"}
            onChange={handleChange}
            defaultValue={contact.lastName}
          />
          <label htmlFor={"email"}>email</label>
          <input
            id={"email"}
            name={"email"}
            onChange={handleChange}
            defaultValue={contact.email}
          />
          <label htmlFor={"email"}>tel</label>
          <input
            id={"tel"}
            name={"tel"}
            onChange={handleChange}
            defaultValue={contact.tel}
          />
          <Button onClick={handleCancelEdit}>Cancel</Button>
          <Button type={"submit"}>Save</Button>
        </form>
      </div>
    );
  }
}

export default Contact;
