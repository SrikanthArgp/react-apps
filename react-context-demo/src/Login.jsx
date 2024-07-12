import React,{useContext} from "react";
import { AppContext } from "./App";

function Login() {
 const { setUsername } = useContext(AppContext);
  //const {setUsername} = props
  return (
    <div>
      <input
      type="text"
      placeholder="Enter name......."
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
}

export default Login;