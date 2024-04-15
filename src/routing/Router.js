import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import ErrorPage from "../pages/ErrorPage";
import Contact, {
  loader as contactLoader,
  deleteAction as deleteContact,
} from "../components/Contact/Contact";

import ContactEdit, {
  action as editContactAction,
  loader as editContactLoader,
} from "../components/Contact/ContactEdit";
import ContactCreate, {
  action as createContactAction,
} from "../components/Contact/ContactCreate";
import { loader as ContactListLoader } from "../components/ContactList";
import { action as logoutAction } from "../components/layout/Header";
import LoginPage from "../pages/LoginPage";
import { action as loginAction } from "../components/Forms/LoginForm";
import RegisterPage from "../pages/RegisterPage";
import { action as registerAction } from "../components/Forms/RegisterForm";

const Router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        loader: ContactListLoader,
        errorElement: <ErrorPage />,
        children: [
          {
            errorElement: <ErrorPage />,
            children: [
              {
                path: "contacts/:contactId",
                element: <Contact />,
                loader: contactLoader,
              },
              {
                path: "contacts/:contactId/edit",
                element: <ContactEdit />,
                loader: editContactLoader,
                action: editContactAction,
              },
              {
                path: "contacts/:contactId/delete",
                action: deleteContact,
              },
              {
                path: "contacts/new",
                element: <ContactCreate />,
                action: createContactAction,
              },
            ],
          },
        ],
      },
      {
        path: "/logout",
        action: logoutAction,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
    action: loginAction,
  },
  {
    path: "/register",
    element: <RegisterPage />,
    action: registerAction,
    errorElement: <ErrorPage />,
  },
]);

export default Router;
