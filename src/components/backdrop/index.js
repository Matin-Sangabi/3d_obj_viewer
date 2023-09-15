const Backdrop = () => {
  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-gray-600 bg-opacity-40">
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex flex-col gap-y-2 items-center bg-gradient-to-r from-[#4a89f0] via-[#206de7] to-[#2377FC] rounded-lg shadow py-6 px-4">
          <span className="">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              //   className="w-20 h-20"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </span>
          <h1 className="text-xl text-slate-100  py-6 px-4">
            The data is being processed. It may take a few minutes. Please wait
            ...
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Backdrop;
