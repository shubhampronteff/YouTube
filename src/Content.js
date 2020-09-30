import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Video } from "expo-av";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const ht = Dimensions.get("window").height;
const wd = Dimensions.get("window").width;

function Content() {
  const [vol, setVol] = useState(true);
  return (
    <View>
      <StatusBar />
      {/* Video section starts */}
      <ScrollView>
        <View>
          <View>
            <Video
              source={{
                uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
              }}
              rate={1.0}
              volume={1.0}
              isMuted={true}
              resizeMode="cover"
              shouldPlay={false}
              isLooping
              style={{ width: wd * 1, height: ht * 0.3 }}
              useNativeControls
            />
          </View>
          <View
            style={{ position: "absolute", top: ht * 0.02, right: wd * 0.04 }}
          >
            <TouchableOpacity onPress={() => setVol(true)}>
              <FontAwesome5 name="volume-mute" size={24} color="red" />
            </TouchableOpacity>
          </View>
        </View>
        {/* Video section Ends */}
        {/* HashTags Starts */}
        <View style={{ paddingLeft: wd * 0.03, paddingTop: ht * 0.015 }}>
          <Text style={{ color: "blue" }}>#rain #Forest #Animals</Text>
        </View>
        {/* HashTags Ends */}
        {/* Video Heading Starts */}
        <View style={{ flexDirection: "row", paddingTop: ht * 0.005 }}>
          <View style={{ flex: 8 }}>
            <Text style={{ fontWeight: "400", paddingLeft: wd * 0.03 }}>
              Rain Sounds on the Roof(No Thunder) For the Nature Lovers, Animal
              Lovers
            </Text>
          </View>
          <View style={{ flex: 1.3 }}>
            <AntDesign name="caretdown" size={20} color="grey" />
          </View>
        </View>
        {/* Video Heading Ends */}
        {/* Video Time Starts */}
        <View style={{ paddingLeft: wd * 0.03, paddingTop: ht * 0.01 }}>
          <Text style={{ color: "grey" }}>1.3M views. 2years ago</Text>
        </View>
        {/* Video Time Ends */}
        {/* Like & Dislike Section Starts */}
        <View style={styles.like}>
          <View style={styles.likeview}>
            <Ionicons name="md-thumbs-up" size={24} color="grey" />
            <Text style={styles.liketext}>13k</Text>
          </View>
          <View style={styles.likeview}>
            <Ionicons name="md-thumbs-down" size={24} color="grey" />
            <Text style={styles.liketext}>953</Text>
          </View>
          <View style={styles.likeview}>
            <Ionicons name="ios-share-alt" size={24} color="grey" />
            <Text style={styles.liketext}>Share</Text>
          </View>
          <View style={styles.likeview}>
            <MaterialCommunityIcons name="download" size={24} color="grey" />
            <Text style={styles.liketext}>Download</Text>
          </View>
          <View style={styles.likeview}>
            <Feather name="save" size={24} color="grey" />
            <Text style={styles.liketext}>Save</Text>
          </View>
        </View>
        {/* Like & Dislike Section Ends */}
        {/* Channel Info Section Starts */}
        <View
          style={{
            paddingLeft: wd * 0.01,
            paddingRight: wd * 0.01,
            flexDirection: "row",
            borderTopColor: "grey",
            borderTopWidth: wd * 0.002,
            borderBottomColor: "grey",
            borderBottomWidth: wd * 0.002,
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: ht * 0.01,
            paddingBottom: ht * 0.01,
          }}
        >
          <View style={{ flex: 2 }}>
            <Image
              source={require("../assets/me.jpeg")}
              style={{
                width: wd * 0.11,
                height: ht * 0.05,
                borderRadius: ht * 0.1,
                marginLeft: wd * 0.03,
              }}
            />
          </View>
          <View style={{ flex: 6 }}>
            <Text style={{ fontWeight: "bold" }}>
              Nature's Lover channel fun
            </Text>
            <Text style={{ color: "grey" }}>2M subscribers</Text>
          </View>
          <View style={{ flex: 3 }}>
            <Text
              style={{ color: "red", fontWeight: "bold", fontSize: ht * 0.02 }}
            >
              SUBSCRIBE
            </Text>
          </View>
        </View>
        {/* Channel Info Section Ends */}
        {/* Comments Sections starts */}
        <View
          style={{
            paddingLeft: wd * 0.06,
            paddingTop: ht * 0.014,
            borderBottomColor: "grey",
            borderBottomWidth: wd * 0.002,
            paddingRight: wd * 0.02,
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                flex: 12,
              }}
            >
              <Text style={{ fontWeight: "600", marginRight: wd * 0.02 }}>
                Comments
              </Text>
              <Text style={{ color: "grey", fontWeight: "bold" }}>511</Text>
            </View>
            <View style={{ flex: 1 }}>
              <AntDesign name="up" size={12} color="grey" />
              <AntDesign name="down" size={12} color="grey" />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: ht * 0.005,
              marginBottom: ht * 0.008,
            }}
          >
            <View style={{ flex: 2 }}>
              <Image
                source={require("../assets/person.jpg")}
                style={{
                  width: wd * 0.11,
                  height: ht * 0.05,
                  borderRadius: ht * 0.1,
                }}
              />
            </View>
            <View style={{ flex: 10 }}>
              <Text>
                I am Very Greatfull the creator of this video. you provided us
                the pictures of real beauty of planet earth.
              </Text>
            </View>
          </View>
        </View>
        {/* Comment Section Ends */}
        {/* Ads Section Starts */}
        <View
          style={{
            paddingLeft: wd * 0.04,
            paddingTop: ht * 0.013,
            marginBottom: ht * 0.01,
          }}
        >
          <View style={{ flexDirection: "row", flex: 1 }}>
            <View style={{ flex: 7 }}>
              <Text style={{ fontWeight: "bold" }}>
                Buy Stardust Vibes- Relaxing Sounds Stuff
              </Text>
              <Text style={{ color: "grey" }}>
                See price and fees on Treespring
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "flex-end",
                paddingRight: wd * 0.02,
              }}
            >
              <Entypo name="dots-three-vertical" size={20} color="grey" />
            </View>
          </View>
          <View style={{ paddingTop: ht * 0.02 }}>
            <ScrollView horizontal>
              <View
                style={{
                  borderColor: "grey",
                  borderWidth: wd * 0.002,
                  justifyContent: "center",
                  alignItems: "center",
                  width: wd * 0.3,
                  height: ht * 0.15,
                  borderRadius: ht * 0.005,
                  elevation: 1,
                  marginRight: wd * 0.05,
                }}
              >
                <View>
                  <Image
                    source={require("../assets/mug.webp")}
                    style={{
                      width: wd * 0.2,
                      height: ht * 0.1,
                    }}
                  />
                </View>
                <View>
                  <Text style={{ color: "grey" }}> Buy Mug</Text>
                </View>
              </View>
              <View
                style={{
                  borderColor: "grey",
                  borderWidth: wd * 0.002,
                  justifyContent: "center",
                  alignItems: "center",
                  width: wd * 0.3,
                  height: ht * 0.15,
                  borderRadius: ht * 0.005,
                  elevation: 1,
                  marginRight: wd * 0.05,
                }}
              >
                <View>
                  <Image
                    source={require("../assets/mug2.jpg")}
                    style={{
                      width: wd * 0.25,
                      height: ht * 0.1,
                    }}
                  />
                </View>
                <View>
                  <Text style={{ color: "grey" }}> Buy Mug</Text>
                </View>
              </View>
              <View
                style={{
                  borderColor: "grey",
                  borderWidth: wd * 0.002,
                  justifyContent: "center",
                  alignItems: "center",
                  width: wd * 0.3,
                  height: ht * 0.15,
                  borderRadius: ht * 0.005,
                  elevation: 1,
                  marginRight: wd * 0.05,
                }}
              >
                <View>
                  <Image
                    source={require("../assets/tshirt.jpg")}
                    style={{
                      width: wd * 0.25,
                      height: ht * 0.1,
                    }}
                  />
                </View>
                <View>
                  <Text style={{ color: "grey" }}> Buy Tshirt</Text>
                </View>
              </View>
              <View
                style={{
                  borderColor: "grey",
                  borderWidth: wd * 0.002,
                  justifyContent: "center",
                  alignItems: "center",
                  width: wd * 0.3,
                  height: ht * 0.15,
                  borderRadius: ht * 0.005,
                  elevation: 1,
                  marginRight: wd * 0.05,
                }}
              >
                <View>
                  <Image
                    source={require("../assets/tshirt2.webp")}
                    style={{
                      width: wd * 0.25,
                      height: ht * 0.1,
                    }}
                  />
                </View>
                <View>
                  <Text style={{ color: "grey" }}> Buy tshirt</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
        {/* Ads Section Ends */}
      </ScrollView>
    </View>
  );
}

export default Content;

const styles = StyleSheet.create({
  like: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: ht * 0.017,
    paddingBottom: ht * 0.01,
  },
  likeview: {
    alignItems: "center",
  },
  liketext: {
    color: "grey",
  },
});
