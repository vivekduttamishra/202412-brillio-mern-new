//login component
import React, { useState,useEffect } from 'react';
import { useAuth } from '../context/auth';
import { useNavigate,  } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { login, error, user } = useAuth();
    const navigate = useNavigate();

   useEffect(()=>{
    if (user) {
        if (user.role === 'admin') {
           navigate('/admin');
            
        } else {
            navigate('/profile');
        }
    }
   },[user,navigate])

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);

    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {error && <p>{error}</p>}
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;