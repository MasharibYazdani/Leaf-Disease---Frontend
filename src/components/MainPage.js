import React from "react";
import Upload from "./Upload";
import Header from "./Header";

function MainPage() {
  return (
    <div className="bg-green-200 min-h-screen">
      <Header />
      <div className="container flex justify-around mx-auto mt-9 p-5 border border-gray-500 bg-green-700 rounded-lg shadow-lg">
        <h1 className="text-xl font-bold text-white">
          Upload leaf image of Potato, Maize and Rice plants only to detect the
          disease
        </h1>
      </div>
      <Upload />
    </div>
  );
}

export default MainPage;
