import { ArrowLeftIcon } from "../../atoms/Icons/ArrowLeftIcon";
import { currencySeperator } from "../../helpers/currency";

export const Step3 = ({ shipment, payment, isDropshipper, toStep1 }) => {
  const RenderDeliveryEstimation = ({ shipment }) => {
    if (!shipment) return;

    return <h5 className="text-[14px] text-green-400">{shipment.deliver + " by " + shipment.name}</h5>;
  };

  const RenderPaymentInfo = ({ payment }) => {
    if (!shipment) return;

    return <h5 className="text-[14px] text-green-400">{payment.name}</h5>;
  };

  const invoiceID = (length) => {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  return (
    <>
      <div className="flex w-full md:w-[65%] lg:w-[72%] px-7 ">
        <div className="mt-5 mx-auto">
          <div className="block sm:flex md:flex lg:flex w-full gap-3">
            <div className="relative mx-auto mt-[10rem] max-w-[400px] w-full">
              <h1 className="text-[#FF8A00] text-2xl md:text-2xl lg:text-3xl font-bold">Thank you</h1>
              <div className="top-1 border-t-[10px] border-[#979797] opacity-20 z-40 w-full"></div>
            </div>
          </div>
          <p className="mt-4">Order ID : {invoiceID(5)}</p>
          <p className="opacity-[0.5]">
            Your order will be delivered {shipment.deliver} with {shipment.name}
          </p>
          <button type="button" className="flex w-full py-4 px-7" onClick={toStep1}>
            <ArrowLeftIcon />
            <h5 className="hidden md:flex lg:flex ml-2">Back to Homepage</h5>
          </button>
        </div>
      </div>
      <div className="flex flex-col md:w-[35%] lg:w-[28%] border-[#FF8A00] mt-5 md:border-l md:border-t-0 lg:border-l lg:border-t-0 border-opacity-[0.3] py-4 px-7">
        <div className="border-t border-[#FF8A00] md:hidden lg:hidden mb-2 border-opacity-[0.3]"></div>
        <h3 className="text-[#FF8A00] text-[24px] font-semibold">Summary</h3>
        <h5 className="text-[14px] font-light opacity-[0.7]">10 items purchased</h5>
        <div className="border-t border-[#D8D8D8] w-[100px] my-5"></div>
        <h5 className="text-[14px]">Delivery Estimation</h5>
        <RenderDeliveryEstimation shipment={shipment} />
        <h5 className="text-green-400 text-[17px]"></h5>
        <div className="border-t border-[#D8D8D8] w-[100px] my-5"></div>
        <h5 className="text-[14px]">Payment Method</h5>
        <RenderPaymentInfo payment={payment} />
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
          {shipment && (
            <div className="flex">
              <h5 className="text-[14px] mt-auto">
                <strong>{shipment?.name}</strong> Shipment
              </h5>
              <h5 className="font-semibold ml-auto">{currencySeperator(shipment?.price)}</h5>
            </div>
          )}

          <div className="flex my-5">
            <h3 className="text-[24px] text-[#FF8A00] font-bold">Total</h3>
            <h5 className="text-[24px] text-[#FF8A00] font-bold ml-auto">{isDropshipper ? currencySeperator(500000 + 5900 + (shipment ? shipment.price : 0)) : currencySeperator(500000 + (shipment ? shipment.price : 0))}</h5>
          </div>
        </div>
      </div>
    </>
  );
};
