import React from "react";

const RightShiftKey = ({ activeShiftKey, errorShiftKey }) => {
  const checkBgColor = activeShiftKey
    ? "bg-green-200"
    : errorShiftKey
    ? "bg-red-200"
    : "bg-white";

  return (
    <div
      className={`flex items-center w-[145px] justify-start h-[60px] px-[10px] ${checkBgColor} rounded`}
    >
      Shift
    </div>
  );
};

export default RightShiftKey;
