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

const ht = Dimensions.get("window").height;
const wd = Dimensions.get("window").width;
function Search1() {
  const [searchs, setSearch] = useState("");
    const [isRecording, setisRecording] = useState(false);
    const [isFetching, setisFetching] = useState(false)
    const [query, setQuery] = useState(false);
  const startRecording = async () => {
    const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    if (status !== "granted") return;

    setisRecording( true );
    // some of these are not applicable, but are required
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: true,
    });
    const recording = new Audio.Recording();
    try {
      await recording.prepareToRecordAsync(recordingOptions);
      await recording.startAsync();
    } catch (error) {
      console.log(error);
      this.stopRecording();
    }
    this.recording = recording;
  };

  const recordingOptions = {
    // android not currently in use, but parameters are required
    android: {
      extension: ".m4a",
      outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
      audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
      sampleRate: 44100,
      numberOfChannels: 2,
      bitRate: 128000,
    },
    ios: {
      extension: ".wav",
      audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH,
      sampleRate: 44100,
      numberOfChannels: 1,
      bitRate: 128000,
      linearPCMBitDepth: 16,
      linearPCMIsBigEndian: false,
      linearPCMIsFloat: false,
    },
  };
  getTranscription = async () => {
    setisFetching( true );
    try {
      const info = await FileSystem.getInfoAsync(this.recording.getURI());
      console.log(`FILE INFO: ${JSON.stringify(info)}`);
      const uri = info.uri;
      const formData = new FormData();
      formData.append("file", {
        uri,
        type: "audio/x-wav",
        // could be anything
        name: "speech2text",
      });
      const response = await fetch(config.CLOUD_FUNCTION_URL, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setQuery( data.transcript );
    } catch (error) {
      console.log("There was an error", error);
      this.stopRecording();
      this.resetRecording();
    }
    setisFetching( false );
  };

  const ENCODING = "LINEAR16";
  const SAMPLE_RATE_HERTZ = 41000;
  const LANGUAGE = "en-US";
  return (
    <View>
      <StatusBar />
      {/* Search bar Starting */}
      <View style={styles.searchbar}>
        <View>
          <TouchableOpacity>
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
          <TouchableOpacity onPress={startRecording}>
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

export default Search1;

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
