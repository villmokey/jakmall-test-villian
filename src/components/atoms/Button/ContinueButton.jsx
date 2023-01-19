import { func, string } from "prop-types";

export const ContinueButton = ({ text, onClick }) => {
  return (
    <button type="submit" className="h-[60px] w-full bg-[#FF8A00] text-white" onClick={onClick}>
      {text}
    </button>
  );
};

ContinueButton.propTypes = {
  text: string,
  onClick: func,
};
