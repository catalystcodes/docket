import React from "react";
import { Button } from "react-native-paper";

import { View, StyleSheet } from "react-native";

const ButtonField = () => {
  return (
    <View>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log("Pressed")}
        style={styles.Button}
      >
        Press me
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  Button: {
    backgroundColor: "#0560FD",
  },
});

export default ButtonField;
