import React from "react";
import BookingSeats from "../components/BookingSeats";
import { StyleSheet, ImageBackground, Text } from "react-native";

const EarthToVenus = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../images/space.jpeg")}
    >
      <Text style={styles.title}>LET'S GO TO VENUS</Text>
      <BookingSeats screenIdentifier="Screen5" />
    </ImageBackground>
  );
};

export default EarthToVenus;

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
    marginHorizontal: 10,
  },
});
