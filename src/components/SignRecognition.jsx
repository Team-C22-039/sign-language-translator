import React, { useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";

const SignRecognition = () => {
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState()
    const [model, setModel] = useState(null);
    const [classLabels, setClassLabels] = useState(null);

    const [loading, setLoading] = useState(false);
    const [predictedClass, setPredictedClass] = useState(null);

    useEffect(() => {
        // Load Model
        const runModel = async() => {
            const model = await tf.loadLayersModel("../../tfjs_model/model.json");
            setModel(model);
            // console.log(model.summary());
            // console.log('Model Loaded Successfully');
        }

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
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
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
                const tensorImg = tf.browser.fromPixels(image).resizeNearestNeighbor([32,32]).toFloat().expandDims();
                const result = model.predict(tensorImg);

                // console.log(tf.argMax(result));
                const predicted_index = result.as1D().argMax().dataSync()[0];

                const predictedClass = classLabels[predicted_index];
                return [predictedClass];
            });

            setPredictedClass(predictedClass);
            setLoading(false);
        }
    }

    return (
        <div className="h-screen bg-gray-300 text-center">
            <div id="titleText">
                <p className="font-normal text-5xl p-10">
                    ASL Alphabet
                </p>
            </div>

            <div id="signRecognition">
                <div className="upload flex flex-col items-center justify-center ">
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
                    {selectedFile &&  <img src={preview} className="h-48 w-96 object-contain" /> }
                    <p className="font-normal text-2xl p-5">
                        Result: {predictedClass}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignRecognition;