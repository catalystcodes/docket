import React from "react";
import { View, StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const SignUpNav = () => {
  return (
    <View style={styles.nav}>
      <Image source={require("../../assets/images/arrowLeft.png")} />
      <Text style={styles.text}>Sign up</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: hp(4.6),
    width: wp(51.9),
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default SignUpNav;
