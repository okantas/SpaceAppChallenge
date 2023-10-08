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

const VenusInfo = () => {
  return (
    <ImageBackground
      source={require("../images/space.jpeg")}
      style={styles.container}
    >
      <View style={styles.planet}>
        <Image
          style={styles.planetImg}
          source={require("../images/venus.png")}
        />
      </View>
      <BlurView style={styles.infoBlur} intensity={10}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}> I am Venus</Text>
        </View>
        <ScrollView style={styles.infoWrapper}>
          <Text style={styles.info}>
            My size is very close to the Earth. I am also known as a sister
            planet to the Earth. The biggest feature that distinguishes me from
            the Earth and many other planets is that I rotate in the opposite
            direction to them. I complete my rotation in 243 days, the Earth's
            time. I am the second planet in the Solar System in terms of
            distance from the Sun, but I am the hottest planet. I can be seen on
            Earth before sunrise and after sunset, and I am the brightest object
            in the sky when seen with the naked eye from Earth. That is why I am
            also called the Evening Star, the Morning Star, the Tan Star or the
            Shepherd's Star. There are mountains and volcanoes on my surface.
          </Text>
        </ScrollView>
      </BlurView>
    </ImageBackground>
  );
};
export default VenusInfo;

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
    width: 1500,
    height: 1200,
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
