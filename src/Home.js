import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Video } from "expo-av";
import Options from "./Options";

const wd = Dimensions.get("window").width;
const ht = Dimensions.get("window").height;

function Home({ navigation }) {
  const [report1, setReport1] = useState(false);
  const [report2, setReport2] = useState(false);
  const [report3, setReport3] = useState(false);
  return (
    <View>
      <StatusBar />
      {/* Status bar Starts */}

      <View
        style={{
          elevation: 20,
          shadowColor: "black",
          shadowOpacity: 1,
          backgroundColor: "#0000",
          zIndex: 2,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginLeft: wd * 0.03,
            marginTop: ht * 0.01,
            marginBottom: ht * 0.005,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flex: 1,
            }}
          >
            <Entypo
              name="youtube"
              size={32}
              color="red"
              //   style={{ height: ht * 0.04 }}
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: ht * 0.035,
                letterSpacing: -1.9,
                marginLeft: wd * 0.01,
              }}
            >
              YouTube
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flex: 2,
              justifyContent: "flex-end",
              paddingRight: wd * 0.03,
            }}
          >
            <View style={{ marginRight: wd * 0.06 }}>
              <Ionicons
                name="md-notifications-outline"
                size={34}
                color="grey"
              />
              <View
                style={{
                  backgroundColor: "red",
                  width: wd * 0.08,
                  height: ht * 0.03,
                  borderRadius: ht * 0.02,
                  position: "absolute",
                  top: ht * 0.008,
                  left: wd * 0.036,
                  borderWidth: wd * 0.005,
                  borderColor: "white",
                }}
              >
                <Text style={{ color: "white", textAlign: "center" }}>9+</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Search")}>
              <MaterialIcons name="search" size={30} color="grey" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Account")}>
              <Image
                source={require("../assets/me.jpeg")}
                style={{
                  width: wd * 0.11,
                  height: ht * 0.05,
                  borderRadius: ht * 0.1,
                  marginLeft: wd * 0.03,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "silver",
            height: ht * 0.0015,
            width: wd * 1,
          }}
        ></View>
        <ScrollView horizontal>
          <View
            style={{
              flexDirection: "row",
              marginTop: ht * 0.01,
              marginLeft: wd * 0.03,
              marginBottom: ht * 0.014,
              justifyContent: "space-around",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "lightgrey",
                borderRadius: ht * 0.002,
                width: wd * 0.22,
                justifyContent: "center",
                alignItems: "center",
                height: ht * 0.045,
              }}
            >
              <FontAwesome5 name="play" size={14} color="red" />
              <Text style={{ fontWeight: "bold", marginLeft: wd * 0.015 }}>
                Shorts
              </Text>
            </View>

            <View
              style={{
                backgroundColor: "silver",
                width: wd * 0.005,
                height: ht * 0.045,
                marginLeft: wd * 0.03,
                marginRight: wd * 0.01,
              }}
            ></View>
            <View
              style={{
                flexDirection: "row",
                height: ht * 0.045,
              }}
            >
              <View
                style={{
                  backgroundColor: "darkgrey",
                  borderRadius: ht * 0.018,
                  marginRight: wd * 0.03,
                  paddingLeft: wd * 0.03,
                  paddingRight: wd * 0.03,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    textAlignVertical: "center",
                    height: ht * 0.045,
                  }}
                >
                  All
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "darkgrey",
                  borderRadius: ht * 0.018,
                  marginRight: wd * 0.03,
                  paddingLeft: wd * 0.03,
                  paddingRight: wd * 0.03,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    textAlignVertical: "center",
                    height: ht * 0.045,
                  }}
                >
                  BollyWood Movies
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "darkgrey",
                  borderRadius: ht * 0.018,
                  marginRight: wd * 0.03,
                  paddingLeft: wd * 0.03,
                  paddingRight: wd * 0.03,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    textAlignVertical: "center",
                    height: ht * 0.045,
                  }}
                >
                  Cricket Scores
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "darkgrey",
                  borderRadius: ht * 0.018,
                  marginRight: wd * 0.03,
                  paddingLeft: wd * 0.03,
                  paddingRight: wd * 0.03,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    textAlignVertical: "center",
                    height: ht * 0.045,
                  }}
                >
                  Upcoming Movies
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      {/* Status bar ends */}
      {/* Content Starts */}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <TouchableWithoutFeedback
          onPress={() => {
            setReport1(false);
            setReport2(false);
            setReport3(false);
          }}
        >
          <View style={{ marginBottom: ht * 0.22 }}>
            {/* First Video Starts */}
            <View>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate("Content")}
              >
                <Video
                  source={{
                    uri:
                      "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                  }}
                  rate={1.0}
                  volume={1.0}
                  isMuted={true}
                  resizeMode="cover"
                  shouldPlay={false}
                  isLooping
                  style={{ width: wd * 1, height: ht * 0.3 }}
                />
              </TouchableWithoutFeedback>
              <View
                style={{
                  flexDirection: "row",
                  paddingLeft: wd * 0.02,
                  marginTop: ht * 0.02,
                  flex: 2,
                  //   backgroundColor: "red",
                }}
              >
                <View
                  style={{
                    paddingLeft: wd * 0.01,
                    paddingRight: wd * 0.01,
                  }}
                >
                  <Image
                    source={require("../assets/person.jpg")}
                    style={styles.channelIcon}
                  />
                </View>
                <View style={{ flexDirection: "column", flex: 8 }}>
                  <Text style={styles.videoinfo}>
                    Beauty of the nature. Animals Enjoy the Beauty of Mother
                    Earth
                  </Text>
                  <Text style={styles.channelinfo}>
                    Animals Channels - 1M Views - Streames 1 year ago
                  </Text>
                </View>

                <View style={{ flex: 0.8 }}>
                  <TouchableOpacity
                    onPress={() => {
                      setReport1(true);
                      setReport2(false);
                      setReport3(false);
                    }}
                  >
                    <Entypo
                      name="dots-three-vertical"
                      size={20}
                      color="silver"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {report1 ? <Options /> : null}
            </View>
            {/* First Video Ends */}
            {/* Second Video Starts */}
            <View>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate("Content")}
              >
                <Video
                  source={{
                    uri:
                      "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                  }}
                  rate={1.0}
                  volume={1.0}
                  isMuted={true}
                  resizeMode="cover"
                  shouldPlay={false}
                  isLooping
                  style={{ width: wd * 1, height: ht * 0.3 }}
                />
              </TouchableWithoutFeedback>
              <View
                style={{
                  flexDirection: "row",
                  paddingLeft: wd * 0.02,
                  marginTop: ht * 0.02,
                  flex: 2,
                  //   backgroundColor: "red",
                }}
              >
                <View
                  style={{
                    paddingLeft: wd * 0.01,
                    paddingRight: wd * 0.01,
                  }}
                >
                  <Image
                    source={require("../assets/pikacho.png")}
                    style={styles.channelIcon}
                  />
                </View>
                <View style={{ flexDirection: "column", flex: 8 }}>
                  <Text style={styles.videoinfo}>
                    Beauty of the nature. Animals Enjoy the Beauty of Mother
                    Earth
                  </Text>
                  <Text style={styles.channelinfo}>
                    Animals Channels - 1M Views - Streames 1 year ago
                  </Text>
                </View>

                <View style={{ flex: 0.8 }}>
                  <TouchableOpacity
                    onPress={() => {
                      setReport1(false);
                      setReport2(true);
                      setReport3(false);
                    }}
                  >
                    <Entypo
                      name="dots-three-vertical"
                      size={20}
                      color="silver"
                    />
                  </TouchableOpacity>
                </View>
              </View>
              {report2 ? <Options /> : null}
            </View>
            {/* Second Video Ends */}
            {/* Third Video Starts */}
            <View>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate("Content")}
              >
                <Video
                  source={{
                    uri:
                      "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                  }}
                  rate={1.0}
                  volume={1.0}
                  isMuted={true}
                  resizeMode="cover"
                  shouldPlay={false}
                  isLooping
                  style={{ width: wd * 1, height: ht * 0.3 }}
                />
              </TouchableWithoutFeedback>
              <View
                style={{
                  flexDirection: "row",
                  paddingLeft: wd * 0.02,
                  marginTop: ht * 0.02,
                  flex: 2,
                  //   backgroundColor: "red",
                }}
              >
                <View
                  style={{
                    paddingLeft: wd * 0.01,
                    paddingRight: wd * 0.01,
                  }}
                >
                  <Image
                    source={require("../assets/me.jpeg")}
                    style={styles.channelIcon}
                  />
                </View>
                <View style={{ flexDirection: "column", flex: 8 }}>
                  <Text style={styles.videoinfo}>
                    Beauty of the nature. Animals Enjoy the Beauty of Mother
                    Earth
                  </Text>
                  <Text style={styles.channelinfo}>
                    Animals Channels - 1M Views - Streames 1 year ago
                  </Text>
                </View>

                <View style={{ flex: 0.8 }}>
                  <TouchableOpacity
                    onPress={() => {
                      setReport1(false);
                      setReport2(false);
                      setReport3(true);
                    }}
                  >
                    <Entypo
                      name="dots-three-vertical"
                      size={20}
                      color="silver"
                    />
                  </TouchableOpacity>
                </View>
              </View>
              {report3 ? <Options /> : null}
            </View>
            {/* Third Video Ends */}
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
      {/* Content Ends */}
      <View
        style={{
          position: "absolute",
          width: wd * 1,
          height: ht * 0.065,
          backgroundColor: "white",
          bottom: ht * 0.1356,
          elevation: 10,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Entypo name="home" size={24} color="grey" />
          <Text style={{ fontSize: ht * 0.015 }}>Home</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <MaterialIcons name="explore" size={24} color="grey" />
          <Text style={{ fontSize: ht * 0.015 }}>Explore</Text>
        </View>
        <View style={{ alignItems: "center", marginRight: -wd * 0.08 }}>
          <MaterialIcons name="add-circle-outline" size={42} color="grey" />
        </View>
        <View style={{ alignItems: "center", marginLeft: wd * 0.02 }}>
          <View
            style={{
              width: wd * 0.03,
              height: ht * 0.016,
              backgroundColor: "red",
              borderRadius: ht * 0.04,
              borderWidth: wd * 0.004,
              borderColor: "white",
              position: "absolute",
              right: wd * 0.047,
              zIndex: 2,
            }}
          ></View>
          <MaterialIcons name="subscriptions" size={24} color="grey" />
          <Text style={{ fontSize: ht * 0.015 }}>Subscriptions</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <MaterialIcons name="video-library" size={24} color="grey" />
          <Text style={{ fontSize: ht * 0.015 }}>Library</Text>
        </View>
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  channelIcon: {
    width: wd * 0.15,
    height: ht * 0.07,
    borderRadius: ht * 0.04,
  },
  videoinfo: {
    fontWeight: "bold",
    marginRight: wd * 0.03,
  },
  channelinfo: {
    color: "grey",
    paddingRight: wd * 0.03,
  },
});
