import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

export const Cart = () => {


  const {state} = useContext(ShopContext);

  const totalAmount = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col  items-center">
      {totalAmount > 0 ? (
        <div className="flex justify-start w-[50%]">
          <h1 className="text-2xl">Your Cart Items</h1>
        </div>
      ) : 
        null
      }

      <div className="flex flex-col justify-center items-center">
        {state.length > 0 ? (
          state.map((product) => {
            return <CartItem data={product} />;
          })
        ) : (
          <h1 className="text-rose-600"> Your Shopping Cart is Empty</h1>
        )}
      </div>

      {totalAmount > 0 ? (
        <div className="w-[50%]">
          <div className="flex items-center justify-end mr-20">
            <p className="text-2xl text-green-500">
              {" "}
              Total Amount: ${totalAmount.toFixed(2)}{" "}
            </p>
          </div>
          <div className="flex items-center justify-center mt-10">
            <button
              className="w-40 h-12 bg-gray-900 text-white rounded-lg m-2 cursor-pointer"
              onClick={() => navigate("/")}
            >
              {" "}
              Continue Shopping{" "}
            </button>
            <button
              className="w-40 h-12 bg-gray-900 text-white rounded-lg m-2 cursor-pointer"
              onClick={() => {
                //   checkout();
                navigate("/checkout");
              }}
            >
              {" "}
              Checkout{" "}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
