import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import ProfileCard from '../components/ProfileCard'

const profile = () => {
  return (
    <View className='flex-1 bg-light-primary'>
      
            <View className="flex flex-1">

              <View className='mt-[50px] mx-5'> <ProfileCard/> </View>

            </View>

    </View>
  )
}

export default profile