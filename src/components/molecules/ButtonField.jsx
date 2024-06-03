import React from "react";
import { Button } from "react-native-paper";

import { View, StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const ButtonField = ({ children, type = "primary", textColor, onPress }) => {
  return (
    <Button
      textColor={textColor}
      icon={children}
      mode={type}
      onPress={onPress}
      style={[styles.Button, type === "outline" && styles.outline]}
      contentStyle={{ height: hp(5.1), width: "100%" }}
    >
      {children}
    </Button>
  );
};

const styles = StyleSheet.create({
  Button: {
    backgroundColor: "#0560FD",
    borderRadius: 5,
    // width: wp(89.8),
    // height: hp(5.1),
    // justifyContent: "center",
    // alignItems: "center",
  },
  outline: {
    backgroundColor: "#fff",
    borderColor: "#0560FD",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
  },
});

export default ButtonField;
