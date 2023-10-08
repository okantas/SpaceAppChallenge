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

const MarsInfo = () => {
  return (
    <ImageBackground
      source={require("../images/space.jpeg")}
      style={styles.container}
    >
      <View style={styles.planet}>
        <Image
          style={styles.planetImg}
          source={require("../images/mars.png")}
        />
      </View>
      <BlurView style={styles.infoBlur} intensity={10}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}> I am Mars</Text>
        </View>
        <ScrollView style={styles.infoWrapper}>
          <Text style={styles.info}>
            I am a cold desert planet, half the size of the Earth. I look red
            because of the iron in my soil, hence my other name, Red Planet.
            Like Earth, I have seasons, poles, volcanoes, canyons and weather
            phenomena. I am the planet most similar to Earth. My atmosphere is
            very thin. My atmosphere contains about 96% carbon dioxide, 1.9%
            argon, 1.9% nitrogen and free oxygen, carbon monoxide, water and
            methane. There is a lot of water on my surface. The average distance
            between the two planets is 225 million kilometers, but this distance
            is variable. The surface temperature varies between 143 degrees
            Celsius and 35 degrees Celsius. The temperature is more unstable
            than on Earth. But thanks to my near-Earth living conditions, you
            won't feel out of place.
          </Text>
        </ScrollView>
      </BlurView>
    </ImageBackground>
  );
};
export default MarsInfo;

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
    height: 1500,
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
