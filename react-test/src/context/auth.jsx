//create an auth context with login and signout functions

import React, { createContext, useContext, useState } from 'react';


//async delay function
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


const db = [{
    username: 'admin@gmail.com',
    name: 'Vivek Dutta Mishra',
    password: 'p@ssword',
    role: 'admin'
},
{
    username: 'user@gmail.com',
    name: 'John Doe',
    password: 'p@ssword',
    role: 'user'
    
}

]

const context = createContext();

export const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const login = async (username, password) => {
        // simulate login logic
        setError(null);
        await delay(100);
        if (!username || !username.includes('@')) {
            setError('Invalid username');
            return;
        }

        if (!password) {
            setError('Invalid password');
            return;
        }

        const user = db.find(u => u.username === username && u.password === password);
        if (user) {
            setUser({ name: user.name, role: user.role });
            setError(null);
        } else {
            setUser(null);
            setError('invalid credentials');
        }

    }
    const logout = () => {
        setUser(null)
        setError(null);
    };

    return <context.Provider value={{ login, logout, error, user }}>
        {children}
    </context.Provider>
}

export const useAuth = () => {
    return useContext(context);
}