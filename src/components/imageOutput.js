import React from "react";

export default function ImageOutput(props) {
    return (
        <div className="w-full h-max mx-auto sm:mx-0">
            <div id="image-box" className="h-[50vh] p-20 mx-5 drop-shadow-[2px_2px_10px_rgba(0,0,0,0.6)] bg-slate-600 rounded-lg  transition-all ease-out duration-300">
                {/* <div className="bg-white p-20 m-20"></div> */}
            </div>
            {/* <video width="720" height="720" controls>
                <source src="{props.video}" type="video/mp4" />
                Your browser doesn't support video tag
            </video> */}
            {/* <img src="{props.image}" /> */}
        </div>
    );
}