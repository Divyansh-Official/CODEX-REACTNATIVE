import { useRouter } from "expo-router";
import { ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../components/SearchBar";

export default function Index() {

  const router = useRouter();

  return (
    <>
      <StatusBar backgroundColor="#638ECB" />

    <SafeAreaView className="flex-1 bg-light-primary">

      <View className="flex flex-1">

      {/* <View className="flex-row h-[100px] justify-end items-center">
        <View className="bg-light-secondary01 m-2 p-2 rounded-full">
         <Image source={require("../../assets/icons/menu_unselected.png")} className="h-12 w-12" />
        </View>
      </View> */}





      <ScrollView className="flex-1 z-0 w-full" showsVerticalScrollIndicator = {false} contentContainerStyle = {{ minHeight: "100%", paddingBottom: 10 }}>
        <View className="flex-1">

          <View className="flex-col">

            <View> <SearchBar /> </View>
            
            {/* <View className="flex-row items-center w-full justify-start p-3 mt-12"> <Text>Image</Text> </View> */}

          </View>

        </View>
      </ScrollView>





      </View>

  </SafeAreaView>
  </>
  );
}
