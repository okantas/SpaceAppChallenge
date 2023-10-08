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

const EarthInfo = () => {
  return (
    <ImageBackground
      source={require("../images/space.jpeg")}
      style={styles.container}
    >
      <View style={styles.planet}>
        <Image source={require("../images/earth.png")} />
      </View>
      <BlurView style={styles.infoBlur} intensity={10}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}> I am Earth</Text>
        </View>
        <ScrollView style={styles.infoWrapper}>
          <Text style={styles.info}>
            I am the third planet of the Solar System. I am 29% land and 71%
            mostly oceans. My exact age is unknown. But some estimate is 4.568
            billion years. My exact distance from the Sun varies along the
            orbit, but is approximately 150 million kilometers or 8.3 light
            minutes. My surface area is 510072000 km2. Many human beings have
            come and gone in all this time. Perihelion is 147,095,000 km. At
            Perihelion I am closer to the Sun and warmer. Aphelion is
            152,100,000 km. On Aphelion, I'm farther from the Sun and colder. I
            might also be a bit fat. I'm flat on top and bulging on the sides.
            My mass is 5.97237x10^24 kg. I also have all seasons. I am a source
            of life for people.
          </Text>
        </ScrollView>
      </BlurView>
    </ImageBackground>
  );
};
export default EarthInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  planet: {
    position: "absolute",
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
