import LottieView from 'lottie-react-native';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';

const { width } = Dimensions.get("window");

const IMAGE_SIZE = width < 380 ? 22 : width < 430 ? 26 : 30;

const styles = StyleSheet.create({
  lottie: {
    width: IMAGE_SIZE + 20,
    height: IMAGE_SIZE + 20,
  },
  searchText: {
    fontFamily: 'font01', // Change this to your preferred font
    color: '#94a3b8', // slate-400
    textAlign: 'center',
    fontSize: 12
  },
});

const SearchBar = () => {
  return (
    <View className="flex-col bg-light-primary01 h-[250px] w-full absolute rounded-bl-[75px] elevation-md rounded-br-[75px] justify-start">
      
      <View className='flex-col'>

        <View className='items-end mt-[50px] mr-5'>
          <TouchableOpacity>
            <Image source={require("../../assets/icons/menu_unselected.png")} className="h-10 w-10"
            style={{tintColor: '#4c2b21'}} />
          </TouchableOpacity>
        </View>

        <View className='flex-row h-20 items-center elevation-lg bg-light-primary p-4 mt-[50px] mx-12 rounded-3xl'>

          <View className='mr-8'>
            <LottieView 
              source={require("../../assets/lottie/search_lottie04.json")} 
              autoPlay 
              loop 
              style={styles.lottie} 
            />
          </View>

          <Text style={styles.searchText}>
            S E A R C H  Y O U R  M O V I E
          </Text>

        </View>

         <View className='items-center mt-6 mr-5'>
          <TouchableOpacity className='elevation-lg'>
            <Image source={require("../../assets/icons/minus_unselected.png")} className="h-6 w-8"
            style={{ tintColor: "#ffffff" }} />
          </TouchableOpacity>
        </View>
        
      </View>
        
    </View>
  )
}

export default SearchBar