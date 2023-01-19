import { CheckIcon } from "../../atoms/Icons/CheckIcon";
import { currencySeperator } from "../../helpers/currency";

export const ShipmentOptions = ({ data, onClick, isClicked }) => {
  console.log(isClicked);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {data &&
        data.map((item, index) => {
          return (
            <div key={index} className={`w-full flex border p-4 cursor-pointer ${isClicked === item.id ? "border-[#1BD97B] bg-[#1BD97B] bg-opacity-[0.1]" : ""}`} onClick={() => onClick(item.id)}>
              <div className="inline-block my-auto">
                <h5 className="text-sm">{item.name}</h5>
                {item.price !== 0 && <h5 className="text-sm font-semibold">{currencySeperator(item.price)}</h5>}
              </div>
              {isClicked === item.id && <CheckIcon className="ml-auto" />}
            </div>
          );
        })}
    </div>
  );
};
