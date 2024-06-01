import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CalenderClock from "../../assets/images/CalenderClock";
import EmojiFlag from "../../assets/images/EmojiFlag";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Avatar1 from "../../assets/images/avatar1";
import Avatar2 from "../../assets/images/avatar2";
import Avatar3 from "../../assets/images/avatar3";
import Avatar4 from "../../assets/images/avatar4";
import MiniPlus from "../../assets/images/miniPlus";

const TaskCards = ({ text }) => {
  return (
    <View>
      <View style={styles.whole}>
        <Text style={styles.header}>Design</Text>
        <Text style={styles.subHeader1}>The Logo Process</Text>
        <Text style={styles.text1}>Progress</Text>
        <View style={styles.gaps}>
          <View style={styles.gap1}></View>
          <View style={styles.gap2}></View>
          <Text>60%</Text>
        </View>
        <View style={styles.sectors}>
          <View style={styles.calenderSector}>
            <CalenderClock />
            <Text style={styles.text2}>12 Jan 2023</Text>
          </View>
          <View style={styles.calenderSector}>
            <EmojiFlag />
            <Text>20 Jan 2023</Text>
          </View>
        </View>
        <View style={styles.imagesSector}>
          <View style={styles.images}>
            <Avatar1 />
            <Avatar2 />
            <Avatar3 />
            <Avatar4 />
            <MiniPlus />
          </View>
          <View style={styles.text3View}>
            <Text style={styles.text3}>{text}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  whole: {
    padding: 15,
    marginBottom: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D4D4D4",
  },
  header: {
    fontWeight: "500",
    fontSize: 12,
    color: "#0560FD",
  },
  subHeader1: {
    fontWeight: "500",
    fontSize: 16,
    marginTop: 3,
    marginBottom: 8,
  },
  text1: {
    fontSize: 12,
    fontWeight: "500",
    color: "#6E6E6E",
  },
  gap1: {
    backgroundColor: "#0560FD",
    height: hp(0.5),
    width: wp(24.9),
  },
  gap2: {
    backgroundColor: "#D9D9D9",
    height: hp(0.5),
    width: wp(12.9),
    marginRight: 6,
  },
  gaps: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  sectors: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  calenderSector: {
    flexDirection: "row",
  },
  text2: {
    marginRight: 15,
  },
  images: {
    flexDirection: "row",
  },

  text3View: {
    backgroundColor: "#0560fd",
    borderRadius: 41,
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 19,
    paddingLeft: 19,
  },

  text3: {
    fontSize: 12,
    fontWeight: "400",
    color: "#fff",
  },
  imagesSector: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default TaskCards;
