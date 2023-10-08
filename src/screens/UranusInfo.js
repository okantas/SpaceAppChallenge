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

const UranusInfo = () => {
  return (
    <ImageBackground
      source={require("../images/space.jpeg")}
      style={styles.container}
    >
      <View style={styles.planet}>
        <Image
          style={styles.planetImg}
          source={require("../images/uranus.png")}
        />
      </View>
      <BlurView style={styles.infoBlur} intensity={10}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}> I am Uranus</Text>
        </View>
        <ScrollView style={styles.infoWrapper}>
          <Text style={styles.info}>
            I'm a planet 64 times bigger than Earth. I belong to the class of
            ice giants. My surface temperature is approximately -176 degrees
            Celsius. I suggest you come in your winter clothes in this cold. It
            takes me 84 years to complete one revolution around the sun. It is
            almost impossible to see your other birthday here. My gravity is
            very strong. That's why you weigh more than you do on Earth. My mass
            is about 86.810.300.000.000.000.000.000 billion kilograms. 14 times
            heavier than the Earth. It is known that there is a mantle around my
            core with water, ammonia and methane and a very high temperature. On
            the other hand, I am the least photogenic planet. So unfortunately I
            don't immediately come to people's minds. But there are people who
            are interested in me. I am still being studied.
          </Text>
        </ScrollView>
      </BlurView>
    </ImageBackground>
  );
};
export default UranusInfo;

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
    width: 1700,
    height: 1600,
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
