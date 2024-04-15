import { Text, Link as ChakraLink } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function ContactListItem({ contact }) {
  return (
    <ChakraLink
      _hover={{ textDecoration: "none" }}
      display="flex"
      w="100%"
      borderRadius="15px"
      padding="5px 15px"
      as={NavLink}
      to={`contacts/${contact._id}`}
      style={({ isActive }) =>
        isActive ? { color: "white", background: "blue" } : null
      }
    >
      <Text fontSize={"xl"}>
        {contact.firstName} {contact.lastName}
      </Text>
    </ChakraLink>
  );
}

export default ContactListItem;
