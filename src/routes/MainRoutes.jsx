import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import AuthGuard from './authGuard';
import { Navigate } from 'react-router';

// dashboard routing
const ErrorPage = Loadable(lazy(() => import('../routes/ErrorBoundary')))
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Default')))
const User = Loadable(lazy(() => import('../views/pages/User Mangement/User')))



// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: (
    <AuthGuard>
      <MainLayout />
    </AuthGuard>
  ),
  errorElement: <ErrorPage />,
  children: [
    {
      path: 'dashboard',
      element: <Dashboard />
    },
    {
      path: '',
      element: <Navigate to="dashboard" replace />
    },
     {
      path: 'user',
      element: <User />
    }
  ]
};

export default MainRoutes;
