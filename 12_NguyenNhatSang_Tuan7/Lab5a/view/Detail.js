import { StyleSheet, Text, View } from "react-native";

export default function Detail() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 360,
    height: 640,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
