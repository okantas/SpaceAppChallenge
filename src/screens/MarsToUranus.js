import React from "react";
import BookingSeats from "../components/BookingSeats";
import { StyleSheet, ImageBackground, Text } from "react-native";

const MarsToUranus = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../images/space.jpeg")}
    >
      <Text style={styles.title}>LET'S GO TO URANUS</Text>
      <BookingSeats screenIdentifier="Screen22" />
    </ImageBackground>
  );
};

export default MarsToUranus;

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
