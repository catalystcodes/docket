import React from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const Nav = ({ text }) => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.navHeader}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("../../assets/images/arrowLeft.png")} />
        </Pressable>
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
