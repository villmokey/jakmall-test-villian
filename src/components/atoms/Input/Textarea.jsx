import { func, string } from "prop-types";
import { useState } from "react";
import { CheckIcon } from "../Icons/CheckIcon";
import { CloseIcon } from "../Icons/CloseIcon";

export const Textarea = ({ onChange, value, placeholder, name }) => {
  return (
    <div className="inline-block relative">
      <textarea
        name={name}
        cols="30"
        rows="30"
        required
        className={`h-[120px] w-full border-[#CCCCCC] placeholder:px-1 pr-9 pl-3 py-3 border placeholder:text-[#CCCCCC] resize-none peer invalid:border-[#FF8A00] valid:border-[#1BD97B] outline-none`}
        onChange={onChange}
        maxLength={120}
        value={value}
        placeholder={placeholder}
      ></textarea>
      <CheckIcon width={24} height={24} className={`absolute top-[20px] right-3 peer-valid:visible invisible`} />
      <CloseIcon width={24} height={24} className={`absolute top-[20px] right-3 peer-invalid:visible invisible`} />
      <span className={`text-[#FF8A00] text-sm ${value.length > 120 || value.length === 0 ? "text-[#FF8A00]" : "text-[#1BD97B]"}`}>{value.length}/120</span>
    </div>
  );
};

Textarea.propTypes = {
  onChange: func,
  placeholder: string,
  value: string,
};
