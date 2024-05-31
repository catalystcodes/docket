import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import InputField from "../components/molecules/InputField";

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
      <InputField placeholder={"Find your task here...."} />
      <Text style={styles.taskLabel}>Your Task</Text>
      <View style={styles.taskProgress}>
        <View style={styles.taskProgressStyle}>
          <Text style={styles.text}>In Progress</Text>
        </View>
        <View style={styles.taskProgressStyle}>
          <Text style={styles.text}>To Do</Text>
        </View>
        <View style={styles.taskProgressStyle}>
          <Text style={styles.text}> Completed</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wholeDiv: {
    paddingLeft: wp(5.1),
    paddingRight: wp(5.1),
    backgroundColor: "#fff",
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
  taskLabel: {
    fontWeight: "600",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
  },

  taskProgress: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  taskProgressStyle: {
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 19,
    paddingRight: 19,
    backgroundColor: "#0560FD",
    borderRadius: 10,
    // marginRight: 2,
  },
  text: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "500",
  },
});

export default Home;
