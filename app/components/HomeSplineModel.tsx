import React from "react";
import { StyleSheet, View } from "react-native";
import WebView from "react-native-webview";

export default function HomeSplineModel() {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: "https://my.spline.design/gameintroinachurch-qNVI8Bhikk6NXaPdyIYZ2NCx/",
        }}
        style={styles.webview}
        javaScriptEnabled
        domStorageEnabled
        originWhitelist={["*"]}
        allowsInlineMediaPlayback
        mixedContentMode="always"
        startInLoadingState
        androidLayerType="hardware"
        automaticallyAdjustContentInsets={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Best for Spline scenes
  },
  webview: {
    flex: 1,
    backgroundColor: "transparent",
  },
});
