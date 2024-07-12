import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-cyan-800 h-fit p-2">
      <div className="flex justify-between items-center text-white text-xl">
        <div>
          <Link to="/"> All Users
          </Link>
        </div>
        <div>
          <Link to="/AddUser"> Add User
          </Link>
        </div>
        <div>
          <Link to="/EditUser"> Edit User
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
