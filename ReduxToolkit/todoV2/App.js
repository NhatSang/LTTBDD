import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { Provider } from "react-redux";
import store from "./store";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
const stack = createNativeStackNavigator()
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name="Screen1" component={Screen1} />
          <stack.Screen name="Screen2" component={Screen2} />
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

