
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>LOGIN</Text>
      <View style={styles.rowInput}>
        <TextInput style={styles.input} placeholder="Email" />
      </View>
      <View style={styles.rowInput}>
        <TextInput style={styles.input} placeholder="Password" />
        <Image
          source={require("./assets/eye 1.png")}
          style={{ width: 36, height: 36 }}
        />
      </View>
      <TouchableOpacity style={styles.btnLogin}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
      <Text>When you agree to terms and conditions</Text>
      <Text>For got your password?</Text>
      <Text>Or login with</Text>
      <View style={styles.rowBTN}>
        <TouchableOpacity
          style={[styles.btnOthLogin, {backgroundColor: "rgb(39,90,141)"}]}
        >
          <Image
            source={require("./assets/icofacebook-1924510 1.png")}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnOthLogin, {backgroundColor: "rgba(6, 128, 241, 1)"}]}>
          <Text>Z</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnOthLogin}>
          <Image
            source={require("./assets/icogoogle 1.png")}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
