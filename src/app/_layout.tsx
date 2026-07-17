import { TaskProvider } from "@/context/TaskContext";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <TaskProvider>
    <Stack >
      <Stack.Screen name="(tabs)" options={{ headerShown: false}} />
    </Stack>
    </TaskProvider>
  )
}

