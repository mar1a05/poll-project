import { useState } from "react";
import "../styles/Navbar.css"
import Login from "./Login";
import Register from "./Register";

const Navbar = () => {

    const [loginOpened, setIsOpened] = useState(false);
    const [registerOpened, setRegisterOpened] = useState(false);

    /**
     * Triggered when the 'Login' button has been clicked
     */
    const onLoginClick = () => {
        setIsOpened(true);
    }

    /**
     * Triggered when the 'Register' button has been clicked
     */
    const onRegisterClick = () => {
        setRegisterOpened(true);
    }

    return (
        <div className="navbar">
            <Login open={loginOpened} />
            <Register open={registerOpened} />
            <div style={{display: "inline-block"}}>
                <button onClick={onLoginClick}>Login</button>
                <button onClick={onRegisterClick}>Register</button>
            </div>
        </div>
    );
}

export default Navbar;