import { useState } from "react";
import { ContinueButton } from "./components/atoms/Button/ContinueButton";
import { DropshipperCheckbox } from "./components/atoms/Checkbox/DropshipperCheckbox";
import { ArrowLeftIcon } from "./components/atoms/Icons/ArrowLeftIcon";
import { Input } from "./components/atoms/Input/Input";
import { InputNumber } from "./components/atoms/Input/InputNumber";
import { Textarea } from "./components/atoms/Input/Textarea";
import { StepByStep } from "./components/molecules/StepByStep/StepByStep";
import { Step1 } from "./components/organism/Steps/Step1";

function App() {
  const [isDropshipper, setIsDropshipper] = useState(false);

  return (
    <>
      <StepByStep />
      <div className="min-h-screen flex bg-[#FFFAE6] p-7 sm:p-7 md:p-10 lg:p-10">
        <div className="w-full bg-[#fff]">
          <div className="flex w-full py-4 px-7">
            <ArrowLeftIcon />
            <h5 className="hidden md:flex lg:flex ml-2">Back to cart</h5>
          </div>
          <div className="inline md:flex lg:flex h-[700px]">
            <Step1 isDropshipper={isDropshipper} onClick={() => setIsDropshipper(!isDropshipper)} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
