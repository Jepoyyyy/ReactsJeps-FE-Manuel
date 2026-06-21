// router.tsx (or wherever your router is defined)
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./protectedRoutes.tsx";

// Lazy-load route components
const Login = lazy(() => import("@/container/login/index.tsx"));
const App = lazy(() => import("../App.tsx"));
const CV = lazy(() => import("../container/CV/index.tsx"));
const Homepage = lazy(() => import("../container/homepage/index.tsx"));
const Movies = lazy(() => import("../container/movies/index.tsx"));
const Todo = lazy(() => import("../container/todo/index.tsx"));

// Loading fallback component
const RouteLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto mb-4" />
      <p className="text-neutral-600 font-cascadia text-sm">Loading...</p>
    </div>
  </div>
);

export const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/login",
        element: (
          <Suspense fallback={<RouteLoader />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/",
        element: (
          <Suspense fallback={<RouteLoader />}>
            <App />
          </Suspense>
        ),
        children: [
          {
            element: (
              <Suspense fallback={<RouteLoader />}>
                <Homepage />
              </Suspense>
            ),
            index: true,
          },
          {
            path: "/cv-page",
            element: (
              <Suspense fallback={<RouteLoader />}>
                <CV />
              </Suspense>
            ),
          },
          {
            path: "/todo",
            element: (
              <Suspense fallback={<RouteLoader />}>
                <Todo />
              </Suspense>
            ),
          },
          {
            path: "/movies",
            element: (
              <Suspense fallback={<RouteLoader />}>
                <Movies />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);
