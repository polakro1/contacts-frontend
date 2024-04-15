import * as Yup from "yup";
export const contactSchema = Yup.object({
  firstName: Yup.string().required("Name is required!"),
  lastName: Yup.string().required("Lastname is required!"),
  tel: Yup.string()
    .required("Phone number is required!")
    .matches(/^\+?[1-9]\d{1,14}$/, "This is not a valid phone number!"),
  email: Yup.string().email("This is not a valid email!"),
});
