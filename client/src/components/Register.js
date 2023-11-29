import { useState } from "react";


const Register = ({open}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    /**
     * Triggered when 'Create account' button has been clicked
     */
    const onCreateAccountClick = () => {
        fetch('http://127.0.0.1:9000/api/addUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        });
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