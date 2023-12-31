import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Route.jsx';
// import AuthProvider from './Providers/AuthProvider';




import {
  
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProvider from './Providers/AuthProvider';
import PrivateRoute from './Routes/PrivateRoute';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

    <QueryClientProvider client={queryClient}>

   <div className='max-w-7xl mx-auto'>
     <RouterProvider router={router} />
    </div>
   
    </QueryClientProvider>

  
    </AuthProvider>
  </React.StrictMode>,
)
