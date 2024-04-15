import * as Yup from "yup";
import { string } from "yup";
const userSchema = Yup.object({
  username: string()
    .required("Username is required!")
    .min(6, "Username must be longer than 6 characters!"),
  email: string()
    .required("Email is required!")
    .email("This is not a valid email!"),
  password: string()
    .required("Password is required!")
    .min(6, "Password must be longer than 6 characters!"),
  passwordRepeat: string()
    .required("Password confirmation is required!")
    .oneOf([Yup.ref("password"), null], "Passwords must be equal!"),
});

export default userSchema;
