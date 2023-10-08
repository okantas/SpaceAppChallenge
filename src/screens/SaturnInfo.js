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

const SaturnInfo = () => {
  return (
    <ImageBackground
      source={require("../images/space.jpeg")}
      style={styles.container}
    >
      <View style={styles.planet}>
        <Image
          style={styles.planetImg}
          source={require("../images/saturn.png")}
        />
      </View>
      <BlurView style={styles.infoBlur} intensity={10}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}> I am Saturn</Text>
        </View>
        <ScrollView style={styles.infoWrapper}>
          <Text style={styles.info}>
            I am the sixth planet from the Sun and the second largest planet in
            the Solar System after Jupiter. I have plenty of places to visit. My
            interior is thought to consist of a rocky core surrounded by a deep
            layer of metallic hydrogen, an intermediate layer of liquid hydrogen
            and liquid helium, and finally a gaseous outer layer. I have a pale
            yellow hue due to ammonia crystals in my upper atmosphere. People
            usually like my appearance very much. But I am a gas giant, composed
            mainly of hydrogen and helium. I have no definite surface, although
            I am likely to have a solid core. My distance from the sun is
            1,426,666,000 kilometers. This is not to say that I am a hot planet.
            I go around the sun in about 30 years. You age late here. You have
            to wait 30 years for your next birthday.
          </Text>
        </ScrollView>
      </BlurView>
    </ImageBackground>
  );
};
export default SaturnInfo;

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
