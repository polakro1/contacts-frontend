import { Grid, GridItem, Show } from "@chakra-ui/react";

import ContactsPanel from "./ContactsPanel";
import { Outlet, useParams } from "react-router-dom";

function ContactView() {
  const { contactId } = useParams();
  const isContactFocus = !!contactId;

  return (
    <Grid
      w={"100%"}
      minH={0}
      flex={"1"}
      templateColumns={{ base: "1fr", md: "2fr 5fr" }}
    >
      <Show above={"md"}>
        <GridItem minH={0} borderRight={"solid 1px #e4e4e4"} bg={"#f7f7f7"}>
          <ContactsPanel />
        </GridItem>
        <GridItem>
          <Outlet />
        </GridItem>
      </Show>
      <Show below={"md"}>
        <GridItem>
          {!isContactFocus && <ContactsPanel />}
          {isContactFocus && <Outlet />}
        </GridItem>
      </Show>
    </Grid>
  );
}

export default ContactView;
