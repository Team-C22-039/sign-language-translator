import React from "react";

function ImageOutput(props) {
	return (
		<div className="w-full mx-auto sm:mx-0">
			<div
				id="image-box"
				className="flex flex-col items-center
				gap-y-5 gap-x-5 mx-5 p-10 drop-shadow-[2px_2px_10px_rgba(0,0,0,0.6)] 
				bg-slate-600 rounded-lg transition-all ease-out duration-300"
			>
				<div className="">
					<img
						id="img-output"
						src={props.imgResult}
						alt=""
						className="w-[50vw] md:w-[40vw] lg:w-[50vw] xl:w-[30vw]"
					/>
					<h3 className="text-xl text-center bg-white">{props.textInput}</h3>
				</div>
			</div>
		</div>
	);
}

export { ImageOutput };
