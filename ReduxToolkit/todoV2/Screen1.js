import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTodo, addTask, removeTask } from "./todoSlide";
const Screen1 = ({ navigation }) => {
  const data = useSelector(selectTodo);
  const dispatch = useDispatch();
  const [job, setJob] = useState("");
  return (
    <View>
      <View>
        <TextInput
          style={{ borderWidth: 1 }}
          onChangeText={setJob}
          value={job}
        />
        <Pressable
          onPress={() => {
            dispatch(addTask({ id: 1, job: job }));
            setJob("");
          }}
          style={{ width: 100, height: 45, backgroundColor: "blue" }}
        >
          <Text>ADD</Text>
        </Pressable>
        <FlatList
          data={data[0]?.todo}
          renderItem={({ item }) => (
            <View>
              <Text>{item.job}</Text>
              <Pressable
                onPress={() => {
                  dispatch(removeTask({ id: 1, taskId: item.id }));
                }}
                style={{ width: 50, height: 45, borderWidth: 1 }}
              >
                <Text>remove</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate("Screen2", {
                    taskId: item.id,
                    job: item.job,
                  });
                }}
                style={{ width: 50, height: 45, borderWidth: 1 }}
              >
                <Text>Update</Text>
              </Pressable>
            </View>
          )}
        />
      </View>
      <Pressable
        onPress={() => {
          fetch("https://6546fee0902874dff3abe603.mockapi.io/user/1", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              todo: data[0]?.todo,
            }),
          }).then((response) => {
            if (response.ok) alert("Done!");
          });
        }}
        style={{
          width: 50,
          height: 45,
          borderWidth: 1,
          backgroundColor: "lightgrey",
        }}
      >
        <Text>Dong bo</Text>
      </Pressable>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({});
