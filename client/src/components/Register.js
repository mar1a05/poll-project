import { useState } from "react";
import { useAuthentification } from "../providers/AuthentificationProvider";


const Register = ({open}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {register} = useAuthentification();

    /**
     * Triggered when 'Create account' button has been clicked
     */
    const onCreateAccountClick = async () => {
        await register(username, password);
    }

    return (
        <dialog open={open} className="register">
            <div>Register</div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <input type="password" placeholder="Confirm password"/>
            </div>
            <button onClick={onCreateAccountClick}>Create account</button>
        </dialog>
    )

}

export default Register;