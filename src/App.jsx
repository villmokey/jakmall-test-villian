import { useState } from "react";
import { ArrowLeftIcon } from "./components/atoms/Icons/ArrowLeftIcon";
import { StepByStep } from "./components/molecules/StepByStep/StepByStep";
import { Step1 } from "./components/organism/Steps/Step1";
import { Step2 } from "./components/organism/Steps/Step2";
import { Step3 } from "./components/organism/Steps/Step3";

function App() {
  const [isDropshipper, setIsDropshipper] = useState(false);
  const [shipment, setShipment] = useState(null);
  const [payment, setPayment] = useState(null);
  const [step, setStep] = useState(1);

  const onNextStep = (e) => {
    setStep(step + 1);
  };

  const onPrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const Steps = ({ number }) => {
    if (number === 1) {
      return <Step1 isDropshipper={isDropshipper} onClickDropship={() => setIsDropshipper(!isDropshipper)} onContinue={onNextStep} />;
    } else if (number === 2) {
      return <Step2 isDropshipper={isDropshipper} setPayment={setPayment} setShipment={setShipment} onContinue={onNextStep} />;
    } else if (number === 3) {
      return <Step3 isDropshipper={isDropshipper} shipment={shipment} payment={payment} toStep1={() => setStep(1)} />;
    }
  };

  const BackButton = ({ step }) => {
    let text = "";

    if (step === 1) {
      text = "Back to Cart";
    } else if (step === 2) {
      text = "Back to Delivery";
    }

    return (
      <button type="button" className="flex w-full py-4 px-7" onClick={onPrevStep}>
        <ArrowLeftIcon />
        <h5 className="hidden md:flex lg:flex ml-2">{text}</h5>
      </button>
    );
  };

  return (
    <>
      <StepByStep step={step} />
      <div className="min-h-screen flex bg-[#FFFAE6] p-7 sm:p-7 md:p-10 lg:p-10">
        <div className="w-full bg-[#fff]">
          <BackButton step={step} />
          <form action="">
            <div className="inline md:flex lg:flex h-[700px]">
              <Steps number={step} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
