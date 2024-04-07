import { Container, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Container borderTop={"solid 1px #e4e4e4"} padding={"5px"}>
      <footer>
        <Text fontSize={"xs"} textAlign={"center"}>
          Studentský zápočtový projekt
        </Text>
      </footer>
    </Container>
  );
}
export default Footer;
