import { useEffect, useState } from "react";
import { ContinueButton } from "../../atoms/Button/ContinueButton";
import { DropshipperCheckbox } from "../../atoms/Checkbox/DropshipperCheckbox";
import { Input } from "../../atoms/Input/Input";
import { InputNumber } from "../../atoms/Input/InputNumber";
import { Textarea } from "../../atoms/Input/Textarea";

export const Step1 = ({ isDropshipper, onClickDropship, onContinue }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dropshipperName, setDropshipperName] = useState("");
  const [dropshipperPhone, setDropshipperPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (!isDropshipper) {
      setDropshipperName("");
      setDropshipperPhone("");
    }
  }, [isDropshipper]);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const onChangeDropshipperName = (e) => {
    setDropshipperName(e.target.value);
  };

  const onChangeDropshipperPhone = (e) => {
    setDropshipperPhone(e.target.value);
  };

  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const onNextStep = (e) => {
    if (email === "") return;
    if (phone === "") return;
    if (isDropshipper) {
      if (dropshipperName === "") return;
      if (dropshipperPhone === "") return;
    }
    if (address === "") return;

    e.preventDefault();

    onContinue({
      email,
      phone,
      dropshipperName,
      dropshipperPhone,
      address,
    });
  };

  return (
    <>
      <div className="w-full md:w-[65%] lg:w-[72%] px-7">
        <div className="flex mt-4">
          <div className="block sm:flex md:flex lg:flex w-full gap-3">
            <div className="relative">
              <h1 className="text-[#FF8A00] text-2xl md:text-2xl lg:text-3xl font-bold">Delivery Details</h1>
              <div className="top-1 border-t-[10px] border-[#979797] opacity-20 z-40"></div>
            </div>
            <div className="ml-auto mt-5">
              <DropshipperCheckbox isChecked={isDropshipper} onClick={onClickDropship} />
              <span className="ml-1 text-xs md:text-sm lg:text-sm">Send as Dropshipper</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-4">
          <Input disabled={false} placeholder="Email" type="email" onChange={onChangeEmail} value={email} />
          <Input placeholder="Dropshipper Name" disabled={!isDropshipper ? true : false} value={dropshipperName} onChange={onChangeDropshipperName} />
          <InputNumber disabled={false} placeholder="Phone Number" onChange={onChangePhone} value={phone} />
          <InputNumber placeholder="Dropshipper Phone Number" disabled={!isDropshipper ? true : false} value={dropshipperPhone} onChange={onChangeDropshipperPhone} />
          <Textarea placeholder="Delivery Address" value={address} onChange={onChangeAddress} />
        </div>
      </div>
      <div className="flex flex-col md:w-[35%] lg:w-[28%] border-[#FF8A00] mt-5 md:border-l md:border-t-0 lg:border-l lg:border-t-0 border-opacity-[0.3] py-4 px-7">
        <div className="border-t border-[#FF8A00] md:hidden lg:hidden mb-2 border-opacity-[0.3]"></div>
        <h3 className="text-[#FF8A00] text-[24px] font-semibold">Summary</h3>
        <h5 className="text-[14px] font-light opacity-[0.7]">10 items purchased</h5>
        <div className="mt-auto">
          <div className="flex">
            <h5 className="text-[14px] mt-auto font-light opacity-[0.7]">Cost of goods</h5>
            <h5 className="font-semibold ml-auto">500,000</h5>
          </div>
          <div className="flex">
            <h5 className="text-[14px] mt-auto font-light opacity-[0.7]">Dropshipping Fee</h5>
            <h5 className="font-semibold ml-auto">{isDropshipper ? "5,900" : "0"}</h5>
          </div>
          <div className="flex my-5">
            <h3 className="text-[24px] text-[#FF8A00] font-bold">Total</h3>
            <h5 className="text-[24px] text-[#FF8A00] font-bold ml-auto">{isDropshipper ? new Intl.NumberFormat("ja-JP", { currency: "IDR" }).format(500000 + 5900) : new Intl.NumberFormat("ja-JP", { currency: "IDR" }).format(500000)}</h5>
          </div>
          <ContinueButton text="Continue to Payment" onClick={onNextStep} />
        </div>
      </div>
    </>
  );
};
