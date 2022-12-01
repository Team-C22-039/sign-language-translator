import React, { useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";

const SignRecognition = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

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

  const getImage = (e) => {
    console.log("Get Image");
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  const [model, setModel] = useState();

  async function loadModel() {
    try {
      const model = await tf.loadLayersModel("./model/model.json");
      setModel(model);
    } catch (err) {
      console.log(err);
      console.log("failed to load model");
    }
  }

  useEffect(() => {
    tf.ready().then(() => {
      loadModel();
    });
  });

  return (
    <div className="h-screen bg-gray-300 text-center">
      <div id="titleText">
        <p className="font-normal text-5xl p-10">ASL Alphabet</p>
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
                onChange={getImage}
              />
            </label>
          </form>
          {selectedFile && (
            <img
              src={preview}
              className="h-48 w-96 object-contain"
              alt="img-preview"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SignRecognition;
