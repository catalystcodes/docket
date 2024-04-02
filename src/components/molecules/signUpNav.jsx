import React from "react";
import { View, StyleSheet, Pressable, Image, Text } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const SignUpNav = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.nav}>
      <Pressable
        onPress={() => {
          console.log("here");
          navigation.navigate("signin");
        }}
      >
        <Image source={require("../../assets/images/arrowLeft.png")} />
      </Pressable>
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
    marginBottom: 41,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default SignUpNav;
