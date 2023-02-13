import React, { useEffect, useState } from "react";
import { Keyboard } from "../components";
import {
  allCharData,
  firstColData,
  fouthColData,
  leftSideKey,
  rightSideKey,
  secondColData,
  thirdColData,
} from "../utils/data";
import { lesson_1 } from "../utils/lessons";
import ErrorNotification from "../assets/error-notification.wav";

const Lesson = () => {
  const [outputArr, setOutputArr] = useState([]);
  const [activeKey, setActiveKey] = useState("");
  const [errorKey, setErrorKey] = useState("");
  const [activeLeftShiftKey, setActiveLeftShiftKey] = useState(false);
  const [activeRightShiftKey, setActiveRightShiftKey] = useState(false);
  const [activeSpaceKey, setActiveSpaceKey] = useState(false);
  const [errorSpaceKey, setErrorSpaceKey] = useState(false);
  const [errorShiftKey, setErrorShiftKey] = useState(false);

  useEffect(() => {
    const upcomingKey = lesson_1[outputArr.length];
    setActiveKey(upcomingKey);
    setActiveSpaceKey(false);

    if (upcomingKey == 32) {
      setActiveSpaceKey(true);
      
      setActiveLeftShiftKey(false);
      setActiveRightShiftKey(false);
    } else {
      if (upcomingKey > 300) {
        checkActiveShiftKey(upcomingKey);
      } else {
        setActiveLeftShiftKey(false);
        setActiveRightShiftKey(false);
      }
    }
  }, [outputArr]);

  const inputHandler = (e) => {
    if (
      e.keyCode == 229 ||
      e.keyCode == 16 ||
      e.keyCode == 17 ||
      e.keyCode == 8
    )
      return;

    setDefaultKey();

    if (outputArr.length == lesson_1.length) return;

    if (e.shiftKey) {
      findShiftKeyData(e);
    } else {
      checkWithLesson(e.keyCode);
    }
  };

  const setDefaultKey = () => {
    setErrorKey("");
    setErrorSpaceKey(false);
    setErrorShiftKey(false);
  };

  const findShiftKeyData = (e) => {
    const isExistInFirstCol = firstColData.find(
      (data) => data.lowerKeyCode == e.keyCode
    );

    const isExistInSecondCol = secondColData.find(
      (data) => data.lowerKeyCode == e.keyCode
    );

    const isExistInThirdCol = thirdColData.find(
      (data) => data.lowerKeyCode == e.keyCode
    );

    const isExistInFouthCol = fouthColData.find(
      (data) => data.lowerKeyCode == e.keyCode
    );

    const data =
      isExistInFirstCol ||
      isExistInSecondCol ||
      isExistInThirdCol ||
      isExistInFouthCol;

    checkWithLesson(data.upperKeyCode);
  };

  const checkWithLesson = (keyCode) => {
    if (keyCode == lesson_1[outputArr.length]) {
      setOutputArr([...outputArr, keyCode]);
    } else {
      if (keyCode > 300) {
        setErrorShiftKey(true);
      }

      if (keyCode == 32) {
        setErrorSpaceKey(true);
      } else {
        setErrorKey(keyCode);
      }
      playErrorNotification();
    }
  };

  const checkActiveShiftKey = (upcomingKey) => {
    const isRightSideKey = rightSideKey.find(
      (key) => key.keyCode == upcomingKey
    );

    if (isRightSideKey) setActiveLeftShiftKey(true);

    const isLeftSideKey = leftSideKey.find((key) => key.keyCode == upcomingKey);

    if (isLeftSideKey) setActiveRightShiftKey(true);
  };

  const playErrorNotification = () => {
    const noti = new Audio(ErrorNotification);

    noti.play();
  };

  return (
    <div>
      <input
        type="text"
        onKeyUp={inputHandler}
        autoFocus
        className="opacity-0"
      />

      <div className="w-full py-[20px] flex justify-center items-center flex-col gap-[20px]">
        <h1 className="block">
          {lesson_1?.map((output, index) => {
            const data = allCharData.find((data) => data.keyCode == output);

            return data.char;
          })}
        </h1>
        <h1 className="block">
          {outputArr?.map((output, index) => {
            const data = allCharData.find((data) => data.keyCode == output);

            return data.char;
          })}
        </h1>

        <button onClick={() => setOutputArr([])} className="z-10">
          reset
        </button>
      </div>

      <Keyboard
        activeKey={activeKey}
        errorKey={errorKey}
        activeLeftShiftKey={activeLeftShiftKey}
        activeRightShiftKey={activeRightShiftKey}
        errorSpaceKey={errorSpaceKey}
        activeSpaceKey={activeSpaceKey}
        errorShiftKey={errorShiftKey}
      />
    </div>
  );
};

export default Lesson;
