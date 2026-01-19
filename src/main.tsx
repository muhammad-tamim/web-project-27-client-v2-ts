import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'
import { RouterProvider } from 'react-router';
import { routes } from './routes/Routes';
import MaxWidth from './components/ui/MaxWidth';
import AuthProvider from './providers/AuthProvider';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MaxWidth>
      <AuthProvider>
        <RouterProvider router={routes}></RouterProvider>
      </AuthProvider>
    </MaxWidth>
  </StrictMode>,
)