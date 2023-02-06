import React, { useEffect, useState } from "react";
import {
  AiFillWindows,
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
} from "react-icons/ai";
import {
  firstColData,
  fouthColData,
  secondColData,
  thirdColData,
} from "../utils/data";
import KeyboardItem from "./KeyboardItem";
import ErrorNotification from "../assets/error-notification.wav";

const Keyboard = ({ inputText, lessonText, setInputText }) => {
  const [activeKey, setActiveKey] = useState("");
  const [errorKey, setErrorKey] = useState("");
  const [isUpperkey, setIsUpperkey] = useState(false);
  const [isSpacekey, setIsSpacekey] = useState(false);
  const [totalChar, setTotalChar] = useState([]);

  useEffect(() => {
    startTyping(inputText);
  }, [inputText]);

  const startTyping = (text) => {
    const inputTextArr = text.split("");
    const lessonTextArr = lessonText.split("");

    let lastChar = lessonTextArr[inputTextArr.length];

    // console.log(lastChar);
    // if (lastChar == "‌ေ") {
    //   lastChar = lastChar.split("")[1];
    //   console.log(lastChar.length);
    // }

    setActiveKey(lastChar);
    checkError(lastChar, lessonTextArr, inputTextArr);
  };

  const checkError = (lastChar, lessonTextArr, inputTextArr) => {
    const lessonTextLastChar = lessonTextArr[inputTextArr.length - 1];
    const inputTextLastChar = inputTextArr[inputTextArr.length - 1];

    if (inputTextArr.length > 0) {
      if (lessonTextLastChar != inputTextLastChar) {
        console.log(inputTextLastChar);

        setErrorKey(inputTextLastChar);
        setIsUpperkey(false);
        playErrorNotification();
      } else {
        setErrorKey("");
        setTotalChar([...totalChar, lastChar]);
        checkUpperkey(lastChar);
        checkSpacekey(lastChar);
      }
    }
  };

  const checkUpperkey = (key) => {
    const isExistFir = firstColData.find((data) => data.uMM == key);
    const isExistSec = secondColData.find((data) => data.uMM == key);
    const isExistThir = thirdColData.find((data) => data.uMM == key);
    const isExistFour = fouthColData.find((data) => data.uMM == key);

    if (isExistFir || isExistSec || isExistThir || isExistFour) {
      setIsUpperkey(true);
    } else {
      setIsUpperkey(false);
    }
  };

  const checkSpacekey = (key) => {
    if (key == " ") {
      setIsSpacekey(true);
    } else {
      setIsSpacekey(false);
    }
  };

  const playErrorNotification = () => {
    const noti = new Audio(ErrorNotification);

    noti.play();
  };

  return (
    <div className="w-screen pb-[10px] absolute bottom-0">
      <div
        className="max-w-[1024px] mx-auto p-[10px] py-[20px] bg-gray-300 flex items-center justify-center
       rounded-lg"
      >
        <div className="flex flex-col gap-[5px]">
          <div className="w-full flex gap-[5px] items-center">
            {firstColData.map(({ uMM, lMM, eng }, index) => (
              <KeyboardItem
                key={index}
                activeKey={activeKey}
                errorKey={errorKey}
                uMM={uMM}
                lMM={lMM}
                eng={eng}
              />
            ))}
            <KeyboardItem
              activeKey={activeKey}
              width="w-[100px]"
              singleKey="Backspace"
            />
          </div>

          <div className="w-full flex gap-[5px] items-center">
            <KeyboardItem
              activeKey={activeKey}
              width="w-[100px]"
              singleKey="Tab"
              justifyStart
            />
            {secondColData.map(({ uMM, lMM, eng }, index) => (
              <KeyboardItem
                key={index}
                activeKey={activeKey}
                errorKey={errorKey}
                uMM={uMM}
                lMM={lMM}
                eng={eng}
              />
            ))}
          </div>

          <div className="w-full flex gap-[5px] items-center">
            <KeyboardItem
              activeKey={activeKey}
              width="w-[113px]"
              singleKey="Cap Lock"
              justifyStart
            />
            {thirdColData.map(({ uMM, lMM, eng }, index) => (
              <KeyboardItem
                key={index}
                activeKey={activeKey}
                errorKey={errorKey}
                uMM={uMM}
                lMM={lMM}
                eng={eng}
              />
            ))}
            <KeyboardItem
              activeKey={activeKey}
              width="w-[113px]"
              singleKey="Enter"
            />
          </div>

          <div className="w-full flex gap-[5px] items-center">
            <KeyboardItem
              activeKey={activeKey}
              width="w-[145px]"
              singleKey="Shift"
              justifyStart
              isUpperkey={isUpperkey}
            />
            {fouthColData.map(({ uMM, lMM, eng }, index) => (
              <KeyboardItem
                key={index}
                activeKey={activeKey}
                errorKey={errorKey}
                uMM={uMM}
                lMM={lMM}
                eng={eng}
              />
            ))}
            <KeyboardItem
              activeKey={activeKey}
              width="w-[145px]"
              singleKey="Shift "
            />
          </div>

          <div className="w-full flex gap-[5px] items-center">
            <KeyboardItem
              activeKey={activeKey}
              width="w-[70px]"
              singleKey="Ctrl"
              justifyStart
            />
            <KeyboardItem
              activeKey={activeKey}
              width="w-[60px]"
              singleKey={<AiFillWindows size={24} />}
              justifyStart
            />
            <KeyboardItem
              activeKey={activeKey}
              justifyStart
              width="w-[60px]"
              singleKey="Alt"
            />
            <KeyboardItem
              activeKey={activeKey}
              justifyStart
              width="w-[350px]"
              singleKey=" "
              isUpperkey={isSpacekey}
            />
            <KeyboardItem
              activeKey={activeKey}
              justifyStart
              width="w-[60px]"
              singleKey="Alt"
            />
            <KeyboardItem
              activeKey={activeKey}
              justifyStart
              width="w-[60px]"
              singleKey="Ctrl"
            />
            <KeyboardItem
              activeKey={activeKey}
              justifyStart
              width="w-[60px]"
              singleKey={<AiOutlineArrowLeft size={20} />}
            />
            <KeyboardItem
              activeKey={activeKey}
              justifyStart
              width="w-[60px]"
              singleKey={<AiOutlineArrowDown size={20} />}
            />
            <KeyboardItem
              activeKey={activeKey}
              justifyStart
              width="w-[60px]"
              singleKey={<AiOutlineArrowUp size={20} />}
            />
            <KeyboardItem
              activeKey={activeKey}
              justifyStart
              width="w-[60px]"
              singleKey={<AiOutlineArrowRight size={20} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
