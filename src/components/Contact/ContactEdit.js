import {
  redirect,
  useLoaderData,
  useNavigate,
  useSubmit,
} from "react-router-dom";
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
import { getContact, updateContact } from "../../services/ContactService";
import { Field, Formik } from "formik";
import { contactSchema } from "../../Schema/ContactSchema";

export default function ContactEdit() {
  const { contact } = useLoaderData();
  const submit = useSubmit();
  const navigate = useNavigate();

  const initialValues = {
    firstName: contact.firstName,
    lastName: contact.lastName,
    tel: contact.tel,
    email: contact.email,
  };

  async function handleSubmit(values) {
    submit(values, { method: "post" });
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Center>
          <VStack
            as={"form"}
            onSubmit={formik.handleSubmit}
            method="post"
            id="contact-form"
            w="50%"
            margin={"10%"}
          >
            <FormControl>
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
                  />
                  <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={formik.errors.lastName && formik.touched.lastName}
                >
                  <Field
                    as={Input}
                    placeholder={"Last name"}
                    type={"text"}
                    name={"lastName"}
                  />
                  <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
                </FormControl>
              </Flex>
            </FormControl>
            <FormControl isInvalid={formik.errors.tel && formik.touched.tel}>
              <FormLabel>Phone number</FormLabel>
              <Field
                as={Input}
                placeholder={"Phone number"}
                type={"tel"}
                name={"tel"}
              />
              <FormErrorMessage>{formik.errors.tel}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.tel && formik.touched.tel}>
              <FormLabel>Email</FormLabel>
              <Field
                as={Input}
                placeholder={"Email"}
                type={"email"}
                name={"email"}
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <Flex>
              <Button type={"submit"} colorScheme={"blue"}>
                Save
              </Button>
              <Button type={"button"} onClick={() => navigate(-1)}>
                Cancel
              </Button>
            </Flex>
          </VStack>
        </Center>
      )}
    </Formik>
  );
}

export async function loader({ params }) {
  const contact = await getContact(params.contactId);
  return { contact };
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updatedContact = Object.fromEntries(formData);
  updatedContact._id = params.contactId;
  await updateContact(updatedContact);
  return redirect(`/contacts/${params.contactId}`);
}
