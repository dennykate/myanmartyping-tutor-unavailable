import React from "react";

const SpaceKey = ({ errorSpaceKey, activeSpaceKey }) => {
  return (
    <div
      className={`flex items-center w-[350px]  h-[60px] px-[10px] ${
        errorSpaceKey
          ? "bg-red-200"
          : activeSpaceKey
          ? "bg-green-200"
          : "bg-white"
      } `}
    ></div>
  );
};

export default SpaceKey;
