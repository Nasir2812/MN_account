import { Navigate } from 'react-router-dom';


const AuthGuard = ({ children }) => {
    const isAuthenticated = !!localStorage.getItem('token');
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}
export default AuthGuard