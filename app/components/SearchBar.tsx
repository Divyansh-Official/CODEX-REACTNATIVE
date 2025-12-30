import LottieView from 'lottie-react-native';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get("window");

const IMAGE_SIZE = width < 380 ? 22 : width < 430 ? 26 : 30;

const styles = StyleSheet.create({
//   icon: {
//     width: IMAGE_SIZE,
//     height: IMAGE_SIZE,
//   },
  lottie: {
    width: IMAGE_SIZE + 20,
    height: IMAGE_SIZE + 20,
  },
});

const SearchBar = () => {
  return (
    <View className="flex-col bg-light-secondary03 h-[250px] w-full absolute rounded-bl-[75px] rounded-br-[75px] justify-start">
      
      <View className='flex-col'>

        <View className='flex-row h-20 items-center bg-light-secondary01 p-4 mt-[150px] mx-12 rounded-3xl'>

                    <View className='mr-8'> <LottieView source={require("../../assets/lottie/search_lottie02.json")} autoPlay loop style={styles.lottie} /> </View>

                    <Text className='text-center text-slate-400 fontFamily-AovelSansRounded-rdDL'> SEARCH YOUR MOVIE </Text>

        </View>
        
      </View>
        
    </View>

  )
}

export default SearchBar