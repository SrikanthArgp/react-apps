import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AddUser from "./screens/AddUser";
import EditUSer from "./screens/EditUSer";
import UserList from "./screens/UserList";


function App() {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold underline text-center">
        Hello React Router DOM CRUD!
      </h1>
   
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/AddUser" element={<AddUser />} />
        <Route path="/EditUser" element={<EditUSer />} />
      </Routes>
  
    </div>
  );
}

export default App;
