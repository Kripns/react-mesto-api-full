import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute(props) {
  const { isLoggedIn, children } = props;

  return !isLoggedIn ? <Navigate to='/signin' replace /> : children;
}

export default ProtectedRoute;
