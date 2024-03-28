import React from "react";

const Skeleton = ({ height, width }: { height: string; width: string }) => {
  return (
    <div
      className={`flex m-5 border-solid border-2 border-stone-600 rounded ${width} ${height}`}
    >
      <div className="grayscale bg-slate-800 w-full animate-pulse flex">
        <div className={`rounded bg-slate-600 ${width} ${height}`} />
      </div>
    </div>
  );
};

export default Skeleton;
