import React from "react";
import { BlurView } from "expo-blur";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const MarsTourism = () => {
  const navigation = useNavigation();
  const journeys = [
    {
      title: "TO EARTH",
      images: [
        { source: require("../images/mars.png"), style: styles.planets },
        {
          source: require("../images/journey.png"),
          style: styles.journeyLine,
        },
        { source: require("../images/earth.png"), style: styles.planets },
      ],
      goTo: () => navigation.navigate("MarsToEarth"),
    },
    {
      title: "TO MOON",
      images: [
        { source: require("../images/mars.png"), style: styles.planets },
        {
          source: require("../images/journey.png"),
          style: styles.journeyLine,
        },
        { source: require("../images/moon.png"), style: styles.planets },
      ],
      goTo: () => navigation.navigate("MarsToMoon"),
    },
    {
      title: "TO SATURN",
      images: [
        { source: require("../images/mars.png"), style: styles.planets },
        {
          source: require("../images/journey.png"),
          style: styles.journeyLine,
        },
        { source: require("../images/saturn.png"), style: styles.planets },
      ],
      goTo: () => navigation.navigate("MarsToSaturn"),
    },
    {
      title: "TO URANUS",
      images: [
        { source: require("../images/mars.png"), style: styles.planets },
        {
          source: require("../images/journey.png"),
          style: styles.journeyLine,
        },
        { source: require("../images/uranus.png"), style: styles.planets },
      ],
      goTo: () => navigation.navigate("MarsToUranus"),
    },
    {
      title: "TO VENUS",
      images: [
        { source: require("../images/mars.png"), style: styles.planets },
        {
          source: require("../images/journey.png"),
          style: styles.journeyLine,
        },
        { source: require("../images/venus.png"), style: styles.planets },
      ],
      goTo: () => navigation.navigate("MarsToVenus"),
    },
    {
      title: "TO NEPTUNE",
      images: [
        { source: require("../images/mars.png"), style: styles.planets },
        {
          source: require("../images/journey.png"),
          style: styles.journeyLine,
        },
        { source: require("../images/neptune.png"), style: styles.planets },
      ],
      goTo: () => navigation.navigate("MarsToNeptune"),
    },
  ];

  return (
    <ImageBackground
      source={require("../images/space.jpeg")}
      style={styles.container}
    >
      <Text style={styles.title}>WELCOME TO MARS TOURISM</Text>
      {journeys.map((journey, index) => (
        <TouchableOpacity
          onPress={journey.goTo}
          key={index}
          style={styles.journeyWrapper}
        >
          <BlurView style={styles.journeyBlur} intensity={0}>
            <Text style={styles.journeyTitle}>{journey.title}</Text>
            <View style={styles.journey}>
              {journey.images.map((image, imageIndex) => (
                <Image
                  key={imageIndex}
                  style={image.style}
                  source={image.source}
                />
              ))}
            </View>
          </BlurView>
        </TouchableOpacity>
      ))}
    </ImageBackground>
  );
};
export default MarsTourism;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 5,
    marginHorizontal: 14,
    marginBottom: 10,
  },
  journeyWrapper: { marginVertical: 8 },
  journeyBlur: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 20,
    padding: 10,
    textAlign: "center",
    alignItems: "center",
  },
  journeyTitle: {
    fontWeight: "bold",
    position: "absolute",
    top: 7,
  },
  journey: {
    flexDirection: "row",
  },

  journeyLine: {
    width: 200,
    resizeMode: "contain",
  },
  planets: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
});
