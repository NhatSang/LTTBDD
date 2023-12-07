import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

const Screen1 = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Counter: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <TextInput style={{ borderWidth: 1 }} onChangeText={setAmount} value={amount}/>
      <Button
        title="IncrementByAmount"
        onPress={() => dispatch(incrementByAmount(parseInt(amount)))}
      />
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({});
