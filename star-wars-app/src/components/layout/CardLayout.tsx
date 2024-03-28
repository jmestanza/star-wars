import React from "react";
import { ReactNode } from "react";
import Basic from "../../../models/basic.dto";
import Skeleton from "../skeleton/Skeleton";

function CardLayout<T extends Basic>({
  asset,
  children,
}: {
  asset: T;
  children: ReactNode;
}) {
  return !asset.loaded ? (
    <Skeleton />
  ) : (
    <div className="flex group opacity-80 overflow-hidden m-5 border-solid border-2 border-stone-600 rounded hover:border-yellow-500 hover:opacity-100 bg-black w-card h-card">
      <div className="grayscale group-hover:grayscale-0 relative bg-gray-50/75 cursor-pointer group-hover:scale-110 transition duration-300 ease-in-out overflow-hidden w-full">
        {children}
      </div>
    </div>
  );
}

export default CardLayout;
