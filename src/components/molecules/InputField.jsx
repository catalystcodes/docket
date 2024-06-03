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
    <>
      <AppText>{label}</AppText>
      <View style={styles.inputFieldWrapper}>
        {showIcon && (
          <View
            style={{
              justifyContent: "center",
              paddingTop: 10,
              // backgroundColor: "yellow",
            }}
          >
            <SearchIcon style={styles.search} />
          </View>
        )}
        <TextInput
          label=""
          value={value}
          onChangeText={(text) => {
            setValue?.(text);
          }}
          style={{
            height: hp(5.16),
            backgroundColor: "#F6F6F6",
            // backgroundColor: "red",
            flexGrow: 1,
            paddingHorizontal: 0,
          }}
          contentStyle={{ padding: 0, margin: 0 }}
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
    </>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputFieldWrapper: {
    rowGap: 4,
    backgroundColor: "#F6F6F6",
    // marginTop: 10,
    borderRadius: 5,
    flexDirection: "row",
    // alignItems: "center",
  },
  search: {
    marginLeft: 18,
  },
});
