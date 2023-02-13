import React from "react";

const SpaceKey = ({ errorSpaceKey, activeSpaceKey }) => {
  const isActivAndErrorSpcaeKey = errorSpaceKey
    ? "bg-red-200"
    : activeSpaceKey
    ? "bg-green-200"
    : "bg-white";

  return (
    <div
      className={`flex items-center w-[350px]  h-[60px] px-[10px] rounded ${isActivAndErrorSpcaeKey} `}
    ></div>
  );
};

export default SpaceKey;
