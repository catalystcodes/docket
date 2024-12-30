import { View, Text } from "react-native";
import React, { useCallback } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "./screens/signIn";
import SignUp from "./screens/signUp";
import BottomTabs from "./components/organisms/BottomTabs";
import Home from "./screens/home";
import { getAuthUser } from "./utils/auth.helper";
import { useAuthContext } from "./context";
import * as SplashScreen from "expo-splash-screen";

const Stack = createStackNavigator();

const AppRoutes = () => {
  const { Navigator, Screen } = Stack;
  const { isLoggedIn, isLoadingAuthData } = useAuthContext();

  const onLayoutRootView = useCallback(async () => {
    if (!isLoadingAuthData) {
      await SplashScreen.hideAsync();
    }
  }, [isLoadingAuthData]);

  if (isLoadingAuthData) {
    return null;
  }

  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      onLayoutRootView={onLayoutRootView}
      initialRouteName="todo screens"
    >
      {isLoggedIn ? (
        <Screen name="todo screens" component={BottomTabs} />
      ) : (
        <>
          <Screen name="signin" component={SignIn} />
          <Screen name="signup" component={SignUp} />
        </>
      )}
    </Navigator>
  );
};

export default AppRoutes;
