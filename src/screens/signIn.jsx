import React, { useState } from "react";
import Checkbox from "expo-checkbox";

import { View, StyleSheet, Text, TextInput, Image } from "react-native";
import SignInNav from "../components/molecules/signInNav";
import KeyboardAvoidView from "../components/atoms/KeyboardAvoidView";
import InputField from "../components/molecules/InputField";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import ButtonField from "../components/molecules/ButtonField";
import AppText from "../components/atoms/AppText";

const SignIn = () => {
  const [isChecked, setChecked] = useState(false);
  return (
    <View
      style={{
        flexGrow: 1,
        backgroundColor: "#fff",
        paddingHorizontal: wp(5.08),
      }}
    >
      <KeyboardAvoidView>
        <SignInNav style={styles.header} />
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
        </View>

        <View style={styles.checkView}>
          <View style={styles.checkView2}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "#0560FD" : undefined}
            />
            <Text style={styles.forget}>Remember Password</Text>
          </View>
          <Text style={{ color: "#0560FD" }}>Forget password?</Text>
        </View>
        <View>
          <ButtonField textColor={"#fff"}>
            <AppText>Sign In Now</AppText>
          </ButtonField>
        </View>
        <Text style={styles.text}>Or with</Text>

        <ButtonField textColor={"#fff"}>
          <AppText>Login with Facebook</AppText>
        </ButtonField>

        <ButtonField type="outline" textColor={"black"}>
          <AppText>Login with Google</AppText>
        </ButtonField>
        <View style={styles.signUpArea}>
          <Text>I don’t Have an account?</Text>
          <Text>Signup</Text>
        </View>
      </KeyboardAvoidView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 100,
  },
  checkbox: {
    width: 16,
    height: 16,
    marginRight: 7.5,
  },

  checkView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    marginBottom: 25,
  },
  checkView2: {
    flexDirection: "row",
    marginRight: 94,
  },
  text: {
    fontWeight: "600",
    textAlign: "center",
    fontSize: 12,
    marginVertical: 49,
  },
});

export default SignIn;
