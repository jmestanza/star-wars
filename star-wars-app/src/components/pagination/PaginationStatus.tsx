import React from "react";

const PaginationStatus = (props: any) => {
  return (
    <div className="flex items-center justify-center font-primary bg-black">
      <p className="text-xl text-white font-bold mb-10">
        Page: {props.page} of {props.totalPages}
      </p>
    </div>
  );
};

export default PaginationStatus;
