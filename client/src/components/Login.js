import { useState } from "react";
import { useAuthentification } from "../providers/AuthentificationProvider";

const Login = ({ open }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {login} = useAuthentification();

  /**
   * Triggered when 'Login' button has been clicked
   */
  const onLoginClick = async () => {
    await login(username, password);
  };

  return (
    <dialog open={open}>
      <div>Register</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      <button onClick={onLoginClick}>Login</button>
    </dialog>
  );
};

export default Login;
