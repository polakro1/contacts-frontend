import { useState } from "react";
import { login } from "../services/UserService";
import { useAuth } from "../context/AuthContext";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const handleLogin = () => {
    login(username, password).then(() => setIsLoggedIn(true));
  };

  return (
    <div>
      <label htmlFor={"username"}></label>
      <input id={"username"} onChange={(e) => setUsername(e.target.value)} />
      <label htmlFor={"password"}></label>
      <input id={"password"} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginForm;
