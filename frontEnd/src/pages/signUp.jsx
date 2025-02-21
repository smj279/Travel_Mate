import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../hooks/useSignUp.jsx";

const SignUp = () => {
    const navigate = useNavigate();
    const { signup, error, isLoading } = useSignup();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
   

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(name, email, password, phone ,address);
       
    };

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="signUp-page">
            <h1>The SignUp Page</h1>

            <form className="signUp-form" onSubmit={handleSubmit}>
                <h3>Sign Up</h3>

                <label>Name:</label>
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                />

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

                <label>Address:</label>
                <input
                    type="text"
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    required
                />

                <label>Phone Number:</label>
                <input
                    type="tel"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    required
                />

                <button disabled={isLoading}>Sign Up</button>
                {error && <div className="error">{error}</div>}
            </form>

            <button onClick={goBack}>Back</button>
        </div>
    );
};

export default SignUp;
