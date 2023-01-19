import { useState } from "react";
import { ContinueButton } from "../../atoms/Button/ContinueButton";
import { currencySeperator } from "../../helpers/currency";
import { PaymentOptions } from "../../molecules/Step2Options/PaymentOptions";
import { ShipmentOptions } from "../../molecules/Step2Options/ShipmentOptions";

let shipmentData = [
  { name: "GO-SEND", price: 15000, id: 1, deliver: "Today" },
  { name: "JNE", price: 9000, id: 2, deliver: "2 Days" },
  { name: "Personal Courier", price: 29000, id: 3, deliver: "1 Day" },
];

let paymentData = [
  { name: "e-Wallet", price: 1500000, id: 1 },
  { name: "Bank Transfer", price: 0, id: 2 },
  { name: "Virtual Account", price: 0, id: 3 },
];

export const Step2 = ({ isDropshipper, setPayment, setShipment, onContinue }) => {
  const [chosenShipment, setChosenShipment] = useState(null);
  const [chosenPayment, setChosenPayment] = useState(null);

  const onChoseShipment = (id) => {
    const filter = shipmentData.filter((item) => item.id === id);
    console.log(filter);
    setChosenShipment(filter[0]);
    setShipment(filter[0]);
  };

  const onChosenPayment = (id) => {
    const filter = paymentData.filter((item) => item.id === id);
    setChosenPayment(filter[0]);
    setPayment(filter[0]);
  };

  const RenderDeliveryEstimation = ({ shipment }) => {
    if (!shipment) return;

    return <h5 className="text-[14px] text-green-400">{shipment.deliver + " by " + shipment.name}</h5>;
  };

  const onNextStep = (e) => {
    if (!chosenPayment) return;
    if (!chosenShipment) return;
    e.preventDefault();

    onContinue({
      shipment: chosenShipment,
      payment: chosenPayment,
    });
  };

  return (
    <>
      <div className="w-full md:w-[65%] lg:w-[72%] px-7">
        <div className="mt-5">
          <div className="block sm:flex md:flex lg:flex w-full gap-3">
            <div className="relative max-w-[400px] w-full">
              <h1 className="text-[#FF8A00] text-2xl md:text-2xl lg:text-3xl font-bold">Shipment</h1>
              <div className="top-1 border-t-[10px] border-[#979797] opacity-20 z-40"></div>
            </div>
          </div>
          <PaymentOptions data={shipmentData} onChosen={onChoseShipment} />
        </div>
        <div className="mt-20">
          <div className="block sm:flex md:flex lg:flex w-full gap-3">
            <div className="relative max-w-[400px] w-full">
              <h1 className="text-[#FF8A00] text-2xl md:text-2xl lg:text-3xl font-bold">Shipment</h1>
              <div className="top-1 border-t-[10px] border-[#979797] opacity-20 z-40"></div>
            </div>
          </div>
          <PaymentOptions data={paymentData} onChosen={onChosenPayment} />
        </div>
      </div>
      <div className="flex flex-col md:w-[35%] lg:w-[28%] border-[#FF8A00] mt-5 md:border-l md:border-t-0 lg:border-l lg:border-t-0 border-opacity-[0.3] py-4 px-7">
        <div className="border-t border-[#FF8A00] md:hidden lg:hidden mb-2 border-opacity-[0.3]"></div>
        <h3 className="text-[#FF8A00] text-[24px] font-semibold">Summary</h3>
        <h5 className="text-[14px] font-light opacity-[0.7]">10 items purchased</h5>
        <div className="border-t border-[#D8D8D8] w-[100px] my-5"></div>
        <h5 className="text-[14px]">Delivery Estimation</h5>
        <RenderDeliveryEstimation shipment={chosenShipment} />
        <h5 className="text-green-400 text-[17px]"></h5>
        <div className="mt-auto">
          <div className="flex">
            <h5 className="text-[14px] mt-auto font-light opacity-[0.7]">Cost of goods</h5>
            <h5 className="font-semibold ml-auto">500,000</h5>
          </div>
          <div className="flex">
            <h5 className="text-[14px] mt-auto font-light opacity-[0.7]">Dropshipping Fee</h5>
            <h5 className="font-semibold ml-auto">{isDropshipper ? "5,900" : "0"}</h5>
          </div>
          {chosenShipment && (
            <div className="flex">
              <h5 className="text-[14px] mt-auto">
                <strong>{chosenShipment?.name}</strong> Shipment
              </h5>
              <h5 className="font-semibold ml-auto">{currencySeperator(chosenShipment?.price)}</h5>
            </div>
          )}

          <div className="flex my-5">
            <h3 className="text-[24px] text-[#FF8A00] font-bold">Total</h3>
            <h5 className="text-[24px] text-[#FF8A00] font-bold ml-auto">
              {isDropshipper ? currencySeperator(500000 + 5900 + (chosenShipment ? chosenShipment.price : 0)) : currencySeperator(500000 + (chosenShipment ? chosenShipment.price : 0))}
            </h5>
          </div>
          <ContinueButton text={chosenPayment ? "Pay With " + chosenPayment.name : "Pay With "} onClick={onNextStep} />
        </div>
      </div>
    </>
  );
};
