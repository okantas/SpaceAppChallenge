import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LogIn = () => {
  const navigation = useNavigation();

  const goToHomeScreen = () => {
    navigation.navigate("Home");
  };
  return (
    <ImageBackground
      style={styles.container}
      source={require("../images/space.jpeg")}
    >
      <View style={styles.content}>
        <Text style={styles.titleOfApp}>KEEP EXPLORING</Text>
        <View style={styles.girl}>
          <Image source={require("../images/girl.png")} />
          <TouchableOpacity
            style={styles.bookingWrapper}
            onPress={goToHomeScreen}
          >
            <Text style={styles.booking}>LET'S TRAVEL</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
export default LogIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleOfApp: {
    color: "#FFFFFF",
    fontSize: 50,
    textAlign: "left",
    fontWeight: "bold",
  },
  bookingWrapper: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 52,
    width: 300,
    alignSelf: "center",
  },
  booking: {
    color: "#FFFFFF",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});
