import React, { useEffect, useState } from "react";
import {
  AiFillWindows,
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
} from "react-icons/ai";
import {
  fakeKeyboardItem,
  firstColData,
  fouthColData,
  secondColData,
  thirdColData,
} from "../utils/data";
import KeyboardItem from "./KeyboardItem";
import LeftShiftKey from "./LeftShiftKey";
import RightShiftKey from "./RightShiftKey";
import SpaceKey from "./SpaceKey";

const Keyboard = ({
  activeKey,
  errorKey,
  activeLeftShiftKey,
  activeRightShiftKey,
  errorSpaceKey,
  activeSpaceKey,
  errorShiftKey,
}) => {
  return (
    <div className="w-screen pb-[10px] absolute bottom-0">
      <div
        className="max-w-[1024px] mx-auto p-[10px] py-[20px] bg-gray-300 flex items-center justify-center
       rounded-lg"
      >
        <div className="flex flex-col gap-[5px]">
          <div className="w-full flex gap-[5px] items-center">
            {firstColData.map((data, index) => (
              <KeyboardItem
                activeKey={activeKey}
                errorKey={errorKey}
                key={index}
                data={data}
              />
            ))}
            <KeyboardItem
              activeKey={activeKey}
              errorKey={errorKey}
              width="w-[100px]"
              data={fakeKeyboardItem}
              singleKey="Backspace"
            />
          </div>

          <div className="w-full flex gap-[5px] items-center">
            <KeyboardItem
              activeKey={activeKey}
              errorKey={errorKey}
              width="w-[100px]"
              data={fakeKeyboardItem}
              singleKey="Tab"
              justifyStart
            />
            {secondColData.map((data, index) => (
              <KeyboardItem
                activeKey={activeKey}
                errorKey={errorKey}
                key={index}
                data={data}
              />
            ))}
          </div>

          <div className="w-full flex gap-[5px] items-center">
            <KeyboardItem
              activeKey={activeKey}
              errorKey={errorKey}
              width="w-[113px]"
              data={fakeKeyboardItem}
              singleKey="Cap Lock"
              justifyStart
            />
            {thirdColData.map((data, index) => (
              <KeyboardItem
                activeKey={activeKey}
                errorKey={errorKey}
                key={index}
                data={data}
              />
            ))}
            <KeyboardItem
              activeKey={activeKey}
              errorKey={errorKey}
              width="w-[113px]"
              data={fakeKeyboardItem}
              singleKey="Enter"
            />
          </div>

          <div className="w-full flex gap-[5px] items-center">
            <LeftShiftKey
              activeShiftKey={activeLeftShiftKey}
              errorShiftKey={errorShiftKey}
            />

            {fouthColData.map((data, index) => (
              <KeyboardItem
                activeKey={activeKey}
                errorKey={errorKey}
                key={index}
                data={data}
              />
            ))}
            <RightShiftKey
              activeShiftKey={activeRightShiftKey}
              errorShiftKey={false}
            />
          </div>

          <div className="w-full flex gap-[5px] items-center">
            <KeyboardItem
              activeKey={activeKey}
              errorKey={errorKey}
              width="w-[70px]"
              data={fakeKeyboardItem}
              singleKey="Ctrl"
              justifyStart
            />
            <KeyboardItem
              activeKey={activeKey}
              errorKey={errorKey}
              width="w-[60px]"
              data={fakeKeyboardItem}
              singleKey={<AiFillWindows size={24} />}
              justifyCenter
            />
            <KeyboardItem
              activeKey={activeKey}
              errorKey={errorKey}
              justifyCenter
              width="w-[60px]"
              data={fakeKeyboardItem}
              singleKey="Alt"
            />
            <SpaceKey
              errorSpaceKey={errorSpaceKey}
              activeSpaceKey={activeSpaceKey}
            />
            <KeyboardItem
              activeKey={activeKey}
              errorKey={errorKey}
              justifyCenter
              width="w-[60px]"
              data={fakeKeyboardItem}
              singleKey="Alt"
            />
            <KeyboardItem
              activeKey={activeKey}
              errorKey={errorKey}
              justifyCenter
              width="w-[60px]"
              data={fakeKeyboardItem}
              singleKey="Ctrl"
            />
            <KeyboardItem
              activeKey={activeKey}
              errorKey={errorKey}
              justifyCenter
              width="w-[60px]"
              data={fakeKeyboardItem}
              singleKey={<AiOutlineArrowLeft size={20} />}
            />
            <KeyboardItem
              activeKey={activeKey}
              errorKey={errorKey}
              justifyCenter
              width="w-[60px]"
              data={fakeKeyboardItem}
              singleKey={<AiOutlineArrowDown size={20} />}
            />
            <KeyboardItem
              activeKey={activeKey}
              errorKey={errorKey}
              justifyCenter
              width="w-[60px]"
              data={fakeKeyboardItem}
              singleKey={<AiOutlineArrowUp size={20} />}
            />
            <KeyboardItem
              activeKey={activeKey}
              errorKey={errorKey}
              justifyCenter
              width="w-[60px]"
              data={fakeKeyboardItem}
              singleKey={<AiOutlineArrowRight size={20} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
