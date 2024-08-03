import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom';
import Login from '../pages/guest/Login';
import Customers from '../pages/private/customer';

const route = [
    { path: "/", element: <Navigate to="/login" /> },
    { path: "/login", element: <Login /> },
    { path: "/customer", element: <Customers /> },
];
function AppRoute() {
    const router = useRoutes(route)
    return router;
}

export default AppRoute