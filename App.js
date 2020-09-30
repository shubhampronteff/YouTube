import React from "react";
import { StyleSheet, View } from "react-native";
import Home from "./src/Home";
import Search from "./src/Search";
import Content from "./src/Content";
import Hello from "./src/Hello";
import Options from "./src/Options";
import Search1 from "./src/Search1";
import Account from "./src/Account";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      {/* <Search /> */}
      {/* <Content /> */}
      {/* <Search1 /> */}
      <Account />
    </View>
    // <NavigationContainer>
    //   <Stack.Navigator headerMode={null}>
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="Search" component={Search} />
    //     <Stack.Screen name="Content" component={Content} />
    //     <Stack.Screen name="Options" component={Options} />
    //     <Stack.Screen name="Hello" component={Hello} />
    //     <Stack.Screen name="Account" component={Account} />
    //   </Stack.Navigator>
    // </NavigationContainer>
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
