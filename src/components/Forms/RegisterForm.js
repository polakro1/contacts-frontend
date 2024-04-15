import { Form, redirect, useSubmit } from "react-router-dom";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { register } from "../../services/UserService";
import { Field, Formik } from "formik";
import userSchema from "../../Schema/UserSchema";

export default function RegisterForm() {
  const submit = useSubmit();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    passwordRepeat: "",
  };

  async function handleSubmit(values) {
    submit(values, { method: "post" });
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      {(formik) => (
        <VStack
          as={Form}
          method={"post"}
          id="register-form"
          onSubmit={formik.handleSubmit}
        >
          <FormControl
            isInvalid={formik.errors.username && formik.touched.username}
          >
            <FormLabel>Username</FormLabel>
            <Field
              as={Input}
              type={"text"}
              name={"username"}
              placeholder={"username"}
            />
            <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={formik.errors.email && formik.touched.email}>
            <FormLabel>Email</FormLabel>
            <Field
              as={Input}
              type={"email"}
              name={"email"}
              placeholder={"email"}
            />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl
            isInvalid={formik.errors.password && formik.touched.password}
          >
            <FormLabel>Password</FormLabel>
            <Field
              as={Input}
              type={"password"}
              name={"password"}
              placeholder={"password"}
            />
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          </FormControl>
          <FormControl
            isInvalid={
              formik.errors.passwordRepeat && formik.touched.passwordRepeat
            }
          >
            <FormLabel>Repeat password</FormLabel>
            <Field
              as={Input}
              type={"password"}
              name={"passwordRepeat"}
              placeholder={"repeated password"}
            />
            <FormErrorMessage>{formik.errors.passwordRepeat}</FormErrorMessage>
          </FormControl>
          <Button type={"submit"} colorScheme={"blue"}>
            Register
          </Button>
        </VStack>
      )}
    </Formik>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  await register(data);
  return redirect("/login");
}
