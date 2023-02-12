import React, { useEffect, useState } from "react";
import { dashCharData } from "../utils/data";

const KeyboardItem = ({
  data,
  width,
  singleKey,
  justifyStart,
  justifyCenter,
  activeKey,
  errorKey,
  activeShiftKey,
}) => {
  const { uMM, lMM, eng, lowerKeyCode, upperKeyCode } = data;
  const [isActive, setIsActive] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (activeKey == lowerKeyCode || activeKey == upperKeyCode) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }

    if (errorKey == lowerKeyCode || errorKey == upperKeyCode) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [activeKey, errorKey]);

  const checkDashChar = (char) => {
    const isExist = dashCharData.find((data) => data == char);

    if (isExist) return `-${char}`;
    return char;
  };

  return (
    <div
      className={`${
        width ? width : "w-[60px]"
      } h-[60px]  border-[1px] border-gray-300 rounded overflow-hidden
        cursor-pointer  `}
    >
      {/* uMM = uppercase Myanmar | lMM = lowercase Myanmar | eng = english  */}
      {width ? (
        <div
          className={`flex items-center w-full  h-full px-[10px] ${
            justifyStart
              ? "justify-start"
              : justifyCenter
              ? "justify-center"
              : "justify-end"
          } text-gray-600 text-sm ${
            singleKey === "Shift"
              ? activeShiftKey
                ? "bg-green-200"
                : "bg-white"
              : "bg-white"
          }`}
        >
          {singleKey}
        </div>
      ) : (
        <div
          className={`w-full h-full flex ${
            isActive ? "bg-green-200" : isError ? "bg-red-200" : "bg-white"
          }`}
        >
          <div className="w-1/2 flex justify-evenly items-center flex-col h-full">
            <h1 className="text-gray-600 text-sm">{checkDashChar(uMM)}</h1>
            <h1 className="text-gray-600 text-sm">{checkDashChar(lMM)}</h1>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <h1 className="text-gray-600 text-sm">{eng}</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default KeyboardItem;
