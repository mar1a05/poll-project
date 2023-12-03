import { useState } from "react";
import { useAuthentification } from "../providers/AuthentificationProvider";
import { Button, Form, Modal } from "react-bootstrap";

const RegisterDialog = ({ show, setShow }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const { register } = useAuthentification();

  /**
   * Triggered when 'Create account' button has been clicked
   */
  const onCreateAccountClick = async () => {
    await register(email, password);
  };

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter password"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Repeat password:</Form.Label>
            <Form.Control
              value={repeatedPassword}
              onChange={(e) => setRepeatedPassword(e.target.value)}
              type="password"
              placeholder="Enter repeated password"
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={onCreateAccountClick}
          >
            Create Account
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default RegisterDialog;
