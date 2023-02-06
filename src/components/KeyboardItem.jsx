import React, { useEffect, useState } from "react";
import { dashCharData } from "../utils/data";

const KeyboardItem = ({
  uMM,
  lMM,
  eng,
  width,
  singleKey,
  justifyStart,
  activeKey,
  isUpperkey,
  errorKey,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isErrorActive, setIsErrorActive] = useState(false);

  useEffect(() => {
    // console.log(activeKey);
    if (activeKey == lMM || activeKey == uMM) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }

    if (errorKey == lMM || errorKey == uMM) {
      setIsErrorActive(true);
    } else {
      setIsErrorActive(false);
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
            justifyStart ? "justify-start" : "justify-end"
          } text-gray-600 text-sm ${isUpperkey ? "bg-green-200" : "bg-white"}
          `}
        >
          {singleKey}
        </div>
      ) : (
        <div
          className={`w-full h-full flex ${
            isActive ? "bg-green-200" : "bg-white"
          } ${isErrorActive && "bg-red-200"}`}
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
