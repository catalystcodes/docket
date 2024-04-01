import { View, Text } from "react-native";
import React from "react";

const AppText = ({ children, ...rest }) => {
  return <Text {...rest}>{children}</Text>;
};

export default AppText;
