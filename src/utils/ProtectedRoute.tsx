import React from 'react';
import { Navigate } from 'react-router-dom';
import IProtectedRouteProps from './interfaces/IProtectedRouteProps';

const ProtectedRoute: React.FC<IProtectedRouteProps> = ({ children }) => {
  // Verifica se o token está presente no localStorage
  let token = localStorage.getItem('token');

  token = 'teste'
  // Se o token não existir, redireciona para a página de login
  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }

  // Se o token existir, renderiza os children
  return <>{children}</>;
};

export default ProtectedRoute;