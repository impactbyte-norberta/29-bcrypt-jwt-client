import React, { useState } from 'react';

function LoginPage() {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    function handleChange(event) {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        };

        const response = await fetch(
            'http://localhost:5000/api/users/login',
            options
        );
        const result = await response.json();

        localStorage.setItem('user', result.token);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Email'
                    onChange={handleChange}
                    value={userData.email}
                />
                <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Password'
                    onChange={handleChange}
                    value={userData.password}
                />
                <input type='submit' value='Login' />
            </form>
        </div>
    );
}

export default LoginPage;
