import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import UserList from "./screens/UserList"
import AddUser from "./screens/AddUser"
import EditUser from "./screens/EditUser"




function App() {


  return (
    <>
    <Navbar/>
    <h1 className="text-5xl font-bold  text-center underline">
      Hello React Router Dom
    </h1>
    <Routes>
      <Route path='/' element={<UserList/>}/>
      <Route path='/adduser' element={<AddUser/>}/>
      <Route path='/edituser' element={<EditUser/>}/>
    </Routes>
   
    </>
  )
}

export default App
