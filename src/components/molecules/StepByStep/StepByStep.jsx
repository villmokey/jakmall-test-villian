import { ChevronRightIcon } from "../../atoms/Icons/ChevronRightIcon";

export const StepByStep = ({ step }) => {
  return (
    <div className="absolute flex h-[70px] justify-center w-full">
      <div className="flex gap-1 sm:gap-1 md:gap-2 justify-center my-auto w-[200px] sm:w-[200px] md:w-[400px] lg:w-[450px] h-[40px] sm:h-[40px] md:h-[70px] lg:h-[70px] bg-[#FFFAE6] rounded-full">
        <div className="flex my-auto gap-2">
          <div className={`flex rounded-full w-[30px] h-[30px] bg-[#FF8A00]`}>
            <span className="m-auto text-white">1</span>
          </div>
          <h5 className="text-[16px] m-auto font-semibold text-[#FF8A00] hidden md:flex lg:flex">Delivery</h5>
        </div>
        <div className="flex my-auto">
          <ChevronRightIcon fillColor="#FF8A00" />
        </div>
        <div className="flex my-auto gap-2">
          <div className={`flex rounded-full w-[30px] h-[30px] bg-[#FF8A00] ${step > 1 ? "opacity-1" : "opacity-[0.2]"}`}>
            <span className="m-auto text-white">2</span>
          </div>
          <h5 className="text-[16px] m-auto font-semibold text-[#FF8A00] hidden md:flex lg:flex">Payment</h5>
        </div>
        <div className="flex my-auto">
          <ChevronRightIcon fillColor="#FF8A00" />
        </div>
        <div className="flex my-auto gap-2">
          <div className={`flex rounded-full w-[30px] h-[30px] bg-[#FF8A00] ${step > 2 ? "opacity-1" : "opacity-[0.2]"}`}>
            <span className="m-auto text-white">3</span>
          </div>
          <h5 className="text-[16px] m-auto font-semibold text-[#FF8A00] hidden md:flex lg:flex">Finish</h5>
        </div>
      </div>
    </div>
  );
};
