import React,{useContext} from "react";
import { AppContext } from "./App";

function User() {
const { username } = useContext(AppContext);
//const {username} = props
  return (
    <div>
      <h1>User: {username}</h1>
    </div>
  );
}

export default User;