import { useState } from "react";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  useFonts,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import {
  StyleSheet,
  ScrollView,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { Text } from "@/components/StyledText";

const controls = ["My Vehicle", "Controls", "Home Center"];

export default function HomeScreen() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  const [selectedControl, setSelectedControl] = useState(0);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image
          source={require("@/assets/images/chevroletlogo.png")}
          style={styles.logo}
        />
        <View style={styles.profileContainer}>
          <Text style={styles.profileText}>CR</Text>
        </View>
      </View>
      <Text bold>2024 TAHOE HIGH COUNTRY</Text>
      <Text>57% | 175 mi</Text>
      <Image
        source={require("@/assets/images/car.png")}
        style={styles.carImage}
      />
      <View style={styles.menuContainer}>
        {[0, 1, 2].map((controlIndex) => {
          return (
            <TouchableOpacity
              onPress={() => setSelectedControl(controlIndex)}
              key={controlIndex}
              style={[
                styles.menuButton,
                selectedControl == controlIndex && { borderBottomWidth: 1 },
              ]}
            >
              <Text style={styles.menuButtonText}>
                {controls[controlIndex]}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.controlsContainer}>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles.controlButton}>
            <Entypo name="lock" size={21} color="lightgrey" />
          </TouchableOpacity>
          <Text style={styles.controlButtonText}>Lock</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles.controlButton}>
            <Entypo name="lock" size={21} color="lightgrey" />
          </TouchableOpacity>
          <Text style={styles.controlButtonText}>Unlock</Text>
        </View>
      </View>
      <View style={styles.serviceCardContainer}>
        <Text style={styles.title}>Everything Looks Good</Text>
        <Text style={[styles.title, { fontSize: 13, color: "grey" }]}>
          Your vehicle is secured and has no health issues
        </Text>
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBar} />
        </View>
        <Text bold>57% Oil Life</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272727",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  menuButton: {
    paddingVertical: 15,
    borderBottomWidth: 0,
    borderBottomColor: "white",
  },
  menuButtonText: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "Poppins_600SemiBold",
  },
  serviceCardContainer: {
    width: "100%",
    backgroundColor: "#333",
    borderRadius: 10,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  controlsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  controlButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#444444",
  },
  controlButtonText: {
    color: "lightgrey",
    fontFamily: "Poppins_400Regular",
    marginTop: 5,
  },
  progressBarContainer: {
    height: 5,
    width: "100%",
    backgroundColor: "grey",
    borderRadius: 10,
    marginVertical: 10,
    marginTop: 20,
  },
  progressBar: {
    height: "100%",
    width: "57%",
    backgroundColor: "skyblue",
    borderRadius: 10,
  },
  profileContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
  },
  profileText: {
    fontWeight: "bold",
    color: "white",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Poppins_400Regular",
    marginVertical: 3,
  },
  logo: {
    width: 70,
    height: 40,
  },
  carImage: {
    width: 200,
    height: 100,
    marginHorizontal: "auto",
    marginVertical: 3,
  },
});
