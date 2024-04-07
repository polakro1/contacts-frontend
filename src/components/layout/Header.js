import { Button, Flex, Heading } from "@chakra-ui/react";
import { logout } from "../../services/UserService";
import { useAuth } from "../../context/AuthContext";

function Header() {
  const { setIsLoggedIn } = useAuth();
  function handleLogout() {
    logout().then(() => setIsLoggedIn(false));
  }
  return (
    <Flex
      w={"100%"}
      justifyContent={"space-between"}
      borderBottom={"solid 1px #e4e4e4"}
      padding={"5px"}
    >
      <Heading paddingLeft={"5px"}>Contacts</Heading>
      <Button onClick={handleLogout}>Logout</Button>
    </Flex>
  );
}

export default Header;
