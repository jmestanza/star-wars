import React, { MouseEventHandler } from "react";

const PrevButton = ({
  noData,
  disabled,
  onClick,
}: {
  noData: boolean;
  disabled: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  if (noData) return null;

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
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
          d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
        />
      </svg>
    </button>
  );
};

export default PrevButton;
