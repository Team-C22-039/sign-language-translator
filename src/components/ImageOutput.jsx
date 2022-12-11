import React from "react";

export default function ImageOutput(props) {
	return (
		<div className="w-full mx-auto sm:mx-0">
			<div
				id="image-box"
				className="flex flex-col gap-y-5 mx-5 p-10 drop-shadow-[2px_2px_10px_rgba(0,0,0,0.6)] bg-slate-600 rounded-lg transition-all ease-out duration-300"
			>
				<div id="img-output" className="w-[200px]">
					<img
						src={require(`./images/Dummy.png`)}
						alt=""
						className="p-5 bg-black"
					/>
				</div>
				<div>
					<input type="file" name="" id="img-input" />
				</div>
				<div id="img-preview" className="">
					<img src={require(`./images/Dummy.png`)} alt="" className="" />
				</div>
			</div>
		</div>
	);
}
