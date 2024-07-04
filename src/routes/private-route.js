import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function PrivateRoute({ element: Component, ...rest }) {
  const user = localStorage.getItem('codeburger:userData');

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
        <Component {...rest} />
    </>
  );
}

PrivateRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}

export default PrivateRoute;
