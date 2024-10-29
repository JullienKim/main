import React from "react";
import { Outlet, useParams, Link } from "react-router-dom";
import { users } from "../db";

const User = () => {
  const { userId } = useParams();
  return (
    <>
      <h1>
        User with id {userId} is name: {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to={"followers"}>Show Followers</Link>
      <Outlet
        context={{
          nameOfMyUsers: users[Number(userId) - 1].name,
        }}
      />
    </>
  );
};

export default User;
