import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import AuthGuard from './authGuard';
import { Navigate } from 'react-router';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/MN_Account/',
  element: (
    <AuthGuard>
      <MainLayout />
    </AuthGuard>
  ),
  children: [
   {
    path:'',
    element:<Navigate to= '/register' replace/>
   },
   {
      path: 'dashboard',
      element: <DashboardDefault />
    }
  ]
};

export default MainRoutes;
