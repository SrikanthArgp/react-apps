import { createContext, useReducer } from "react";

export const UsersContext = createContext([])

function userReducer(state, action){
    switch(action.type) {
      case "ADD":
        return [
          { id: Math.random().toString(), name: action.payload.name, age: action.payload.age },
          ...state,
        ];
  
      case "UPDATE":
        return state.map((user) => {
                 return user.id === action.payload.id ? { id: action.payload.id, name: action.payload.name, age: action.payload.age } : user})
  
      case 'DELETE':
        return state.filter((item) => item.id != action.payload);
  
      default:
        return state
  
        }
  
  }

  function UsersContextProvider({children}) {

    const [usersState, dispatch] = useReducer(userReducer, [])

    return (
        <UsersContext.Provider
         value={{usersState, dispatch}}>{children}</UsersContext.Provider>
    )

  }

  export default UsersContextProvider;