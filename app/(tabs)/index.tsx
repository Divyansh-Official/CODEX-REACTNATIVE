import { Image, ScrollView, View } from "react-native";
import HomeSplineModel from "../components/HomeSplineModel";
export default function Index() {
  return (
    <View className="flex-1 bg-light-primary">

      <View className="flex-1 bg-light-secondary03 h-[250px] w-full absolute z-0 rounded-bl-[75px] rounded-br-[75px]
      justify-end">

        <Image
          source={require("../../assets/images/codex.png")}
          className="w-20 h-20 ml-8 mb-8"
          resizeMode="contain" />

          <HomeSplineModel />
      </View>

      <ScrollView className="flex-1 px-3"
      showsVerticalScrollIndicator = {false}
      contentContainerStyle = {{
        minHeight: "100%", paddingBottom: 10
      }}>

       <View className="flex flex-row items-center w-full justify-start p-3 mt-12">
        <View className="min-w-14 min-h-14 sm:w-20 sm:h-20 md:w-32 md:h-32">
          
          </View>
          </View>


      </ScrollView>

    </View>
  );
}
