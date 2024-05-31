import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

import InputField from "../components/molecules/InputField";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Facebook from "../components/atoms/icons/Facebook";
import Google from "../components/atoms/icons/google";

import KeyboardAvoidView from "../components/atoms/KeyboardAvoidView";
import ButtonField from "../components/molecules/ButtonField";
import AppText from "../components/atoms/AppText";
import { useNavigation } from "@react-navigation/native";
import Nav from "../components/molecules/nav";

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexGrow: 1,
        backgroundColor: "#fff",
        paddingHorizontal: wp(5.08),
      }}
    >
      <KeyboardAvoidView>
        <Nav text="Sign Up" />
        <View style={{ rowGap: hp(1.4) }}>
          <InputField
            label="E-mail"
            placeholder="Enter your email"
            type="email-address"
          />
          <InputField
            label="Password"
            placeholder="Password"
            secureTextEntry
            type="password"
          />

          <InputField
            label="Retype-Password"
            placeholder="Ensure password"
            secureTextEntry
            type="password"
          />

          <Pressable onPress={() => navigation.navigate("todo screens")}>
            <ButtonField textColor={"#fff"}>
              <AppText>Sign Up Now</AppText>
            </ButtonField>
          </Pressable>

          <Text style={styles.text}>Or with</Text>

          <ButtonField textColor={"#fff"}>
            <Facebook />
            <AppText>Sign Up with Facebook</AppText>
          </ButtonField>

          <ButtonField type="outline" textColor={"black"}>
            <Google />
            <AppText>Sign Up with Google</AppText>
          </ButtonField>
          <View style={styles.signUpArea}>
            <Text>Already Have an account? </Text>
            <Pressable onPress={() => navigation.navigate("signin")}>
              <Text style={{ color: "#0560FD" }}>Sixgnin</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "600",
    textAlign: "center",
    fontSize: 12,
    marginVertical: 49,
  },
  signUpArea: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp(13.3),
  },
});

export default SignUp;
