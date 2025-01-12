import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./src/AppRoutes";
import SignUp from "./src/screens/signUp";
import AuthProvider from "./src/context";
import { Provider } from "react-redux";
import { store } from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="dark" />
        <PaperProvider>
          <AuthProvider>
            <SafeAreaProvider>
              <SafeAreaView style={{ flexGrow: 1 }}>
                <AppRoutes />
              </SafeAreaView>
            </SafeAreaProvider>
          </AuthProvider>
        </PaperProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
