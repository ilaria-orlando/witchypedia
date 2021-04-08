import React, { useState } from 'react';
export default function Form() {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    const handleSignIn = (e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSignIn} method="post">
            <input type="email" name="email" id="email" placeholder="e-mail adress"/>
            <input type="password" name="password" id="password" placeholder="password"/>
            <input type="submit" value="sign in"/>
        </form>
    )
}