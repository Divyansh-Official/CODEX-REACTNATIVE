import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-light-primary"
    >
      <Text className="text-4xl text-blue-400 font-bold">WELCOME DEV</Text>
      <Link href = "/movie/Avengers"> Movie  </Link>
    </View>
  );
}
