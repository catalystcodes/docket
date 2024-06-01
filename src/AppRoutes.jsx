import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "./screens/signIn";
import SignUp from "./screens/signUp";
import BottomTabs from "./components/organisms/BottomTabs";
import Home from "./screens/home";

const Stack = createStackNavigator();

const AppRoutes = () => {
  const { Navigator, Screen } = Stack;
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="todo screens"
    >
      <Screen name="signin" component={SignIn} />
      <Screen name="signup" component={SignUp} />
      <Screen name="todo screens" component={BottomTabs} />
    </Navigator>
  );
};

export default AppRoutes;
