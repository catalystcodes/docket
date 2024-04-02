import React from "react";
import { View, StyleSheet, Text } from "react-native";
import SignUpNav from "../components/molecules/signInNav";
import InputField from "../components/molecules/InputField";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const SignUp = () => {
  return (
    <View>
      <SignUpNav />
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
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignUp;
