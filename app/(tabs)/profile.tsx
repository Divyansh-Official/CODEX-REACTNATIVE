import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import ProfileCard from '../components/ProfileCard'

const profile = () => {
  return (
    <View className='flex-1 bg-light-secondary04'>
      
            <View className="flex-col">

              <View className='mt-[0px]'> <ProfileCard/> </View>

              <Text className='mx-5 text-xl' style={{fontFamily: "font02", color: '#f3dbce'}}> UPCOMING </Text>

            </View>

    </View>
  )
}

export default profile