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
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="home-minus"
              size={24}
              color={focused ? "#0560FD" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="calender"
        component={calenderTab}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5
              name="calendar-alt"
              size={24}
              color={focused ? "#0560FD" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="add"
        component={AddTab}
        options={{
          tabBarIcon: () => (
            <AntDesign
              name="pluscircle"
              size={53}
              color="#0560FD"
              style={{ position: "absolute" }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="progress"
        component={progressTab}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="stats-chart-outline"
              size={24}
              color={focused ? "#0560FD" : "black"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="account"
        component={AccountTab}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="shield-account-outline"
              size={24}
              color={focused ? "#0560FD" : "black"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppBottomTabs;
