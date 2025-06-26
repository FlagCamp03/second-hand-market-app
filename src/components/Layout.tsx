// src/components/Layout.tsx

/*
  This is the layout component that provides shared navigation and content outlet.
  It renders navigation links and wraps the current page using <Outlet />.
*/

import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div>
      <nav style={{ padding: 10, borderBottom: "1px solid #ccc" }}>
        <Link to="/login" style={{ marginRight: 10 }}>
          Login
        </Link>
        <Link to="/register" style={{ marginRight: 10 }}>
          Register
        </Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <div style={{ padding: 20 }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
