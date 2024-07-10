import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./src/AppRoutes";
import SignUp from "./src/screens/signUp";
import AuthProvider from "./src/context";

export default function App() {
  return (
    <NavigationContainer>
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
  );
}

const styles = StyleSheet.create({});
