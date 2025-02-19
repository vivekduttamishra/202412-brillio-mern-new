//Create a Profile Page
import React,{useEffect} from 'react';
import { useAuth } from '../context/auth';
import {useNavigate} from 'react-router-dom';

const Profile = () => {
    const { user,signOut } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) navigate('/login');
    }, [user, navigate]);

    return ( 
        <div>
            <h1>Profile Page</h1>
            <p>Welcome, {user?.name}</p>                  
        </div>
    );
}

export default Profile;