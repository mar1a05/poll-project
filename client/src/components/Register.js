

const Register = ({open}) => {

    /**
     * Triggered when 'Create account' button has been clicked
     */
    const onCreateAccountClick = () => {
        console.log("TODO!");
    }

    return (
        <dialog open={open} className="register">
            <div>Register</div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm password"/>
            </div>
            <button onClick={onCreateAccountClick}>Create account</button>
        </dialog>
    )

}

export default Register;