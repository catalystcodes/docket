import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Points = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#D4D4D4"
      strokeWidth={0.2}
      d="M21 10.5c0 5.523-4.477 10-10 10s-10-4.477-10-10S5.477.5 11 .5s10 4.477 10 10Z"
    />
    <Path
      fill="#252525"
      d="M8 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM16 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
    />
  </Svg>
);
export default Points;
