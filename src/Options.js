import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
// import Hello from "./Hello";
import { useNavigation } from "@react-navigation/native";
const ht = Dimensions.get("window").height;
const wd = Dimensions.get("window").width;

function Options() {
  const navigation = useNavigation();
  return (
    <View style={styles.dots}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Hello")}>
          <Text style={styles.dottext}>Save to Watch later</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Hello")}>
          <Text style={styles.dottext}>Save to Playlist</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Hello")}>
          <Text style={styles.dottext}>Download</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Hello")}>
          <Text style={styles.dottext}>Share</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Hello")}>
          <Text style={styles.dottext}>Not interested</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Hello")}>
          <Text style={styles.dottext}>Don't recommend channel</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Hello")}>
          <Text style={styles.dottext}>Report</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Options;

const styles = StyleSheet.create({
  dots: {
    width: wd * 0.53,
    height: ht * 0.35,
    backgroundColor: "white",
    position: "absolute",
    top: ht * 0.32,
    left: wd * 0.45,
    borderRadius: ht * 0.004,
    paddingLeft: wd * 0.02,
    elevation: 5,
    paddingTop: ht * 0.02,
    zIndex: 4,
  },
  dottext: {
    fontSize: ht * 0.02,
  },
});
