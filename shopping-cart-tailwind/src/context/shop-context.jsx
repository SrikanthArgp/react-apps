import { createContext, useReducer } from "react";

export const ShopContext = createContext([]);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const tempstate = state.filter((item) => action.payload.id === item.id);
      if (tempstate.length > 0) {
        return state;
      } else {
        return [...state, action.payload];
      }
    case "INCREASE":
      const nextState = state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      return nextState;
    case "DECREASE":
      const newState = state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      return newState;
    case "REMOVE":
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

export const ShopContextProvider = ({children}) => {
 
  const [state, dispatch] = useReducer(reducer, []);
  const info = { state, dispatch };
  return (
    <ShopContext.Provider value={info}>{children}</ShopContext.Provider>
  );
};
