import { redirect, useNavigate, useSubmit } from "react-router-dom";
import {
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { createContact } from "../../services/ContactService";
import { Field, Formik } from "formik";
import { contactSchema } from "../../Schema/ContactSchema";

export default function ContactCreate() {
  const submit = useSubmit();
  const navigation = useNavigate();

  async function handleSubmit(values) {
    submit(values, { method: "post" });
  }

  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", tel: "", email: "" }}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Center>
          <VStack
            as="form"
            onSubmit={formik.handleSubmit}
            id="contact-form"
            w="50%"
            margin="10%"
          >
            <FormControl
              isInvalid={formik.errors.firstName && formik.touched.firstName}
            >
              <FormLabel>Name</FormLabel>
              <Flex>
                <FormControl
                  isInvalid={
                    formik.errors.firstName && formik.touched.firstName
                  }
                >
                  <Field
                    as={Input}
                    placeholder="First name"
                    type="text"
                    name="firstName"
                  />{" "}
                  <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={formik.errors.lastName && formik.touched.lastName}
                >
                  <Field
                    as={Input}
                    placeholder="Last name"
                    type="text"
                    name="lastName"
                  />
                  <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
                </FormControl>
              </Flex>
            </FormControl>

            <FormControl isInvalid={formik.errors.tel && formik.touched.tel}>
              <FormLabel>Phone number</FormLabel>
              <Field
                as={Input}
                placeholder="Phone number"
                type="tel"
                name="tel"
              />
              <FormErrorMessage>{formik.errors.tel}</FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={formik.errors.email && formik.touched.email}
            >
              <FormLabel>Email</FormLabel>
              <Field as={Input} placeholder="Email" type="email" name="email" />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <Flex>
              <Button type="submit" colorScheme={"blue"}>
                Save
              </Button>
              <Button type={"button"} onClick={() => navigation("/")}>
                Cancel
              </Button>
            </Flex>
          </VStack>
        </Center>
      )}
    </Formik>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const newContact = Object.fromEntries(formData);
  const createdContact = await createContact(newContact);

  return redirect(`/contacts/${createdContact._id}`);
}
