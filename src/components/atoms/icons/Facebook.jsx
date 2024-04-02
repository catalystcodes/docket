import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#0560FD"
        d="M12 24c6.627 0 12-5.372 12-12 0-6.627-5.373-12-12-12S0 5.373 0 12c0 6.628 5.373 12 12 12Z"
      />
      <Path
        fill="#fff"
        d="M15.902 3.683h-2.658c-1.578 0-3.333.664-3.333 2.95.008.797 0 1.56 0 2.42H8.086v2.903h1.882v8.36h3.457v-8.415h2.282l.207-2.857h-2.548s.005-1.27 0-1.64c0-.904.94-.852.996-.852h1.541V3.683h-.001Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
