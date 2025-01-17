import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Screen_01 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.style1}>
        <Text
          style={{
            color: "green",
            fontSize: 39,
            fontWeight: "bold",
          }}
        >
          Order your favorite!
        </Text>
      </View>

      <View style={styles.style2}>
        <Image source={require("../assets/Data/Image_96.png")} style={{ width: 150, height: 150, marginLeft: 215 }} />
        <Image
          source={require("../assets/Data/Image_95.png")}
          style={{ width: 150, height: 150, marginLeft: 20, marginTop: -25 }}
        />
        <Image
          source={require("../assets/Data/Image_97.png")}
          style={{ width: 150, height: 150, marginLeft: 200, marginTop: 30 }}
        />
      </View>

      <View style={styles.style3}>
        <TouchableOpacity
          style={{
            backgroundColor: "green",
            borderRadius: 40,
            width: 240,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            navigation.navigate("Screen_02");
          }}
        >
          <Text>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Screen_01;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  style1: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  style2: {
    flex: 3,
    backgroundColor: "#fff",
  },
  style3: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
