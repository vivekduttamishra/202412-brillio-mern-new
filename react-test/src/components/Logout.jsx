import React, { useEffect } from 'react';
import { useAuth } from '../context/auth';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const { user, logout } = useAuth();
    const navigate = useNavigate();



    const handleLogout = () => {
        navigate("/"); // Navigate first
        setTimeout(() => logout(), 0); // Delay logout to allow navigation
    };

    if (!user)
        return null;


    const _style = { cursor: 'pointer' }

    return (
        <div>
            <a style={_style} onClick={handleLogout}>Logout</a>
        </div>
    );

}

export default Logout;