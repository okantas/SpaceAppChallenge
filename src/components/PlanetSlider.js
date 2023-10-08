import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";

const PlanetSlider = () => {
  const navigation = useNavigation();
  const planetsData = [
    {
      name: "EARTH",
      description:
        "I am the third planet of the Solar System. I am 29% land and 71% mostly oceans. My exact age is unknown. But some estimate is 4.568  billion years. My exact distance... ",
      imageSource: require("../images/earth.png"),
      goTo: () => navigation.navigate("EarthInfo"),
    },
    {
      name: "MOON",
      description:
        "I am the Earth's only natural satellite. I have no atmosphere because there is no gas. There are many pits above me. These pits are called craters. My... ",
      imageSource: require("../images/moon.png"),
      goTo: () => navigation.navigate("MoonInfo"),
    },
    {
      name: "SATURN",
      description:
        "I am the sixth planet from the Sun and the second largest planet in the Solar System after Jupiter. I have plenty of places to visit. My interior is thought to consist...",
      imageSource: require("../images/saturn.png"),
      goTo: () => navigation.navigate("SaturnInfo"),
    },
    {
      name: "MARS",
      description:
        "I am a cold desert planet, half the size of the Earth. I look red because of the iron in my soil, hence my other name, Red Planet. Like Earth, I have seasons, poles...",
      imageSource: require("../images/mars.png"),
      goTo: () => navigation.navigate("MarsInfo"),
    },
    {
      name: "URANUS",
      description:
        "I'm a planet 64 times bigger than Earth. I belong to the class of ice giants. My surface temperature is approximately -176 degrees Celsius. I suggest you come... ",
      imageSource: require("../images/uranus.png"),
      goTo: () => navigation.navigate("UranusInfo"),
    },
    {
      name: "VENUS",
      description:
        "My size is very close to the Earth. I am also known as a sister planet to the Earth. The biggest feature that distinguishes me from the Earth and many other planet...",
      imageSource: require("../images/venus.png"),
      goTo: () => navigation.navigate("VenusInfo"),
    },
    {
      name: "NEPTUNE",
      description:
        "Approximately 80% is ammonia and methane. I contain heavy metals. I can therefore cause health hazards. 1 year equals a total of 165 Earth years. I am an ice planet. I... ",
      imageSource: require("../images/neptune.png"),
      goTo: () => navigation.navigate("NeptuneInfo"),
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.titleSlider}>Explore Universe</Text>
      <ScrollView horizontal={true} style={styles.cardsContainer}>
        {planetsData.map((planet, index) => (
          <TouchableOpacity
            onPress={planet.goTo}
            style={styles.card}
            key={index}
          >
            <Image style={styles.cardImg} source={planet.imageSource} />
            <BlurView style={styles.cardBlur} intensity={0}>
              <Text style={styles.cardTitle}>{planet.name}</Text>
              <Text style={styles.cardText}>{planet.description}</Text>
            </BlurView>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default PlanetSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleSlider: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: 20,
    marginBottom: 20,
    color: "#FFFFFF",
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    borderColor: "#FFFFFF",
  },
  cardsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 34,
    textAlign: "center",
    flexDirection: "row",
  },
  card: {
    marginHorizontal: 20,
  },
  cardImg: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    alignSelf: "flex-start",
    position: "absolute",
    zIndex: 1,
    left: -40,
    top: -40,
  },
  cardBlur: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 10,
    padding: 10,
    textAlign: "center",
  },
  cardTitle: {
    alignSelf: "flex-end",
    fontSize: 22,
    fontWeight: "bold",
  },
  cardText: {
    width: 140,
    height: 160,
    marginTop: 20,
    fontWeight: "bold",
  },
});
