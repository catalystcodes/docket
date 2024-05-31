import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import InputField from "../components/molecules/InputField";
import TaskCards from "../components/organisms/TaskCards";
import KeyboardAvoidView from "../components/atoms/KeyboardAvoidView";

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
      <KeyboardAvoidView>
        <InputField placeholder={"Find your task here...."} />
      </KeyboardAvoidView>

      <Text style={styles.taskLabel}>Your Task</Text>
      <View style={styles.taskProgress}>
        <View style={styles.taskProgressStyle}>
          <Text style={styles.text}>In Progress</Text>
        </View>
        <View style={styles.taskProgressStyle1}>
          <Text style={styles.text1}>To Do</Text>
        </View>
        <View style={styles.taskProgressStyle1}>
          <Text style={styles.text1}> Completed</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.task}>
          <TaskCards />
          <TaskCards />
          <TaskCards />
          <TaskCards />
          <TaskCards />
        </View>
      </ScrollView>
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
    marginBottom: 15,
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

  taskProgressStyle1: {
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 19,
    paddingRight: 19,
    borderRadius: 10,
    // marginRight: 2,
    borderWidth: 1,
    borderColor: "#D4D4D4",
  },

  text: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "500",
  },
  text1: {
    color: "#9A9A9A",
    fontSize: 12,
    fontWeight: "500",
  },
  tasks: {},
});

export default Home;
