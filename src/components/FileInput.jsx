import React from "react";

export default function FileInput() {
	return (
		<div>
			<label htmlFor="input-file">
				<span className="sr-only">Choose Audio File</span>
				<input
					id="img-input"
					type="file"
					className="
                    inline-block bg-black text-white w-[50vw] sm:w-[25vw]
                    
                    file:mr-2"
					accept=".jpg .jpeg .png"
				/>
			</label>
		</div>
	);
}
