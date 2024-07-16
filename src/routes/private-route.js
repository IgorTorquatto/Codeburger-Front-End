import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Header } from '../components';
import { toast } from 'react-toastify'

function PrivateRoute({ element: Component, isAdmin, ...rest }) {
  const user = localStorage.getItem('codeburger:userData');

  const acessDenied = () =>{
    toast.error("Seu usuário não tem autorização para acessar essa rota")
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if(isAdmin && !JSON.parse(user).admin){
    acessDenied()
    return <Navigate to="/" />
  }

  return (
    <>
        {!isAdmin && <Header />}
        <Component {...rest} />
    </>
  );
}

PrivateRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    isAdmin: PropTypes.bool
}

export default PrivateRoute;
