import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const Home = () => {
  return (
    <View style={styles.wholeDiv}>
      <View style={styles.avatarDetails}>
        <View style={styles.subDetails1}>
          <Image source={require("../../src/assets/images/avater.png")} />
          <View style={styles.subDetails}>
            <Text>Hello</Text>
            <Text style={styles.avatarName}>Sarthak</Text>
          </View>
        </View>
        <Image
          source={require("../../src/assets/images/stroks.png")}
          style={styles.img}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wholeDiv: {
    paddingLeft: wp(5.1),
    paddingRight: wp(5.1),
  },
  avatarDetails: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 3,
  },
  subDetails1: {
    flexDirection: "row",
    alignItems: "center",
  },
  subDetails: {
    marginLeft: 3,
  },
  avatarName: {
    fontWeight: "600",
    fontSize: 16,
  },
});

export default Home;
