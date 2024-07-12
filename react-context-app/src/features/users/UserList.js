
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { useContext } from "react";
import {UsersContext}   from "../../store/users-context";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const UserList = () => {

  const {usersState, dispatch} = useContext(UsersContext);
  // const users = usersCtx.usersState;
  // const dispatch = usersCtx.dispatch


  const handleRemoveUser = (id) => {
    dispatch({ type: "DELETE", payload: id });
  }

  const renderCard = () => usersState.map(user => (
    <div className="bg-gray-300 p-3 flex items-center justify-between" key={user.id}>
      <div>
        <h3 className="font-bold text-lg text-gray-700">{user.name}</h3>
        <span className="font-normal text-gray-600">{user.email}</span>
      </div>
      <div className="flex gap-4">
        <Link to={`edit-user/${user.id}`}>
         

          <MdEdit
                    className="w-1/10 hover:bg-sky-600 text-2xl p-1 rounded 
                    transition duration-500 ease-in-out"
                  />

        </Link>

        <FaTrash
                    className="w-1/10 hover:bg-red-400 text-xl  p-1 rounded 
                    transition duration-500 ease-in-out"
                    onClick={() => {
                      handleRemoveUser(user.id);
                     
                    }}
                  />

      </div>
    </div>
  ))

  return (
    <div>
      <Link to="/add-user"><Button>Add User</Button></Link>
      <div className="grid gap-5 md:grid-cols-2">
        {usersState.length ? renderCard() : <p className="text-center col-span-2 text-gray-700 font-semibold">No User</p>}
      </div>
    </div>
  )
}

export default UserList