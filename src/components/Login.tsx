import React, { useState } from 'react';

export default function Login() {
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: '',
    });


    const change = (e) => {
        setLoginForm({
            ...loginForm,
            [ e.target.name ]: e.target.value,
        });
    };

    return (
        <form>
            <div>
                <label htmlFor="username-input">Username:</label>
                <input type="text" id="username-input" value={loginForm.username} onChange={change} name="username"></input>
            </div>
            <div>
                <label htmlFor="password-input">Password:</label>
                <input type="text" id="password-input" value={loginForm.password} onChange={change} name="password"></input>
            </div>
        </form>
    );
}