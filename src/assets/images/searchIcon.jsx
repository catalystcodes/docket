import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SearchIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#7B7B7B"
      d="M12.687 11.98a.5.5 0 0 0-.707.707l.707-.707Zm1.96 3.374a.5.5 0 0 0 .707-.707l-.708.707ZM5.89 3.534a.5.5 0 1 0-.156-.987l.156.988Zm-3.343 2.2a.5.5 0 0 0 .988.156l-.988-.156Zm9.433 6.953 2.666 2.667.708-.707-2.667-2.667-.707.707ZM7 12.5A5.5 5.5 0 0 1 1.5 7h-1A6.5 6.5 0 0 0 7 13.5v-1ZM12.5 7A5.5 5.5 0 0 1 7 12.5v1A6.5 6.5 0 0 0 13.5 7h-1ZM7 1.5A5.5 5.5 0 0 1 12.5 7h1A6.5 6.5 0 0 0 7 .5v1Zm0-1A6.5 6.5 0 0 0 .5 7h1A5.5 5.5 0 0 1 7 1.5v-1ZM5.734 2.547a3.833 3.833 0 0 0-3.187 3.187l.988.156A2.833 2.833 0 0 1 5.89 3.535l-.156-.988Z"
    />
  </Svg>
);
export default SearchIcon;
