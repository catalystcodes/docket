import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Nav = ({ text }) => {
  return (
    <View>
      <View style={styles.navHeader}>
        <Image source={require("../../assets/images/arrowLeft.png")} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navHeader: {
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

export default Nav;