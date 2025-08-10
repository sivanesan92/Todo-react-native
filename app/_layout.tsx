import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "", // Empty title (removes it)
          headerShown: false, // Completely hide the header
        }}
      />
    </Stack>
  );
}
