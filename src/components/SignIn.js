import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { passwordVerification } from '../app/features/userSlice';

function SignIn() {

    const history = useHistory();
    const dispatch = useDispatch();



    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const saveLogin = e => setLogin(e.target.value);
    const savePassword = e => setPassword(e.target.value);

    return (

        <form action="" className="form-container">
            <h1>Вход в систему</h1>

            <label htmlFor="text"><b>Логин</b></label>
            <input type="text" 
                placeholder="Логин"
                name="name" 
                value={login}
                required 
                onChange={saveLogin}
            />

            <label htmlFor="psw"><b>Пароль</b></label>
            <input type="password" 
                placeholder="Пароль"
                name="psw"
                value={password}
                required 
                onChange={savePassword}
            />

            <button type="submit"
                className="btn"
                onClick = {() => {
                    dispatch(passwordVerification({login, password}));
                    history.push("/profile")
                }}
            >
            Вход
            </button>
        </form>    
    )
}

export default SignIn
