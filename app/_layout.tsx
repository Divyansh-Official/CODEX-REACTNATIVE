import { Stack } from "expo-router";
import "./global.css";
import { useFonts } from "expo-font";

export default function RootLayout() {
  const [loaded] = useFonts({
    "font01": require("../assets/fonts/font01.ttf"),
    "font02": require("../assets/fonts/font02.ttf"),
    "font03": require("../assets/fonts/font03.ttf"),
    "font04": require("../assets/fonts/font04.ttf"),
    
  });

  if (!loaded) return null;
  return <Stack>

    <Stack.Screen 
    name="(tabs)"
    options={{
      headerShown: false
    }} />
    <Stack.Screen
    name="welcome"
    options={{
      headerShown: false
    }} />
  </Stack>;
}
