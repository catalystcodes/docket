import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Home from "../../screens/home";
import calenderTab from "../../screens/calenderTab";
import AddTab from "../../screens/addTab";
import progressTab from "../../screens/progressTab";
import AccountTab from "../../screens/accountTab";

const Tab = createBottomTabNavigator();

const AppBottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "##0000FF",
        tabBarInactiveTintColor: "#000",
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-minus" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="calender"
        component={calenderTab}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="calendar-alt" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="add"
        component={AddTab}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="pluscircle" size={53} color="black" />
          ),
        }}
      />

      <Tab.Screen
        name="progress"
        component={progressTab}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="stats-chart-outline" size={24} color="black" />
          ),
        }}
      />

      <Tab.Screen
        name="account"
        component={AccountTab}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications-outline" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppBottomTabs;
