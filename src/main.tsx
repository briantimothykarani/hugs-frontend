

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,

} from 'react-router-dom';

import App from './App';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import Home from './components/Home';
import Read from './components/Read';
import Update from './components/Update';
import ChatBox from './components/ChatBox';
import DeleteStudent from './components/DeleteStudent';
import Confirmreg from './components/Confirmreg';
import PasswordReset from './components/PasswordReset';
import PasswordResetConfirm from './components/PasswordResetConfirm';

import Create from './components/Create';
import Createb from './components/Createb';
import Createc from './components/Createc';
import PrivateRoute from './components/PrivateRoute';
import { StudentFormProvider } from './context/StudentFormContext';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/logout', element: <Logout /> },

  {
   path:'/read/:id',
   element:<Read />,
   },
   {
    path:'/home/:id',
   element:<Home />,
   }, 
  {
    path: '/update/:id',
    element: <Update />,
  },
  {
    path: '/delete/:id',
    element: <DeleteStudent />,
  },
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
  // ...other routes
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
