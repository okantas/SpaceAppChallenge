import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";

const Tourism = () => {
  const navigation = useNavigation();
  const planetsData = [
    {
      name: "EARTH TOURISM",
      imageSource: require("../images/earth.png"),
      goTo: () => navigation.navigate("EarthTourism"),
    },
    {
      name: "MOON TOURISM",
      imageSource: require("../images/moon.png"),
      goTo: () => navigation.navigate("MoonTourism"),
    },
    {
      name: "SATURN TOURISM",
      imageSource: require("../images/saturn.png"),
      goTo: () => navigation.navigate("SaturnTourism"),
    },
    {
      name: "MARS TOURISM",
      imageSource: require("../images/mars.png"),
      goTo: () => navigation.navigate("MarsTourism"),
    },
    {
      name: "URANUS TOURISM",
      imageSource: require("../images/uranus.png"),
      goTo: () => navigation.navigate("UranusTourism"),
    },
    {
      name: "VENUS TOURISM",
      imageSource: require("../images/venus.png"),
      goTo: () => navigation.navigate("VenusTourism"),
    },

    {
      name: "NEPTUNE TOURISM",
      imageSource: require("../images/neptune.png"),
      goTo: () => navigation.navigate("NeptuneTourism"),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titleTourism}>Get a ticket from...</Text>
      {planetsData.map((planet, index) => (
        <TouchableOpacity
          onPress={planet.goTo}
          key={index}
          style={styles.planets}
        >
          <View style={styles.planetImgContainer}>
            <Image style={styles.planetImg} source={planet.imageSource} />
          </View>
          <BlurView style={styles.titleBlur} intensity={0}>
            <Text style={styles.title}>{planet.name}</Text>
          </BlurView>
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default Tourism;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleTourism: {
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
  planets: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: 400,
    marginBottom: 30,
    marginTop: 30,
  },
  planetImgContainer: {
    position: "absolute",
    left: 0,
    zIndex: 1,
  },
  planetImg: {
    width: 180,
    height: 180,
    resizeMode: "contain",
  },
  titleBlur: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 10,
    padding: 20,
    textAlign: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 80,
    width: 120,
  },
});
