import React from "react";
import useAuthStore from "../store/auth";

const Test = () => {
  const userId = useAuthStore((state) => (state.user ? state.user.id : 1));

  return (
    <>
      <div>this is a test page</div>
      <button>test1</button>
      <button>test2</button>
      <h1>{userId}</h1>
    </>
  );
};

export default Test;
