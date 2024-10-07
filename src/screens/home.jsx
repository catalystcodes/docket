import React, { Fragment, useMemo, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import InputField from "../components/molecules/InputField";
import KeyboardAvoidView from "../components/atoms/KeyboardAvoidView";
import SearchIcon from "../assets/images/searchIcon";
import { Feather } from "@expo/vector-icons";
import { tasks } from "../constantData";
import MainTaskCard from "../components/organisms/mainTaskCard";
import { useAuthContext } from "../context";

const Home = () => {
  const [activeTab, setActiveTab] = useState("in progress");
  const { userInfo, clearAuthData } = useAuthContext();

  const handleActiveTab = (type) => {
    if (type === activeTab) return;
    setActiveTab(type);
  };

  const tasksToRender = useMemo(() => {
    return tasks.filter(
      (task) => task.status?.toLowerCase() === activeTab?.toLowerCase()
    );
  }, [activeTab]);

  return (
    <View style={styles.wholeDiv}>
      <View style={styles.avatarDetails}>
        <View style={styles.subDetails1}>
          <Image source={require("../../src/assets/images/avater.png")} />
          <View style={styles.subDetails}>
            <Text>Hello</Text>
            <Text style={styles.avatarName}>{userInfo}</Text>
          </View>
        </View>
        <Pressable
          onPress={() => {
            clearAuthData();
          }}
        >
          <Feather name="log-out" size={24} color="black" />
          {/* <Image
            source={require("../../src/assets/images/stroks.png")}
            style={styles.img}
          /> */}
        </Pressable>
      </View>
      <View>
        <KeyboardAvoidView style={{ backgroundColor: "red" }}>
          <InputField placeholder="Find your task here...." showIcon />
        </KeyboardAvoidView>
      </View>

      <Text style={styles.taskLabel}>Your Task</Text>
      <View style={styles.taskProgress}>
        <Pressable
          onPress={() => handleActiveTab("in progress")}
          style={[
            styles.taskProgressStyle1,
            activeTab === "in progress" && styles.taskProgressStyle,
          ]}
        >
          <Text
            style={[styles.text1, activeTab === "in progress" && styles.text]}
          >
            In Progress
          </Text>
        </Pressable>
        <Pressable
          onPress={() => handleActiveTab("to do")}
          style={[
            styles.taskProgressStyle1,
            activeTab === "to do" && styles.taskProgressStyle,
          ]}
        >
          <Text style={[styles.text1, activeTab === "to do" && styles.text]}>
            To Do
          </Text>
        </Pressable>
        <Pressable
          onPress={() => handleActiveTab("completed")}
          style={[
            styles.taskProgressStyle1,
            activeTab === "completed" && styles.taskProgressStyle,
          ]}
        >
          <Text
            style={[styles.text1, activeTab === "completed" && styles.text]}
          >
            {" "}
            Completed
          </Text>
        </Pressable>
      </View>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 200 }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          {/* <TaskCards text="High" />
          <TaskCards text="Medium" bg={"#CC00FF"} />
          <TaskCards text="High" /> */}
          {tasksToRender.map((task, taskIndex) => {
            return (
              <Fragment key={taskIndex}>
                <MainTaskCard {...task} />
              </Fragment>
            );
          })}
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
    flexGrow: 1,
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
    backgroundColor: "red",
  },
  taskLabel: {
    fontWeight: "600",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
  },

  taskProgress: {
    flexDirection: "row",
    marginBottom: 15,
  },

  taskProgressStyle: {
    backgroundColor: "#0560FD",
    borderColor: "transparent",
  },

  taskProgressStyle1: {
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 19,
    paddingRight: 19,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D4D4D4",
    marginLeft: 11,
  },

  text: {
    color: "#fff",
  },
  text1: {
    color: "#9A9A9A",
    fontSize: 12,
    fontWeight: "500",
  },
});

export default Home;
