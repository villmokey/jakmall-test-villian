import { func, string } from "prop-types";
import { useState } from "react";
import { CheckIcon } from "../Icons/CheckIcon";
import { CloseIcon } from "../Icons/CloseIcon";

export const Textarea = ({ onChange, value, placeholder }) => {
  const [charCounter, setCharCounter] = useState(0);

  const onChangeCharLength = (e) => {
    setCharCounter(e.target.value.length);
  };

  return (
    <div className="inline-block relative">
      <textarea
        cols="30"
        rows="30"
        className="h-[120px] w-full border-[#CCCCCC] placeholder:px-1 pr-9 pl-3 py-3 border placeholder:text-[#CCCCCC] resize-none peer invalid:border-[#FF8A00] valid:border-[#1BD97B] outline-none"
        onChange={onChangeCharLength}
        maxLength={120}
        value={value}
        placeholder={placeholder}
      ></textarea>
      <CheckIcon width={24} height={24} className={`absolute top-[40px] right-3 peer-valid:flex hidden`} />
      <CloseIcon width={24} height={24} className={`absolute top-[40px] right-3 peer-invalid:flex hidden`} />
      <span className={`text-[#FF8A00] text-sm ${charCounter > 120 || charCounter === 0 ? "text-[#FF8A00]" : "text-[#1BD97B]"}`}>{charCounter}/120</span>
    </div>
  );
};

Textarea.propTypes = {
  onChange: func,
  placeholder: string,
  value: string,
};
