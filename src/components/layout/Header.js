import { Button, Flex, Heading } from "@chakra-ui/react";
import { Form, Link, redirect } from "react-router-dom";
import { logout } from "../../services/UserService";

export default function Header() {
  return (
    <Flex
      as={"header"}
      w={"100%"}
      justifyContent={"space-between"}
      borderBottom={"solid 1px #e4e4e4"}
      padding={"5px"}
    >
      <Heading as={Link} to={"/"} paddingLeft={"5px"}>
        Contacts
      </Heading>
      <Form method={"post"} action={"/logout"}>
        <Button type={"submit"}>Logout</Button>
      </Form>
    </Flex>
  );
}

export async function action() {
  await logout();
  return redirect("/login");
}
