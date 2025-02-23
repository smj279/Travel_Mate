import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from "../hooks/useLogin.jsx";
import "../allcss/login.css"; 

const Login = () => {
    const navigate = useNavigate();
    const { login, error, isLoading } = useLogin();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
        console.log("Logging in -> Email:", email, "Password:", password);
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <h3>Log In</h3>

                <label>Email address:</label>
                <input 
                    type="email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email} 
                    required
                />

                <label>Password:</label>
                <input 
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password} 
                    required
                />

                <button type="submit" disabled={isLoading} className="login-btn">Log in</button>
                {error && <div className="error-message">{error}</div>}
            </form>

            <button onClick={() => navigate(-1)} className="back-btn">Back</button>
        </div>
    );
};

export default Login;
