import React from "react";

export default function ImageOutput(props) {
    return (
        <div id="image-box" className="h-[50vh] min-w-max sm:mx-auto sm:h-[60vh] sm:w-max md:h-[65vh] md:w-[80vw] xl:h-[70vh] xl:w-[45vw] mb-14 bg-slate-400 rounded-lg 
        drop-shadow-[0_0_7px_rgba(0,0,0,0.4)] transition-all ease-out duration-300">
            {/* <video width="720" height="720" controls>
                <source src="{props.video}" type="video/mp4" />
                Your browser doesn't support video tag
            </video> */}
            {/* <img src="{props.image}" /> */}
        </div>
    );
}