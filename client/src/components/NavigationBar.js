import { useState } from "react";
import LoginDialog from "./LoginDialog";
import RegisterDialog from "./RegisterDialog";
import Navbar from "react-bootstrap/Navbar";
import { Button, Container } from "react-bootstrap";

const NavigationBar = () => {
  const [loginDialogShowed, setLoginDialogShowed] = useState(false);
  const [registerDialogShowed, setRegisterDialogShowed] = useState(false);

  /**
   * Triggered when the 'Login' button has been clicked
   */
  const onLoginClick = () => {
    setLoginDialogShowed(true);
  };

  /**
   * Triggered when the 'Register' button has been clicked
   */
  const onRegisterClick = () => {
    setRegisterDialogShowed(true);
  };

  return (
    <>
      <LoginDialog show={loginDialogShowed} setShow={setLoginDialogShowed} />
      <RegisterDialog show={registerDialogShowed} setShow={setRegisterDialogShowed} />
      <Navbar bg="white" className="shadow w-100">
        <Container fluid>
          <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Button onClick={onLoginClick} className="m-1" variant="outline-primary">Login</Button>
            <Button onClick={onRegisterClick} className="m-1" variant="primary">Register</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
