import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "./todoSlide";
const Screen2 = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [job, setJob] = useState(route.params?.job);
  return (
    <View>
      <TextInput value={job} onChangeText={setJob} style={{ borderWidth: 1 }} />
      <Pressable
        onPress={() => {
          dispatch(
            updateTask({ id: 1, taskId: route.params?.taskId, job: job })
          );
          navigation.navigate("Screen1");
        }}
        style={{ width: 50, height: 45, borderWidth: 1 }}
      >
        <Text>Done</Text>
      </Pressable>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({});
