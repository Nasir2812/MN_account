import { Navigate } from 'react-router-dom';


const AuthGuard = ({ children }) => {
    const isAuthenticated = Boolean(localStorage.getItem('token'));


    if (!isAuthenticated) {

        return <Navigate to="/login" replace />;
    }

    return children
}
export default AuthGuard