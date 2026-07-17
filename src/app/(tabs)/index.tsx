import { useTaskContext } from "@/context/TaskContext";
import { router } from "expo-router";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";


export default function Index() {

  const { taskList, deleteTask, toggleTask} = useTaskContext();


  const handleDeleteTask = (id: number) => {
    deleteTask(id);
  };

  const handleToggleCompleted = (id: number) => {
    toggleTask(id);
  };

  

  return (
    // Main container
    <View style={styles.container}>
      {/* Title and subtitle */}
      <Text style={styles.title}>TaskFlow</Text>
      <Text style={styles.subtitle}>
        Manage your tasks, boost your productivity
      </Text>

      {/* Task list */}
      <FlatList
        data={taskList}
        keyExtractor={(i) => i.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              marginTop: 10,
            }}
          >
            <Pressable
              onPress={() => handleToggleCompleted(item.id)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
              }}
            >
              <Text>{item.completed ? "✓" : "✅"}</Text>
              <Text style={item.completed ? styles.taskTextDone : {}}>
                {" "}
                {item.title}
              </Text>
            </Pressable>

            {/* View Details */}
            <Pressable
              style={{ flexDirection: "row", gap: 10 }}
              onPress={() =>
                router.push({
                  pathname: "/taskDetails",
                  params: { id: item.id, title: item.title },
                })
              }
            >
              <Text>ℹ️</Text>
            </Pressable>

            <Pressable onPress={() => handleDeleteTask(item.id)}>
              <Text style={styles.deleteText}>X</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8F0FE",
    flex: 1,
    alignItems: "center",
    paddingTop: 80,
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

  taskTextDone: {
    fontSize: 16,
    textDecorationLine: "line-through",
    color: "#078e00",
  },

  deleteText: {
    fontSize: 18,
    marginLeft: 10,
  },
});
