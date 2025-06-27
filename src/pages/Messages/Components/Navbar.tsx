import React from "react";
import useAuthStore, { User } from "../../../store/auth";

const Navbar = () => {
  // const user: User | null = useAuthStore((state) => state.user || null);
  const user: User = {
    id: 300,
    email: "test@test.com",
    nickname: "test1",
  };

  return (
    <div className="navbar">
      <span className="logo">Chat List</span>
      <div className="user">
        {user && user.avatar ? <img src={user.avatar} alt="" /> : null}
        {user ? <span>userName:{user.id}</span> : null}
        {/* <button>logout</button> */}
      </div>
    </div>
  );
};

export default Navbar;
