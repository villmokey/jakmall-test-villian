import { bool, func } from "prop-types";
import { string } from "prop-types";
import { CheckIcon } from "../Icons/CheckIcon";
import { CloseIcon } from "../Icons/CloseIcon";

export const InputNumber = ({ placeholder, onChange, value, disabled, name }) => {
  return (
    <div className="inline-block relative">
      <input
        name={name}
        type="number"
        disabled={disabled}
        required={!disabled ? true : false}
        minLength={6}
        maxLength={20}
        className="pr-9 pl-3 border-[#CCCCCC] peer invalid:border-[#FF8A00] valid:border-[#1BD97B] outline-none h-[60px] w-full placeholder:px-1 px-3 border placeholder:text-[#CCCCCC]"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <CheckIcon width={24} height={24} className={`absolute top-[20px] right-3 peer-valid:flex hidden`} />
      <CloseIcon width={24} height={24} className={`absolute top-[20px] right-3 peer-invalid:flex hidden`} />
    </div>
  );
};

InputNumber.propTypes = {
  placeholder: string,
  onChange: func,
  value: string,
  disabled: bool,
  name: string,
};
