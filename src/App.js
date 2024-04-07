import "./App.css";
import { useEffect, useState } from "react";
import { getContact } from "./services/ContactService";
import { useAuth } from "./context/AuthContext";
import { checkIsLoggedIn, logout } from "./services/UserService";
import ContactView from "./components/ContactView";
import LoginPage from "./pages/LoginPage";
import { Box, Button, Center, Container, Flex, VStack } from "@chakra-ui/react";
import Header from "./components/layout/Header";
import { RouterProvider } from "react-router-dom";
import router from "./services/router";

function App() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  function zkontrolujPrihlaseni() {
    checkIsLoggedIn().then((res) => console.log(res));
  }

  const handleLogout = () => {
    logout().then(() => {
      setIsLoggedIn(false);
    });
  };

  if (!isLoggedIn) {
    return <LoginPage />;
  }

  if (isLoggedIn) {
    return <RouterProvider router={router} />;
  }
}

export default App;
