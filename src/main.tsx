import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/routes/index.tsx'
import { TokenProvider } from '@/hooks/useToken'
import { ErrorBoundary } from '@/components/ErrorBoundary'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <TokenProvider>
        <RouterProvider router={router} />
      </TokenProvider>
    </ErrorBoundary>
  </StrictMode>,
)

