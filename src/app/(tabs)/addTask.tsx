import { useTaskContext } from "@/context/TaskContext";
import { useState } from "react";
import { Pressable, StyleSheet, Task, Text, TextInput, View } from "react-native";



export default function AddTask() {
  const [task, setTask] = useState("");

  const {addTask, } = useTaskContext()

  const handleAddTask = () => {
    if (task.trim() === "") {
      return;
    }
    addTask(task);
    setTask("");
  
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Add Task</Text>
      <Text style={styles.subTitle}>Add a new task to your list</Text>

      {/* Add task*/}
      <View
        style={{
          flexDirection: "column",
          gap: 10,
          marginTop: 20,
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text style={styles.secondaryTitle}>Add your daily task:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter a new task..."
          value={task}
          onChangeText={(text) => setTask(text)}
        ></TextInput>

        <Pressable
          style={({ pressed }) =>
            pressed ? styles.pressButton : styles.button
          }
          onPress={() => {
            handleAddTask();
          }}
        >
          <Text style={styles.buttonText}>Add Task</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 80,
  },

  Title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },

  subTitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },

  secondaryTitle: {
    fontSize: 20,
    fontWeight: "semibold",
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6d6d6d",
    color: "#ffffff",
    padding: 10,
    borderRadius: 5,
  },

  pressButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4CAF50",
    color: "#ffffff",
    padding: 10,
    borderRadius: 5,
  },

  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },

  input: {
    borderWidth: 1,
    backgroundColor: "#f0f0f0",
    width: 200,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
});
