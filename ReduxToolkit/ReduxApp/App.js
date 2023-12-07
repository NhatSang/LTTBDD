import { Pressable, StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Screen1 from "./Screen1";

export default function App() {
  return (
      <Provider store={store}>
        <Screen1/>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
