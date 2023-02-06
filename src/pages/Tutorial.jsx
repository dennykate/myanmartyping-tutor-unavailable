import React, { useState } from "react";
import { Keyboard } from "../components";

const lessonText = "မမ ဝဝ ထထ က အကပထမ ကပါကပါ မမရာ ညညလသာသာ ညအခါ ငါစာရ မမဝဝ ထထက";

const Tutorial = () => {
  const [inputText, setInputText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        autoFocus
        className="w-screen h-screen z-10 bg-red-300 absolute top-0 opacity-0"
      />

      <div className="w-full  px-[30px]">
        <div className="flex justify-center items-start flex-col gap-[20px]">
          <h1 className="text-[20px] font-semibold">{lessonText}</h1>

          {inputText && (
            <h1 className="text-[20px] font-semibold bg-yellow-400 p-2">
              {inputText}
            </h1>
          )}
        </div>
      </div>
      <Keyboard inputText={inputText} lessonText={lessonText} />
    </div>
  );
};

export default Tutorial;
