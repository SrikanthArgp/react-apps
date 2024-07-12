import React, { useState,createContext } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

function App() {
  const [username, setUsername] = useState("");

  return (
   <AppContext.Provider value={{ username, setUsername }}>
  
   <div>
    {/* Input section */}
      <Login />

      {/* Display Section */}
      <User/>
      </div>  
</AppContext.Provider>

  );
}

export default App;
