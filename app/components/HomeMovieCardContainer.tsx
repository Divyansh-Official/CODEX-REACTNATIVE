import { View, Text, Image } from 'react-native'
import React from 'react'

const HomeMovieCardContainer = () => {
  return (
    <View className='flex-1 mt-5 ml-2 mr-2 overflow-hidden bg-light-primary02 border border-light-secondary04   w-[125px] elevation-lg rounded-3xl'>

      <View className='flex-col'> 
        
        <View className='p-1'> <Image source={require("../../assets/images/thumbnail_demo.jpg")} className='h-[150px] w-full rounded-3xl' /> </View>

        <Text className='m-2' style={{ fontFamily: "font01" }}>Movie Name</Text>
      </View>
     
    </View>
  )
}

export default HomeMovieCardContainer