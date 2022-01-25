import React from "react";

const Navbar = () => {
  return (
    <div className={"bg-red-600 p-6"}>
      <div className={"container mx-auto flex justify-between"}>
        <h1>Navbar</h1>
        <div className={"flex flex-row space-x-10"}>
          <h1>How to protect yourself</h1>
          <button>Are You Sick?</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
