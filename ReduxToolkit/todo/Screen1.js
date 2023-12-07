import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { selectTodo, addTaskAsync, removeTaskAsync } from "./reducers";
import { useDispatch, useSelector } from "react-redux";

const Screen1 = () => {
  const data = useSelector(selectTodo);
  const dispatch = useDispatch();
  const [job, setJob] = useState("");
  return (
    <View>
      <TextInput style={{ borderWidth: 1 }} onChangeText={setJob} value={job}/>
      <Pressable
        onPress={() => {
          dispatch(addTaskAsync(job));
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

              style={{ width: 50, height: 45, borderWidth: 1 }}
            >
              <Text>remove</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({});
