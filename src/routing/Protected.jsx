import React from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
    const sessionLogin = sessionStorage.getItem('login') || 'false';

    console.log(sessionLogin)
    if (sessionLogin === 'false') {
        // Redirect to login page if not logged in
        return <Navigate to='/login' />;
    }

    // Render children if logged in
    return children;
};
