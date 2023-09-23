
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={[
          "rgba(199, 244, 246, 1)",
          "rgba(209, 244, 246, 1)",
          "rgba(229, 244, 245, 1)",
          "rgba(0, 204, 249, 1)",
        ]}
        style={styles.background}
      />
      <Image
        source={require("./assets/lock-152879 1.png")}
        style={{ width: 105, height: 117 }}
      />
      <Text style={styles.title}>Forget Password</Text>
      <Text style={styles.title2}>
        Provide your account’s email for which you want to reset your password
      </Text>
      <View style={styles.rowInput}>
        <Image
          source={require("./assets/mail-2935365 1.png")}
          style={{ width: 48, height: 45 }}
        />
        <TextInput style={styles.input} placeholder="Email"/>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={{fontSize:18,fontWeight:"700"}}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 640,
  },
  rowInput: {
    display: "flex",
    flexDirection: "row",
  },
  input: {
    width: 257,
    height: 45,
    backgroundColor: "rgba(196, 196, 196, 1)",
  },
  btn: {
    display: "flex",
    width: 305,
    height: 45,
    backgroundColor: "rgba(227, 192, 0, 1)",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    width: 169,
    height: 58,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "700",
    lineHeight: 29.3,
  },
  title2: {
    width: 302,
    height: 36,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 17.58,
  },
});
