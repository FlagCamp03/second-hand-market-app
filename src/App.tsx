// src/App.tsx

/*
  This is the root entry component of the React application.
  It configures routing using react-router-dom and wraps all pages with a Layout.
*/

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Page Components
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ProductCreate from "./pages/ProductCreate";
import Home from "./pages/Home";

// Layout Component
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

const App: React.FC = () => {
  return (
    // Router Container
    <Router>
      <Routes>
        {/* Wrap all routes with a common layout */}
        <Route path="/" element={<Layout />}>
          {/* Default route shows home page */}
          <Route index element={<Home />} />

          {/* Define routes */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          
          {/* Protected routes - require authentication */}
          <Route 
            path="product/new" 
            element={
              <ProtectedRoute>
                <ProductCreate />
              </ProtectedRoute>
            } 
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
