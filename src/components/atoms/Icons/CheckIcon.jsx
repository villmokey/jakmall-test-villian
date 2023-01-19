import { number, string } from "prop-types";

export const CheckIcon = ({ width, height, fillColor, className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={fillColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={"feather feather-check " + className}>
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
};

CheckIcon.propTypes = {
  width: number,
  height: number,
  fillColor: string,
  className: string,
};

CheckIcon.defaultProps = {
  width: 24,
  height: 24,
  fillColor: "#1BD97B",
};
