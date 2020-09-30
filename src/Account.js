import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  Text,
  Image,
} from "react-native";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
const ht = Dimensions.get("window").height;
const wd = Dimensions.get("window").width;

function Account() {
  return (
    <View>
      <StatusBar />
      {/* Header Starts */}
      <View
        style={{
          flexDirection: "row",
          height: ht * 0.07,
          backgroundColor: "white",
          elevation: 5,
          paddingLeft: wd * 0.05,
          alignItems: "center",
        }}
      >
        <View>
          <TouchableWithoutFeedback onPress={() => alert("go back simon")}>
            <View>
              <Entypo name="cross" size={32} color="grey" />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={{ marginLeft: wd * 0.05 }}>
          <Text style={{ fontSize: ht * 0.034 }}>Account</Text>
        </View>
      </View>
      {/* Header Ends */}
      {/* Profile Section Starts */}
      <View
        style={{
          flexDirection: "row",
          borderBottomColor: "grey",
          borderBottomWidth: wd * 0.002,
          paddingTop: ht * 0.02,
          paddingLeft: wd * 0.05,
          paddingBottom: ht * 0.025,
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
        <View style={{ flex: 11 }}>
          <View style={{ flexDirection: "row" }}>
            <Text>Shubham Sharma</Text>
            <TouchableOpacity
              style={{ marginLeft: wd * 0.03 }}
              onPress={() => alert("pending")}
            >
              <AntDesign name="down" size={20} color="grey" />
            </TouchableOpacity>
          </View>
          <View>
            <Text>shubham@Pronteff.com</Text>
          </View>
          <TouchableOpacity onPress={() => alert("pending")}>
            <View style={{ marginTop: ht * 0.02 }}>
              <Text style={{ color: "blue" }}>Manage Your Google Account</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* Profile Section Ends */}
      {/* options Section Starts */}
      <View
        style={{
          borderBottomColor: "grey",
          borderBottomWidth: wd * 0.001,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons name="person-pin" size={24} color="black" />
          <Text>Your Channel</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Ionicons name="md-settings" size={24} color="black" />
          <Text> YouTube Studio</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <MaterialCommunityIcons
            name="google-analytics"
            size={24}
            color="black"
          />
          <Text>Time Watched</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Entypo name="youtube" size={24} color="black" />
          <Text>Get YouTube Premimum</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Foundation name="dollar" size={24} color="black" />
          <Text>Paid memberships</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text>Switch account</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text>Turn on Incognito</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text>Your data in YouTube</Text>
        </View>
      </View>
      {/* options Section Ends */}
      {/* Footer Starts */}
      <View
        style={{
          borderBottomColor: "grey",
          borderBottomWidth: wd * 0.001,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text>Settings</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text>Help & feedback</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "grey" }}>
            Privacy Policy . Terms of Service
          </Text>
        </View>
      </View>
      {/* Footer Ends */}
    </View>
  );
}

export default Account;

const styles = StyleSheet.create({
  h: {},
});
