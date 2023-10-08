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

const MoonInfo = () => {
  return (
    <ImageBackground
      source={require("../images/space.jpeg")}
      style={styles.container}
    >
      <View style={styles.planet}>
        <Image
          style={styles.planetImg}
          source={require("../images/moon.png")}
        />
      </View>
      <BlurView style={styles.infoBlur} intensity={10}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}> I am Moon</Text>
        </View>
        <ScrollView style={styles.infoWrapper}>
          <Text style={styles.info}>
            I am the Earth's only natural satellite. I have no atmosphere
            because there is no gas. There are many pits above me. These pits
            are called craters. My distance from Earth is about 384,000
            kilometers. That is not a very big distance. That's why we can see
            the Moon very clearly from Earth. My average temperature in the
            middle of the day is 107 degrees Celsius. At this temperature you
            can get a little tan. But during the night my average temperature is
            -153 degrees Celsius. So you can cool down at night. My surface area
            is 3,793 × 107 km2. I'm 0.074th the size of the Earth.
          </Text>
        </ScrollView>
      </BlurView>
    </ImageBackground>
  );
};
export default MoonInfo;

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
    width: 1400,
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
