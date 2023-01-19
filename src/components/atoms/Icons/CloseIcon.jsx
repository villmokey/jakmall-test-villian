import { number, string } from "prop-types";

export const CloseIcon = ({ width, height, fillColor, className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={fillColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"feather feather-x " + className}>
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
};

CloseIcon.propTypes = {
  width: number,
  height: number,
  fillColor: string,
};

CloseIcon.defaultProps = {
  width: 24,
  height: 24,
  fillColor: "#FF8A00",
};
