import React, { useState } from "react";
import Prediction from "./Prediction";

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [prediction, setPrediction] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);

    // Display uploaded image preview
    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", selectedFile);

    if (!selectedFile) {
      setImageUrl(null);
    }

    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="container flex justify-around mx-auto mt-10 p-6 border border-gray-500 bg-green-700 rounded-lg shadow-lg max-md:flex-wrap">
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="file"
              onChange={handleFileChange}
              className=" self-center m-10 mt-14 p-2 border border-gray-500 rounded-md text-white max-sm:w-full max-sm:self-auto"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Upload
            </button>
          </form>
        </div>
        {imageUrl && (
          <div className="mt-6">
            <img
              src={imageUrl}
              alt="Uploaded"
              className="max-w-full h-60 border border-black"
            />
          </div>
        )}
      </div>
      <Prediction prediction={prediction} />
    </div>
  );
}

export default Upload;
