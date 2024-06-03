import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const MiniPlus = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={"100%"}
    height={"100%"}
    fill="none"
    {...props}
  >
    <Circle cx={14.5} cy={14.5} r={14.5} fill="#0560FD" />
    <Path stroke="#fff" d="M14.4 19.5V9m0 10.5V9M19.5 14.4H9m10.5 0H9" />
  </Svg>
);
export default MiniPlus;
