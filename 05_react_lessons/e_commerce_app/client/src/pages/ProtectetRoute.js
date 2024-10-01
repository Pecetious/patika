import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function ProtectedRoute({ element,admin }) {
    const { loggedIn,user } = useAuth();
    if (admin && user.role !== "admin" ){
        return <Navigate to="/"/>
    }
    return loggedIn ? element : <Navigate to="/signin" />;
}

export default ProtectedRoute;
