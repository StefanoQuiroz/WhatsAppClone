import React, { useState } from 'react';
import styles from './Login.module.scss';
import { useHistory } from 'react-router-dom' ;
//import { Button } from '@material-ui/core';
/* import { Avatar } from '@material-ui/core';
import { BiUser } from "react-icons/bi"; */
const Login = () => {
    const history = useHistory();
    const [input, setInput] = useState()
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(input);
        setInput("");
        history.push(`/`);

    }
    return (
        <div className={styles.login}>
            <div className={styles.loginContainer}>
                <form onSubmit={onSubmit}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" alt="iconWsp" />
                    <div className={styles.loginText}>
                        {/* <h1>Registrese aquí</h1> */}
                        <input type="text" placeholder="Ingrese su nombre aqui" value={input} onChange={event => setInput(event.target.value)}/>
                    </div>
                    <input type="submit" className={styles.Button} value="Registrarse con Google"/>
                </form>
            </div>
        </div>
    );
}

export default Login;
