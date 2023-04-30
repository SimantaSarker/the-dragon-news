import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({children}) => {
  const {user,loading}=useContext(AuthContext);
  const location=useLocation();
  if(loading)
  {
   return <Spinner animation="border" />;
  }
  if(user)
  {
    return children;
  }
  return <Navigate to='/login'state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;