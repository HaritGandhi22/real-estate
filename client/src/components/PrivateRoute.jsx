//to protect the profile page if user not authenticated then profile page should not be visible
import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
    const { currentUser } = useSelector((state) => state.user);

    return currentUser ? <Outlet /> : <Navigate to='/sign-in' />
}
