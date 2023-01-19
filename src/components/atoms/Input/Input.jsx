import { bool, func } from "prop-types";
import { string } from "prop-types";
import { CheckIcon } from "../Icons/CheckIcon";
import { CloseIcon } from "../Icons/CloseIcon";

export const Input = ({ placeholder, onChange, value, type, disabled, isValid, name }) => {
  return (
    <div className="inline-block relative">
      <input
        name={name}
        type={type}
        disabled={disabled}
        required={!disabled ? true : false}
        className={`pr-9 pl-3 peer invalid:border-[#FF8A00] valid:border-[#1BD97B] outline-none h-[60px] w-full border-[#CCCCCC] placeholder:px-1 px-3 border placeholder:text-[#CCCCCC]`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <CheckIcon width={24} height={24} className={`absolute top-[20px] right-3 peer-valid:visible invisible`} />
      <CloseIcon width={24} height={24} className={`absolute top-[20px] right-3 peer-invalid:visible invisible`} />
    </div>
  );
};

Input.propTypes = {
  placeholder: string,
  onChange: func,
  value: string,
  type: string,
  className: string,
  disabled: bool,
  name: string,
};

Input.defaultProps = {
  type: "text",
};
