import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const SignInNav = () => {
  return (
    <View style={[styles.nav]}>
      <Image source={require("../../assets/images/arrowLeft.png")} />
      <Text style={styles.text}>Sign Up</Text>
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
    marginBottom: 41,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default SignInNav;
