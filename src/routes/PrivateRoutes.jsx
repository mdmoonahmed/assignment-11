import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate } from 'react-router-dom';
import Loading from '../components/Loader/Loader';

const PrivateRoutes = ({children}) => {
    const { user, loading } = useAuth();

    if(loading){
        return <Loading></Loading>
    }

    if(!user){
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
    return children;
};

export default PrivateRoutes;