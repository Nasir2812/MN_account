import { createBrowserRouter } from 'react-router-dom';

// routes
import AuthenticationRoutes from './AuthenticationRoutes';
import MainRoutes from './MainRoutes';

// ==============================|| ROUTING RENDER ||============================== //

const router = createBrowserRouter([ AuthenticationRoutes,MainRoutes], {
  basename: import.meta.env.VITE_APP_BASE_NAME
});

export default router;
