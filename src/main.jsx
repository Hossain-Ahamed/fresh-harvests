import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from 'react-query'
import AuthProvider from './contexts/AuthContext/AuthProvider.jsx'
const helmetContext = {};
const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
      <HelmetProvider context={helmetContext}>
        <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
      </AuthProvider>
    </QueryClientProvider>

  </StrictMode>,
)
