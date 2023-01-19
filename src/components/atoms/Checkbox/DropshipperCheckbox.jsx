import { func } from "prop-types";
import { bool } from "prop-types";
import { CheckDropshipperIcon } from "../Icons/CheckDropshipperIcon";

export const DropshipperCheckbox = ({ isChecked, onClick }) => {
  return (
    <button type="button" className="border-[#1BD97B] border-2 bg-none h-[17px] w-[17px] md:h-[15px] md:w-[15px] lg:h-[20px] lg:w-[20px]  active:bg-none" onClick={onClick}>
      {isChecked ? <CheckDropshipperIcon className="w-[14px] h-[14px] md:w-[12px] md:h-[12px] lg:w-[17px] lg:h-[17px]" /> : ""}
    </button>
  );
};

DropshipperCheckbox.propTypes = {
  isChecked: bool,
  onClick: func,
};
