import React from "react";

const Navbar = () => {
  return (
    // <div className="navbar flex justify-between px-8 py-6 bg-[#9747FF]">
    //   <div className="text-3xl font-[Poppins]">Product Name</div>
    //   <div>Dark</div>
    // </div>

    <nav class = "p-8 bg-purple-600">
      <div>
        <span class="text-2xl font-[Poppins] cursor-pointer"></span>
        <h2 class = "text-white font-sans text-xl">Sign Language Translator</h2>
      </div>
    </nav>
  );
};

export { Navbar };
