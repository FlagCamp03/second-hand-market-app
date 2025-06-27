import React from "react";

const Navbar = () => {
  const user = {
    name: "testname",
    img: null,
  };

  return (
    <div className="navbar">
      <span className="logo">Chat List</span>
      <div className="user">
        {user.img ? <img src={user.img} alt="" /> : null}
        <span>userName:{user.name}</span>
        {/* <button>logout</button> */}
      </div>
    </div>
  );
};

export default Navbar;
