import { number, string } from "prop-types";

export const ChevronRightIcon = ({ width, height, fillColor }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={fillColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );
};

ChevronRightIcon.propTypes = {
  width: number,
  height: number,
  fillColor: string,
};

ChevronRightIcon.defaultProps = {
  width: 24,
  height: 24,
  fillColor: "white",
};
