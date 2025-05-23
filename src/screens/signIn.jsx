import React, { useEffect, useState } from "react";
import Checkbox from "expo-checkbox";

import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import KeyboardAvoidView from "../components/atoms/KeyboardAvoidView";
import InputField from "../components/molecules/InputField";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import ButtonField from "../components/molecules/ButtonField";
import AppText from "../components/atoms/AppText";
import Facebook from "../components/atoms/icons/Facebook";
import Google from "../components/atoms/icons/google";
import { useNavigation } from "@react-navigation/native";
import Nav from "../components/molecules/nav";
import { doLogin, getAuthUser } from "../utils/auth.helper";

import { useAuthContext } from "../context";
import { useDispatch } from "react-redux";
// import { doAPILogin } from "../service/auth.services";
import { login } from "../store";
import { doAPILogin } from "../service";

const SignIn = () => {
  const [isChecked, setChecked] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const { setUserInfo } = useAuthContext();

  const disableButton =
    form.email.trim() === "" || form.password.trim() === "" || isLoading;

  const handleLogin = async () => {
    if (disableButton) return;
    setIsLoading(true);
    try {
      // const data = await doLogin(form);
      const data = await doAPILogin(form);
      // if (data) {
      //   setUserInfo(form.username);
      // }
      console.log({ data });
      if (data) {
        dispatch(login(data));
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <View
      style={{
        flexGrow: 1,
        backgroundColor: "#fff",
        paddingHorizontal: wp(5.08),
      }}
    >
      <KeyboardAvoidView>
        <Nav text="Sign In" />
        <View style={{ rowGap: hp(1.4) }}>
          <InputField
            label="E-mail"
            placeholder="Enter your email"
            type="email-address"
            value={form.email}
            setValue={(text) =>
              setForm((currentValue) => ({ ...currentValue, email: text }))
            }
          />
          <InputField
            label="Password"
            placeholder="Password"
            // secureTextEntry
            type="password"
            value={form.password}
            setValue={(text) =>
              setForm((currentValue) => ({ ...currentValue, password: text }))
            }
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

        <ButtonField
          onPress={handleLogin}
          textColor={"#fff"}
          isLoading={isLoading}
          disabled={disableButton}
        >
          <AppText>Sign In Now</AppText>
        </ButtonField>

        <Text style={styles.text}>Or with</Text>

        <View>
          <ButtonField textColor={"#fff"}>
            {/* <Facebook /> */}
            <AppText>Login with Facebook</AppText>
          </ButtonField>
        </View>

        <View></View>
        <ButtonField type="outline" textColor={"black"}>
          {/* <Google /> */}
          <AppText>Login with Google</AppText>
        </ButtonField>
        <View style={styles.signUpArea}>
          <Text>I don’t Have an account? </Text>
          <Pressable>
            <Text style={{ color: "#0560FD" }}>Signup</Text>
          </Pressable>
        </View>
      </KeyboardAvoidView>
    </View>
  );
};

const styles = StyleSheet.create({
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
  signUpArea: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp(23.1),
  },
});

export default SignIn;
