import { createContext, useReducer } from "react";

export  const UsersContext = createContext([]);

function usersReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [{ ...action.payload }, ...state];
      
    case "UPDATE":
      return state.map((item) =>
        item.id === action.payload.id
          ? { id: item.id, ...action.payload.data }
          : item
      );

    case "DELETE":
      return state.filter((user) => user.id !== action.payload);
    default:
      return state;
  }
}

function UsersContextProvider({ children }) {
  const [usersState, dispatch] = useReducer(usersReducer, []);

  // function addUser(userData) {
  //   dispatch({ type: "ADD", payload: userData });
  // }

  // function deleteUser(id) {
  //   dispatch({ type: "DELETE", payload: id });
  // }

  // function updateUser(id, userData) {
  //   dispatch({ type: "UPDATE", payload: { id: id, data: userData } });
  // }

  const value = {
    usersState,
    dispatch
  };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
}

export default UsersContextProvider;
