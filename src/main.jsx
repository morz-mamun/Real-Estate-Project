import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// react router import
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import AuthProvider from './AuthProvider/AuthProvider';

// tanStack query
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <QueryClientProvider client={queryClient}>
     <div className='max-w-screen-2xl mx-auto bg-black bg-opacity-5 overflow-x-scroll'>
    <RouterProvider router={router} />
    </div>
    </QueryClientProvider>
     </AuthProvider>
  </React.StrictMode>,
)
