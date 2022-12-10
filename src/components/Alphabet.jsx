import React from "react";

export default function Alphabet(props){
    return(
        <div>
            <img
                src={`../images/Alphabet-img/${props.alpha}.jpg`}
                className="h-40 w-40 aspect-square"
                alt="alphabet-img"
                id="imageResult"
            />
            <p className="text-xs lg:text-base">{props.alpha}</p>
        </div>
    )
}