import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  StatusBar,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import SpeechToText from "react-native-google-speech-to-text";

const ht = Dimensions.get("window").height;
const wd = Dimensions.get("window").width;
function Search({ navigation }) {
  const [searchs, setSearch] = useState("");

  const speechToTextHandler = async () => {
    let speechToTextData = null;
    try {
      speechToTextData = await SpeechToText.startSpeech(
        "Try saying something",
        "en_IN"
      );
      console.log("speechToTextData: ", speechToTextData);
      setSearch(speechToTextData);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  return (
    <View>
      <StatusBar />
      {/* Search bar Starting */}
      <View style={styles.searchbar}>
        <View>
          <TouchableOpacity onPress={() => navigation.push("Home")}>
            <AntDesign name="arrowleft" size={28} color="grey" />
          </TouchableOpacity>
        </View>
        <View>
          <TextInput
            placeholder="Search YouTube"
            placeholderTextColor="grey"
            selectionColor={"red"}
            onChangeText={(text) => setSearch(text)}
            value={searchs}
            autoFocus={true}
            style={{
              width: wd * 0.75,
              height: ht * 0.055,
              borderColor: "white",
              borderWidth: wd * 0.003,
              backgroundColor: "lightgrey",
              // elevation: 8,
              borderRadius: ht * 0.007,
              paddingLeft: wd * 0.03,
              fontSize: ht * 0.024,
              fontWeight: "400",
            }}
          />
        </View>
        <View>
          <TouchableOpacity onPress={speechToTextHandler}>
            <View
              style={{
                backgroundColor: "silver",
                width: wd * 0.12,
                height: ht * 0.06,
                borderRadius: ht * 0.03,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome name="microphone" size={24} color="grey" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* Search bar Ends */}
    </View>
  );
}

export default Search;

const styles = StyleSheet.create({
  searchbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    elevation: 5,
    height: ht * 0.1,
    backgroundColor: "white",
    alignItems: "center",
  },
});
