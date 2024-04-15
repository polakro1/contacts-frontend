import { Container, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Container as={"footer"} borderTop={"solid 1px #e4e4e4"} padding={"5px"}>
      <Text fontSize={"xs"} textAlign={"center"}>
        Studentský zápočtový projekt
      </Text>
    </Container>
  );
}
export default Footer;
