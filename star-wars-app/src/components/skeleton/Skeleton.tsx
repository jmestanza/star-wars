import React from "react";

const Skeleton = () => {
  return (
    <div className="flex group opacity-80 overflow-hidden m-5 border-solid border-2 border-stone-600 rounded hover:border-yellow-500 hover:opacity-100 bg-black w-card h-card">
      <div className="grayscale group-hover:grayscale-0 relative bg-slate-800 cursor-pointer group-hover:scale-110 transition duration-300 ease-in-out overflow-hidden w-full">
        <div className="animate-pulse flex">
          <div className="rounded bg-slate-600 h-card w-card"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
