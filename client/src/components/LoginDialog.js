import { useState } from "react";
import { useAuthentification } from "../providers/AuthentificationProvider";
import { Button, Form, Modal } from "react-bootstrap";

const LoginDialog = ({ show, setShow }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuthentification();

  /**
   * Triggered when 'Login' button has been clicked
   */
  const onLoginClick = async () => {
    await login(email, password);
  };

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email:</Form.Label>
            <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password:</Form.Label>
            <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter password" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={onLoginClick}>
            Login
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginDialog;
