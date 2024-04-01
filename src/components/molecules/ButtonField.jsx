import React from "react";
import { Button } from "react-native-paper";

import { View, StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const ButtonField = ({ children }) => {
  return (
    <View>
      <Button
        icon={children}
        mode="contained"
        onPress={() => console.log("Pressed")}
        style={styles.Button}
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
});

export default ButtonField;
