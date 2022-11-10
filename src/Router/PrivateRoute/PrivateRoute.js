import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const locaticn = useLocation();

    if(loading){
        return <button className="btn btn-square loading"></button>
    }

    if(!user){
        return <Navigate to='/login'></Navigate>
    }
    return children
};

export default PrivateRoute;