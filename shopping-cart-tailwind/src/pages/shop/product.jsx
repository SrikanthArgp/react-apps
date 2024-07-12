import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { title, price, image } = props.item;
  //console.log("In Product", props.item.title);
  const { dispatch } = useContext(ShopContext);

  return (
    <div className=" flex-col justify-center items-center p-2 m-10 shadow-lg rounded-md hover:scale-105 duration-200">
      <img className=" w-auto h-40 mx-auto" src={image} alt="no product" />
      <div className="text-center">
        <p>
          <b>{title}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button
        className="flex justify-center mx-auto bg-slate-800 p-2 text-white rounded-md"
        onClick={() => {
          props.item.quantity = 1
          dispatch({ type: "ADD", payload: props.item });
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};
