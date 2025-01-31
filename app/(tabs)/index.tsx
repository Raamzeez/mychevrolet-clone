import { useState } from "react";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

const controls = ["My Vehicle", "Controls", "Home Center"];

export default function HomeScreen() {
  const [selectedControl, setSelectedControl] = useState(0);

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
      <Text style={styles.title}>2024 TAHOE HIGH COUNTRY</Text>
      <Text style={styles.title}>57% | 175 mi</Text>
      <Image
        source={require("@/assets/images/car.png")}
        style={styles.carImage}
      />
      <View style={styles.controlsContainer}>
        {[0, 1, 2].map((controlIndex) => {
          return (
            <TouchableOpacity
              onPress={() => setSelectedControl(controlIndex)}
              key={controlIndex}
              style={[
                styles.controlButton,
                selectedControl == controlIndex && { borderBottomWidth: 1 },
              ]}
            >
              <Text style={styles.controlButtonText}>
                {controls[controlIndex]}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.controlsContainer}>
        <TouchableOpacity
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            backgroundColor: "#333",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Entypo name="lock" size={18} color="lightgrey" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  controlsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  controlButton: {
    paddingVertical: 15,
    borderBottomWidth: 0,
    borderBottomColor: "white",
  },
  controlButtonText: {
    color: "white",
    fontWeight: "bold",
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
  },
  logo: {
    width: 70,
    height: 40,
  },
  carImage: {
    width: 200,
    height: 100,
    marginHorizontal: "auto",
  },
});
