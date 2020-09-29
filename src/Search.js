import React from "react";
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  StatusBar,
  StyleSheet,
  Dimensions,
} from "react-native";
const ht = Dimensions.get("window").height;
const wd = Dimensions.get("window").width;
function Search() {
  return (
    <View>
      <StatusBar />
      <View style={{ backgroundColor: "red" }}>
        <AntDesign name="arrowleft" size={24} color="black" />
        <TextInput
          placeholder="Search YouTube"
          style={{
            width: wd * 0.8,
            height: ht * 0.04,
            bordercolor: "grey",
            borderWidth: wd * 0.003,
            backgroundColor: "lightgrey",
          }}
        />
        <View>
          <FontAwesome name="microphone" size={24} color="black" />
        </View>
      </View>
    </View>
  );
}

export default Search;
