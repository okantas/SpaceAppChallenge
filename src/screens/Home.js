import React from "react";
import { StyleSheet, ImageBackground, Image, ScrollView } from "react-native";
import PlanetSlider from "../components/PlanetSlider";
import Tourism from "../components/Tourism";

const Home = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../images/space.jpeg")}
    >
      <ScrollView style={styles.planetsWrapper}>
        <Image style={styles.logo} source={require("../images/logo.png")} />
        <PlanetSlider />
        <Tourism />
      </ScrollView>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginVertical: 20,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
});
