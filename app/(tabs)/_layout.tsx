import { Tabs } from "expo-router";
import LottieView from "lottie-react-native";
import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";

const { width } = Dimensions.get("window");

const IMAGE_SIZE = width < 380 ? 22 : width < 430 ? 26 : 30;

const styles = StyleSheet.create({
  icon: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
  lottie: {
    width: IMAGE_SIZE + 10,
    height: IMAGE_SIZE + 10,
  },
});

const TabIcon = ({ focused, iconUnselected, lottie }: { focused: boolean; iconUnselected: any; lottie: any }) => {
  return (
    <View
      className={`flex flex-row w-full flex-1 min-w-[100px] min-h-12 items-center justify-center mt-3 rounded-full overflow-hidden ${
        focused ? "bg-light-secondary01" : "bg-transparent"
      }`}
    >
      {focused && lottie ? (
        <LottieView source={lottie} autoPlay loop style={styles.lottie} />
      ) : (
        <Image source={iconUnselected} style={styles.icon} resizeMode="contain" />
      )}
    </View>
  );
};

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#638ECB",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 20,
          height: 50,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#395886",
        },
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          title: "PROFILE",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              iconUnselected={require("../../assets/icons/profile_unselected.png")}
              lottie={require("../../assets/lottie/male_user_lottie.json")}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="favourite"
        options={{
          title: "FAVOURITE",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              iconUnselected={require("../../assets/icons/favourite_unselected.png")}
              lottie={require("../../assets/lottie/favourite_lottie.json")}
            />
          ),
        }}
      />

       <Tabs.Screen
        name="index"
        options={{
          title: "HOME",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
            className={`flex flex-row w-full flex-1 min-w-14 min-h-12 items-center justify-center mt-3 rounded-full overflow-hidden ${
              focused 
              ? "bg-light-primary01"  
              : "bg-transparent"
              }`} > 
              <Image
              source={focused 
                ? require("../../assets/images/codex_selected.png") 
                : require("../../assets/images/codex_unselected.png")}
              style={styles.icon}
              resizeMode="contain" /> 
              </View>
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "SEARCH",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              iconUnselected={require("../../assets/icons/search_unselected.png")}
              lottie={require("../../assets/lottie/search_lottie01.json")}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="setting"
        options={{
          title: "SETTING",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              iconUnselected={require("../../assets/icons/setting_unselected.png")}
              lottie={require("../../assets/lottie/setting_lottie.json")}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
