

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/hugs-frontend">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/read/:id" element={<Read />} />
        <Route path="/home/:id" element={<Home />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/delete/:id" element={<DeleteStudent />} />
        <Route
          path="/chatbox"
          element={
            <PrivateRoute>
              <ChatBox currentUser="currentUser" otherUser="otherUser" />
            </PrivateRoute>
          }
        />
        <Route
          path="/create"
          element={
            <StudentFormProvider>
              <PrivateRoute>
                <Create />
              </PrivateRoute>
            </StudentFormProvider>
          }
        />
        <Route
          path="/createb"
          element={
            <StudentFormProvider>
              <PrivateRoute>
                <Createb />
              </PrivateRoute>
            </StudentFormProvider>
          }
        />
        <Route
          path="/createc"
          element={
            <StudentFormProvider>
              <PrivateRoute>
                <Createc />
              </PrivateRoute>
            </StudentFormProvider>
          }
        />
        <Route path="/passwordreset" element={<PasswordReset />} />
        <Route path="/passwordresetconfirm" element={<PasswordResetConfirm />} />
        <Route path="/confirmreg" element={<Confirmreg />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

