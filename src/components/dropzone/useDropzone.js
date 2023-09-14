import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
const UseMyDropzoneFile = ({ setShowTransform, myFile, onDrop }) => {
  const [progress, setProgress] = useState(-1);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "text/.dwg": [".dwg"],
    },
  });

  useEffect(() => {
    if (myFile.length !== 0) {
      setShowTransform(true);
      myFile.map((file) =>
        setTimeout(() => {
          setProgress(100);
        }, 100)
      );
    } else {
      setShowTransform(false);
      setProgress(-1);
    }
  }, [myFile, setShowTransform]);
  const accesptFile = myFile.map((file) => (
    <li key={file.path}>
      {file.path} - {Math.round(file.size / 1000)} kb
    </li>
  ));

  return (
    <div className="max-w-xl w-full mx-auto p-2 bg-gradient-to-r from-[#4a89f0] to-[#2377FC] rounded-lg">
      <section className=" bg-transparent h-[352px] rounded-xl text-white flex flex-col items-center justify-center py-8 px-4 border-2 hover:border-blue-300 border-dashed border-spacing-24 border-gray-300">
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <div className="w-full items-center flex flex-col gap-y-2">
            {/* cloud image */}
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
              <img
                src={`/icon/upload-cloud-01.svg`}
                alt="name"
                width={60}
                height={60}
              />
            </div>
            <h1 className="text-white text-xl lg:text-3xl font-bold text-center">
              Click to add or drag and drop your file to upload
            </h1>
          </div>
        </div>
        <aside>
          <ul className="pt-10">
            {accesptFile.length !== 0 && (
              <span className="flex flex-col md:flex-row items-center gap-x-2 ">
                {}
                file name :{<em className="text-sm">{accesptFile}</em>}
              </span>
            )}
            <div
              className={`w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700 z-0  ${
                progress > 0 ? "block" : "hidden"
              } transition-all ease-in-out  duration-100`}
            >
              <div
                className={`${
                  progress > 90 ? "bg-green-500" : "bg-amber-500"
                } ${
                  progress > 0 ? "block" : "hidden"
                } animate-wiggle opacity-100 z-10 w-full h-2  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full transition-all ease-in-out duration-100`}
              ></div>
            </div>
          </ul>
        </aside>
      </section>
    </div>
  );
};

export default UseMyDropzoneFile;
