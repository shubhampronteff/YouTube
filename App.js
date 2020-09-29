import React from "react";
import { StyleSheet, View } from "react-native";
import Home from "./src/Home";
import Search from "./src/Search";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      {/* <Search /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});