import { BlurView } from "expo-blur";
import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";

const NeptuneInfo = () => {
  return (
    <ImageBackground
      source={require("../images/space.jpeg")}
      style={styles.container}
    >
      <View style={styles.planet}>
        <Image
          style={styles.planetImg}
          source={require("../images/neptune.png")}
        />
      </View>
      <BlurView style={styles.infoBlur} intensity={10}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}> I am Neptune</Text>
        </View>
        <ScrollView style={styles.infoWrapper}>
          <Text style={styles.info}>
            Approximately 80% is ammonia and methane. I contain heavy metals. I
            can therefore cause health hazards. 1 year equals a total of 165
            Earth years. I am an ice planet. I have an average temperature of
            -214 degrees Celsius. You need to take your coats. You might catch a
            cold and get sick. The radius of Neptune is approximately 24,000
            kilometers. I also have very strong winds in my atmosphere. These
            winds can reach speeds of 2,000 kilometers per hour. These
            hurricanes are strong enough to blow you away. My outermost layer is
            made of hydrogen, helium and methane. My surface does not have a
            solid surface like other gas giants. So its shape is more amorphous.
            As you go deeper into my atmosphere, the pressure increases and the
            gases solidify. So the deeper you go into my atmosphere, the more
            different it looks. My surface is still being studied.
          </Text>
        </ScrollView>
      </BlurView>
    </ImageBackground>
  );
};
export default NeptuneInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  planet: {
    position: "absolute",
  },
  planetImg: {
    alignSelf: "center",
    resizeMode: "contain",
    width: 1600,
    height: 1100,
  },
  infoBlur: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 20,
    padding: 10,
    textAlign: "center",
    marginHorizontal: 20,
    height: 500,
  },
  titleWrapper: {
    borderWidth: 1,
    alignSelf: "flex-start",
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20,
    padding: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "left",
    borderColor: "#FFFFFF",
  },
  infoWrapper: {
    paddingHorizontal: 20,
  },
  info: {
    fontSize: 22,
  },
});
