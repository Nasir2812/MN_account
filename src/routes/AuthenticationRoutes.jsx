import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import { Navigate } from 'react-router';

// maintenance routing
const LoginPage = Loadable(lazy(() => import('views/pages/authentication/Login')));
const RegisterPage = Loadable(lazy(() => import('views/pages/authentication/Register')))
const ErrorPage =Loadable(lazy(()=> import('../routes/ErrorBoundary') ))
// const DashboardPage = Loadable(lazy(() =>import('../views/dashboard/Default')))


// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
   errorElement: <ErrorPage />, 
  children: [
 {
      path: '/',
      element: <Navigate to="register" replace />  
    },
    {
      path: 'register',
      element: <RegisterPage />
    },
    {
      path: 'login',
      element: <LoginPage />
    },
  ]
};

export default AuthenticationRoutes;
