import React from "react";
import { useOutletContext } from "react-router-dom";

interface FollowersContext {
  nameOfMyUsers: String;
}

const Followers = () => {
  // const ctx = useOutletContext();
  // console.log(ctx);
  const { nameOfMyUsers } = useOutletContext<FollowersContext>();
  return <div>Followers</div>;
};

export default Followers;
