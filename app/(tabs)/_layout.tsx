import { Tabs } from "expo-router";
import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";

const { width } = Dimensions.get("window");

const IMAGE_SIZE = width < 380
  ? 22
  : width < 430
  ? 26
  : 30;

const styles = StyleSheet.create({
  icon: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
});

// ---- Types for TabIcon Props ----
type TabIconProps = {
  focused: boolean;
  iconSelected: any;
  iconUnselected: any;
};

// ---- Reusable Tab Icon Component ----
const TabIcon: React.FC<TabIconProps> = ({ focused, iconSelected, iconUnselected }) => {
  return (
    <View
      className={`flex flex-row w-full flex-1 min-w-[112px] min-h-10 items-center justify-center mt-3 rounded-full overflow-hidden ${
        focused ? "bg-dark-primary02" : "bg-transparent"
      }`}
    >
      <Image
        source={focused ? iconSelected : iconUnselected}
        style={styles.icon}
        resizeMode="contain"
      />
    </View>
  );
};

// ---- Layout for Tabs ----
const _layout= () => {
  return (
    <Tabs screenOptions={{
      tabBarShowLabel: false,
    }}>
      <Tabs.Screen
        name="profile"
        options={{
          title: "PROFILE",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              iconSelected={require("../../assets/icons/user_male.png")}
              iconUnselected={require("../../assets/icons/user_male.png")}
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
              iconSelected={require("../../assets/icons/favourite_selected.png")}
              iconUnselected={require("../../assets/icons/favourite_unselected.png")}
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
            <TabIcon
              focused={focused}
              iconSelected={require("../../assets/images/codex_selected.png")}
              iconUnselected={require("../../assets/images/codex_unselected.png")}
            />
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
              iconSelected={require("../../assets/icons/search_selected.png")}
              iconUnselected={require("../../assets/icons/search_unselected.png")}
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
              iconSelected={require("../../assets/icons/setting_selected.png")}
              iconUnselected={require("../../assets/icons/setting_unselected.png")}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
