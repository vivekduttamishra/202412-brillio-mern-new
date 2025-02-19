//Create a Profile Page
import React,{useEffect} from 'react';
import { useAuth } from '../context/auth';
import {useNavigate} from 'react-router-dom';



const Admin = () => {
    const { user,signOut } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (!user || user.role!=='admin') navigate('/login');
    }, [user, navigate]);
    
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <p>Welcome, {user.name}</p>
                   
        </div>
    );
}

export default Admin;