import React from "react";
import { Button } from "react-native-paper";

import { View, StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const ButtonField = ({ children, type = "primary", textColor }) => {
  return (
    <View>
      <Button
        textColor={textColor}
        icon={children}
        mode={type}
        onPress={() => console.log("Pressed")}
        style={[styles.Button, type === "outline" && styles.outline]}
      >
        {children}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  Button: {
    backgroundColor: "#0560FD",
    borderRadius: 5,
    width: wp(89.8),
    height: hp(5.1),
    alignItems: "center",
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
