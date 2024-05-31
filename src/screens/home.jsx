import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const Home = () => {
  return (
    <View style={styles.wholeDiv}>
      <View>
        <View>
          <Image source={require("../../src/assets/images/avater.png")} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wholeDiv: {
    paddingLeft: wp(5.1),
  },
});

export default Home;
