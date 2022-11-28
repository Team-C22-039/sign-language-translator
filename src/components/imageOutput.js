import React from "react";
import $ from 'jquery';

export default function ImageOutput(props) {
    const content = document.getElementById('content');
    $(content).addClass('container mx-auto my-10 flex')


    return (
        <div id="image-box" className="p-[100px] md:p-[200px] bg-slate-400 rounded-lg 
        drop-shadow-[0_0_7px_rgba(0,0,0,0.4)] transition-all ease-out duration-300">

            {/* <video width="720" height="720" controls>
                <source src="{props.video}" type="video/mp4" />
                Your browser doesn't support video tag
            </video> */}
            {/* <img src="{props.image}" /> */}
        </div>
    );
}