import { Form, Link, redirect, useSubmit } from "react-router-dom";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
import { login } from "../../services/UserService";
import { Field, Formik } from "formik";
import loginSchema from "../../Schema/LoginSchema";

function LoginForm() {
  const submit = useSubmit();

  const initialValues = {
    username: "",
    password: "",
  };

  const handleSubmit = async (values) => {
    submit(values, { method: "post" });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      {(formik) => (
        <VStack
          as={Form}
          method={"post"}
          id={"login-form"}
          onSubmit={formik.handleSubmit}
        >
          <FormControl
            isInvalid={formik.errors.username && formik.touched.username}
          >
            <FormLabel>Username</FormLabel>
            <Field as={Input} type={"text"} name={"username"} />
            <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={formik.errors.password && formik.touched.password}
          >
            <FormLabel>Password</FormLabel>
            <Field as={Input} type={"password"} name={"password"} />
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          </FormControl>
          <HStack w={"100%"}>
            <Button type={"submit"} colorScheme={"blue"}>
              Login
            </Button>
            <Button as={Link} to={"/register"}>
              Register
            </Button>
          </HStack>
        </VStack>
      )}
    </Formik>
  );
}

export default LoginForm;

export async function action({ request }) {
  const formData = await request.formData();
  const { username, password } = Object.fromEntries(formData);
  await login(username, password);
  return redirect("/");
}
