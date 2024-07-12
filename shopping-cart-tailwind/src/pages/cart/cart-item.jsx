import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { title, price, image, quantity } = props.data;
  const {dispatch} = useContext(ShopContext);

  return (
    <div className="h-55 flex items-center justify-between m-8 w-[100%] shadow-2xl rounded-md">
      <div>
        <img className="w-auto h-40 " src={image} alt="no product" />
      </div>
      <div className="mr-4 text-center">
        <p>
          <b>{title}</b>
        </p>
        <p> Price: ${price}</p>
      </div>
      <div className="mr-5">
        <div className="flex justify-center">
          <button
            onClick={() => {
              if (quantity > 1) {
                dispatch({ type: "DECREASE", payload: props.data });
              } else {
                dispatch({ type: "REMOVE", payload: props.data });
              }
            }}
          >
            {" "}
            -{" "}
          </button>
          <p className="w-10 text-center font-bold">{quantity}</p>
          <button
            onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
          >
            {" "}
            +{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
