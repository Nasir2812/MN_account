import { RouterProvider } from 'react-router-dom';

// routing
import router from 'routes';

//react query client import 
import queryClient from './queryClient/queryClient';

//redux store 
import store from './store/store';

// project imports
import NavigationScroll from 'layout/NavigationScroll';

import ThemeCustomization from 'themes';
import { QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';



// auth provider

// ==============================|| APP ||============================== //

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeCustomization>
          <NavigationScroll>
            <>
              <RouterProvider router={router} />
            </>
          </NavigationScroll>
        </ThemeCustomization>
      </QueryClientProvider>
    </Provider>
  );
}
