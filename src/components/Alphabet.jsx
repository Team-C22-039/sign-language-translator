import React from "react";

export default function Alphabet({ alpha }) {
  return (
    <div>
      <img
        src={`https://alphabetizer.flap.tv/lists/images/Sign_Language_${alpha}.jpg`}
        className="h-40 w-40 aspect-square"
        alt="alphabet-img"
        id="imageResult"
      />
      <p className="text-xs lg:text-base">{alpha}</p>
    </div>
  );
}
