import { number, string } from "prop-types";

export const ArrowLeftIcon = ({ width, height, fillColor }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={fillColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left">
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  );
};

ArrowLeftIcon.propTypes = {
  width: number,
  height: number,
  className: string,
  fillColor: string,
};

ArrowLeftIcon.defaultProps = {
  width: 24,
  height: 24,
  fillColor: "black",
};
