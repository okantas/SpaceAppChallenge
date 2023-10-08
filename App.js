import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import LogIn from "./src/screens/LogIn";
import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EarthInfo from "./src/screens/EarthInfo";
import MoonInfo from "./src/screens/MoonInfo";
import SaturnInfo from "./src/screens/SaturnInfo";
import MarsInfo from "./src/screens/MarsInfo";
import UranusInfo from "./src/screens/UranusInfo";
import VenusInfo from "./src/screens/VenusInfo";
import NeptuneInfo from "./src/screens/NeptuneInfo";
import EarthTourism from "./src/screens/EarthTourism";
import MoonTourism from "./src/screens/MoonTourism";
import SaturnTourism from "./src/screens/SaturnTourism";
import MarsTourism from "./src/screens/MarsTourism";
import UranusTourism from "./src/screens/UranusTourism";
import VenusTourism from "./src/screens/VenusTourism";
import NeptuneTourism from "./src/screens/NeptuneTourism";
import EarthToMoon from "./src/screens/EarthToMoon";
import EarthToSaturn from "./src/screens/EarthToSaturn";
import EarthToMars from "./src/screens/EarthToMars";
import EarthToUranus from "./src/screens/EarthToUranus";
import EarthToVenus from "./src/screens/EarthToVenus";
import EarthToNeptune from "./src/screens/EarthToNeptune";
import MoonToEarth from "./src/screens/MoonToEarth";
import MoonToSaturn from "./src/screens/MoonToSaturn";
import MoonToMars from "./src/screens/MoonToMars";
import MoonToUranus from "./src/screens/MoonToUranus";
import MoonToVenus from "./src/screens/MoonToVenus";
import MoonToNeptune from "./src/screens/MoonToNeptune";
import SaturnToEarth from "./src/screens/SaturnToEarth";
import SaturnToMoon from "./src/screens/SaturnToMoon";
import SaturnToMars from "./src/screens/SaturnToMars";
import SaturnToUranus from "./src/screens/SaturnToUranus";
import SaturnToVenus from "./src/screens/SaturnToVenus";
import SaturnToNeptune from "./src/screens/SaturnToNeptune";
import MarsToEarth from "./src/screens/MarsToEarth";
import MarsToMoon from "./src/screens/MarsToMoon";
import MarsToUranus from "./src/screens/MarsToUranus";
import MarsToVenus from "./src/screens/MarsToVenus";
import MarsToSaturn from "./src/screens/MarsToSaturn";
import MarsToNeptune from "./src/screens/MarsToNeptune";
import UranusToEarth from "./src/screens/UranusToEarth";
import UranusToMoon from "./src/screens/UranusToMoon";
import UranusToMars from "./src/screens/UranusToMars";
import UranusToNeptune from "./src/screens/UranusToNeptune";
import UranusToSaturn from "./src/screens/UranusToSaturn";
import UranusToVenus from "./src/screens/UranusToVenus";
import VenusToEarth from "./src/screens/VenusToEarth";
import VenusToMars from "./src/screens/VenusToMars";
import VenusToMoon from "./src/screens/VenusToMoon";
import VenusToNeptune from "./src/screens/VenusToNeptune";
import VenusToSaturn from "./src/screens/VenusToSaturn";
import VenusToUranus from "./src/screens/VenusToUranus";
import NeptuneToEarth from "./src/screens/NeptuneToEarth";
import NeptuneToMars from "./src/screens/NeptuneToMars";
import NeptuneToMoon from "./src/screens/NeptuneToMoon";
import NeptuneToSaturn from "./src/screens/NeptuneToSaturn";
import NeptuneToUranus from "./src/screens/NeptuneToUranus";
import NeptuneToVenus from "./src/screens/NeptuneToVenus";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Log In">
        <Stack.Screen
          name="Log In"
          component={LogIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EarthInfo"
          component={EarthInfo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MoonInfo"
          component={MoonInfo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SaturnInfo"
          component={SaturnInfo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MarsInfo"
          component={MarsInfo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UranusInfo"
          component={UranusInfo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VenusInfo"
          component={VenusInfo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NeptuneInfo"
          component={NeptuneInfo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EarthTourism"
          component={EarthTourism}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MoonTourism"
          component={MoonTourism}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SaturnTourism"
          component={SaturnTourism}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MarsTourism"
          component={MarsTourism}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UranusTourism"
          component={UranusTourism}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VenusTourism"
          component={VenusTourism}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NeptuneTourism"
          component={NeptuneTourism}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EarthToMoon"
          component={EarthToMoon}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EarthToSaturn"
          component={EarthToSaturn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EarthToMars"
          component={EarthToMars}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EarthToUranus"
          component={EarthToUranus}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EarthToVenus"
          component={EarthToVenus}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EarthToNeptune"
          component={EarthToNeptune}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MoonToEarth"
          component={MoonToEarth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MoonToSaturn"
          component={MoonToSaturn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MoonToMars"
          component={MoonToMars}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MoonToUranus"
          component={MoonToUranus}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MoonToVenus"
          component={MoonToVenus}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MoonToNeptune"
          component={MoonToNeptune}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SaturnToEarth"
          component={SaturnToEarth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SaturnToMoon"
          component={SaturnToMoon}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SaturnToMars"
          component={SaturnToMars}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SaturnToUranus"
          component={SaturnToUranus}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SaturnToVenus"
          component={SaturnToVenus}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SaturnToNeptune"
          component={SaturnToNeptune}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MarsToEarth"
          component={MarsToEarth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MarsToMoon"
          component={MarsToMoon}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MarsToSaturn"
          component={MarsToSaturn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MarsToUranus"
          component={MarsToUranus}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MarsToVenus"
          component={MarsToVenus}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MarsToNeptune"
          component={MarsToNeptune}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UranusToEarth"
          component={UranusToEarth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UranusToMoon"
          component={UranusToMoon}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UranusToMars"
          component={UranusToMars}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UranusToSaturn"
          component={UranusToSaturn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UranusToVenus"
          component={UranusToVenus}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UranusToNeptune"
          component={UranusToNeptune}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VenusToEarth"
          component={VenusToEarth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VenusToMoon"
          component={VenusToMoon}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VenusToSaturn"
          component={VenusToSaturn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VenusToUranus"
          component={VenusToUranus}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VenusToMars"
          component={VenusToMars}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VenusToNeptune"
          component={VenusToNeptune}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NeptuneToEarth"
          component={NeptuneToEarth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NeptuneToMoon"
          component={NeptuneToMoon}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NeptuneToSaturn"
          component={NeptuneToSaturn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NeptuneToUranus"
          component={NeptuneToUranus}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NeptuneToMars"
          component={NeptuneToMars}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NeptuneToVenus"
          component={NeptuneToVenus}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
