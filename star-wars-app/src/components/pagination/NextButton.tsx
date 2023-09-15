import React from "react";

const NextButton = (props: any) => {
  return (
    <button
      //   disabled={totalPages !== undefined && page >= totalPages}
      //   onClick={() => onNext()}
      disabled={props.disabled}
      onClick={props.onClick}
      className="hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
    >
      <svg
        className="w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 8 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
        />
      </svg>
    </button>
  );
};

export default NextButton;
