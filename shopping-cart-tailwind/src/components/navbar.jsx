import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { ShopContext } from "../context/shop-context";

export const Navbar = () => {
  const { state } = useContext(ShopContext);

  return (
    <div className="w-full h-20 bg-gray-900 flex justify-between items-center sticky top-0">
      <div className="mr-12 flex items-center text-white ">
        <Link className="ml-5 text-2xl" to="/">
          Home
        </Link>
      </div>
      <div className="mr-12 flex items-center text-white text-2xl">
        Uttara Shop
      </div>
      <div className="mr-12 flex items-center text-white ">
        <Link className="ml-5 text-2xl" to="/contact">
          Contact
        </Link>
        
        <Link className="ml-5 text-2xl" to="/cart">
      
          <div className="relative">
            <BsCart3 className="  w-8 h-8" />
            {/* <div className="absolute h-5 w-5 rounded-full bg-red-600 -right-2 -top-2"> */}
            {state.length === 0 ? (
              <p></p>
            ) : (
              <div className="absolute h-5 w-5 rounded-full bg-red-600 -right-2 -top-2">
                <p className="text-center  font-bold p-.5 text-sm">
                  {state.length}
                </p>
              </div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};
