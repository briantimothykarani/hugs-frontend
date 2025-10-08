import React, { lazy, Suspense } from 'react'; // <-- Import lazy and Suspense
import ReactDOM from 'react-dom/client';
import './index.css';

import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';

// --- 1. CONVERT STATIC IMPORTS TO LAZY IMPORTS ---
// Each of these will be compiled into a separate, small JavaScript chunk.

// Core App/Landing Page (The default path '/')
const App = lazy(() => import('./App'));

// Authentication
const Signup = lazy(() => import('./components/Signup'));
const Login = lazy(() => import('./components/Login'));
const Logout = lazy(() => import('./components/Logout'));
const Confirmreg = lazy(() => import('./components/Confirmreg'));
const PasswordReset = lazy(() => import('./components/PasswordReset'));
const PasswordResetConfirm = lazy(() => import('./components/PasswordResetConfirm'));

// CRUD/Data Pages
const Home = lazy(() => import('./components/Home'));
const Read = lazy(() => import('./components/Read'));
const Update = lazy(() => import('./components/Update'));
const DeleteStudent = lazy(() => import('./components/DeleteStudent'));

// Multi-Step Form Components
const Create = lazy(() => import('./components/Create'));
const Createb = lazy(() => import('./components/Createb'));
const Createc = lazy(() => import('./components/Createc'));

// Other Components
const ChatBox = lazy(() => import('./components/ChatBox'));
const PrivateRoute = lazy(() => import('./components/PrivateRoute')); 

// Context Provider (should be imported statically)
import { StudentFormProvider } from './context/StudentFormContext';


// --- 2. DEFINE ROUTER USING LAZY COMPONENTS ---
const router = createBrowserRouter([
    { path: '/', element: <App /> }, // App renders the LandingPage
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <Signup /> },
    { path: '/logout', element: <Logout /> },

    { path: '/read/:id', element: <Read /> },
    { path: '/home/:id', element: <Home /> },
    { path: '/update/:id', element: <Update /> },
    { path: '/delete/:id', element: <DeleteStudent /> },

    // Protected Chat Route
    { 
        path: '/chatbox', 
        element: <PrivateRoute><ChatBox currentUser="currentUser" otherUser="otherUser" /></PrivateRoute>,
    },
    
    // Multi-step form routes wrapped in StudentFormProvider
    {
        path: '/create',
        element: (
            <StudentFormProvider>
                <PrivateRoute>
                    <Create />
                </PrivateRoute>
            </StudentFormProvider>
        ),
    },
    {
        path: '/createb',
        element: (
            <StudentFormProvider>
                <PrivateRoute>
                    <Createb />
                </PrivateRoute>
            </StudentFormProvider>
        ),
    },
    {
        path: '/createc',
        element: (
            <StudentFormProvider>
                <PrivateRoute>
                    <Createc />
                </PrivateRoute>
            </StudentFormProvider>
        ),
    },

    // Public routes
    { path: '/passwordreset', element: <PasswordReset /> },
    { path: '/passwordresetconfirm', element: <PasswordResetConfirm /> },
    { path: '/confirmreg', element: <Confirmreg /> },
]);

// --- 3. WRAP ROUTER WITH SUSPENSE ---
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {/* The Suspense boundary shows this fallback whenever a lazy component is being downloaded */}
        <Suspense fallback={<div className="flex justify-center items-center h-screen text-xl font-semibold text-blue-600">Loading Page Content...</div>}>
            <RouterProvider router={router} />
        </Suspense>
    </React.StrictMode>
);
