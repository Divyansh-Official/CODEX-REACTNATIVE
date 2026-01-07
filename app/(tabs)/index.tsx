import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import { Animated, ScrollView, View } from "react-native";
import HomeMovieCardContainer from "../components/HomeMovieCardContainer";
import SearchBar from "../components/SearchBar";

export default function Index() {

  const ScrollSearchBar = useRef(new Animated.Value(0));
  
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const router = useRouter();

  return (
    <>
    <StatusBar style="light" backgroundColor="#fff" translucent />

    {/* <SafeAreaView className="flex-1 bg-light-primary"> */}
    <View className="flex-1 bg-light-primary">

      <View className="flex-col">

      {/* <View> <SearchBar/> </View> */}

      <ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: ScrollSearchBar.current}}}],
        )}
        className="flex mt-[0px] mb-[90px]"
        showsVerticalScrollIndicator
        contentContainerStyle={{ paddingBottom: 20 }}>

        <View className="flex-col">
          
          <View> <SearchBar/> </View>

          <View className="mt-[250px]"> 
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

              <View> <HomeMovieCardContainer/> </View>
              <View> <HomeMovieCardContainer/> </View>
              <View> <HomeMovieCardContainer/> </View>
              <View> <HomeMovieCardContainer/> </View>

            </ScrollView>
          </View>

        </View>

      </ScrollView>

      </View>

    </View>

  {/* </SafeAreaView> */}
  </>
  );
}
