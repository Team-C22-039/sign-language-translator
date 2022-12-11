import React, { useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";

const SignRecognition = () => {
	const [selectedFile, setSelectedFile] = useState();
	const [preview, setPreview] = useState();
	const [model, setModel] = useState(null);
	const [classLabels, setClassLabels] = useState(null);

	const [loading, setLoading] = useState(false);
	const [predictedClass, setPredictedClass] = useState(null);

	useEffect(() => {
		// Load Model
		const runModel = async () => {
			const model = await tf.loadLayersModel("../../tfjs_2_64/model.json");
			setModel(model);
			// console.log(model.summary());
			// console.log('Model Loaded Successfully');
		};

		// Get alphabet JSON
		const getClassLabels = async () => {
			const res = await fetch("../../tfjs_model/alphabet.json");

			const data = await res.json();

			setClassLabels(data);
		};

		runModel();
		getClassLabels();
	}, []);

	useEffect(() => {
		if (!selectedFile) {
			setPreview(undefined);
			return;
		}
		const objectUrl = URL.createObjectURL(selectedFile);
		setPreview(objectUrl);

		// free memory when ever this component is unmounted
		return () => URL.revokeObjectURL(objectUrl);
	}, [selectedFile]);

	const readImageFile = (file) => {
		return new Promise((resolve) => {
			const reader = new FileReader();

			reader.onload = () => resolve(reader.result);

			reader.readAsDataURL(file);

			setSelectedFile(file);
		});
	};

	const createHTMLImageElement = (imageSrc) => {
		return new Promise((resolve) => {
			const img = new Image();

			img.onload = () => resolve(img);

			img.src = imageSrc;
		});
	};

	const handleImageAndPredict = async (e) => {
		if (e.target.files.length === 0) {
			setPredictedClass(null);
		}

		if (e.target.files.length === 1) {
			setLoading(true);
			const imageSrc = await readImageFile(e.target.files[0]);
			const image = await createHTMLImageElement(imageSrc);

			const [predictedClass] = tf.tidy(() => {
				const tensorImg = tf.browser
					.fromPixels(image)
					.resizeNearestNeighbor([224, 224])
					.toFloat()
					.expandDims();
				const result = model.predict(tensorImg);

				// console.log(tf.argMax(result));
				const predicted_index = result.as1D().argMax().dataSync()[0];

				const predictedClass = classLabels[predicted_index];
				return [predictedClass];
			});

			setPredictedClass(predictedClass);
			setLoading(false);
		}
	};

	return (
		<div className="h-fit text-center my-[14rem]">
			<div id="titleText">
				<p className="font-Roboto text-center text-lg md:text-[5rem]">
					Bahasa Isyarat ke Teks
				</p>
			</div>

			<div
				id="signRecognition"
				className="flex flex-col lg:flex-row lg:m-20 items-center justify-center"
			>
				<div className="upload flex flex-col items-center justify-start basis-3/4">
					<form className="space-x-6">
						<div className="shrink-0"></div>
						<label className="block">
							<input
								type="file"
								className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 hover:cursor-pointer py-10"
								name="image"
								onChange={handleImageAndPredict}
							/>
						</label>
					</form>
					{selectedFile && (
						<img src={preview} alt="" className="h-48 w-96 object-contain" />
					)}

					{/* Loader Animation */}
					<div className="flex">
						<p className="font-normal text-2xl p-5">Hasil: {predictedClass}</p>
						<div
							className={
								loading
									? "flex justify-center items-center"
									: "justify-center items-center hidden"
							}
						>
							<div className="loader bg-white p-4 rounded-full flex space-x-2">
								<div className="w-2 h-2 bg-gray-800 rounded-full animate-bounce"></div>
								<div className="w-2 h-2 bg-gray-800 rounded-full animate-bounce"></div>
								<div className="w-2 h-2 bg-gray-800 rounded-full animate-bounce"></div>
							</div>
						</div>
					</div>
				</div>
				<div className="" id="signRecogRules">
					<div id="" className="">
						<p className="font-semibold text-2xl py-5 text-center lg:text-start">
							Catatan:
						</p>
					</div>
					<ul className="list-disc list-outside text-start">
						<li>
							Model masih belum mampu memprediksi secara akurat dikarenakan
							minimnya data pada dataset
						</li>
						<li>
							Pastikan background untuk memfoto bentuk tangan berwarna putih
						</li>
						<li>Model tidak bisa memprediksi huruf J dan Z</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SignRecognition;
