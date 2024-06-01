import { View, StyleSheet } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import AppText from "../atoms/AppText";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import EyeIcon from "../atoms/icons/EyeIcon";
import SearchIcon from "../../assets/images/searchIcon";

const InputField = ({
  label,
  placeholder,
  type,
  value,
  setValue,
  showIcon,
  ...rest
}) => {
  return (
    <View style={styles.inputFieldWrapper}>
      <AppText>{label}</AppText>
      {showIcon && <SearchIcon style={styles.search} />}
      <TextInput
        label=""
        value={value}
        onChangeText={(text) => {
          setValue?.(text);
        }}
        placeholder={placeholder}
        underlineColor="red"
        underlineStyle={{ width: 0 }}
        keyboardType={type === "password" ? "visible-password" : type}
        // activeUnderlineColor=""
        {...rest}
        right={
          type === "password" && <TextInput.Icon icon={() => <EyeIcon />} />
        }
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputFieldWrapper: {
    rowGap: 4,
    height: hp(5.16),
    backgroundColor: "#F6F6F6",
    marginTop: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  search: {
    marginLeft: 18,
  },
});
