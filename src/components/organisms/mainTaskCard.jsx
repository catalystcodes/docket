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
import Points from "../../assets/images/points";
import { formatDate } from "../../utils";

const MainTaskCard = ({
  text,
  bg,
  category,
  name,
  progress,
  createdAt,
  finishDate,
  priority,
  status,
}) => {
  return (
    <View>
      <View style={styles.whole}>
        <View style={styles.cardHeader}>
          <View>
            <Text style={styles.header}>{category}</Text>
            <Text style={styles.subHeader1}>{name}</Text>
          </View>
          <Points />
        </View>
        <Text style={styles.text1}>Progress</Text>
        <View style={styles.gaps}>
          <View style={[styles.gap1, { width: `${progress}%` }]}></View>
          <View style={styles.gap2}></View>
          <Text>{progress}%</Text>
        </View>
        <View style={styles.sectors}>
          <View style={styles.calenderSector}>
            <CalenderClock />
            <Text style={styles.text2}>{formatDate(createdAt)}</Text>
          </View>
          <View style={styles.calenderSector}>
            <EmojiFlag />
            <Text>{formatDate(finishDate)}</Text>
          </View>
        </View>
        <View style={styles.imagesSector}>
          <View style={styles.images}>
            <View style={styles.img}>
              <Avatar1 />
            </View>
            <View style={[styles.img1, { left: -10 }]}>
              <Avatar2 />
            </View>
            <View style={[styles.img1, { left: -20 }]}>
              <Avatar3 />
            </View>
            <View style={[styles.img1, { left: -30 }]}>
              <Avatar4 />
            </View>
            <View style={[styles.img1, { left: -40 }]}>
              <MiniPlus />
            </View>
          </View>
          <View style={[styles.text3View, bg && { backgroundColor: bg }]}>
            <Text style={styles.text3}>{priority}</Text>
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

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    // width: wp(24.9),
  },
  gap2: {
    backgroundColor: "#D9D9D9",
    height: hp(0.5),
    // width: wp(12.9),
    flexGrow: 1,
    marginRight: 6,
  },
  gaps: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    width: wp(36.6),
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
    position: "relative",
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
  img: {
    position: "relative",
    width: 29,
    height: 29,
    minWidth: 29,
    minHeight: 29,
  },
  img1: {
    position: "relative",
    width: 29,
    height: 29,
    minWidth: 29,
    minHeight: 29,
  },
});

export default MainTaskCard;
