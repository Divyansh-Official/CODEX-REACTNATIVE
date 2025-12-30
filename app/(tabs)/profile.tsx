import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const profile = () => {
  return (
    <View className='flex-1 bg-dark-primary01'>
      <Text>profile</Text>
      <Link href={"/welcome"}> Go to Welcome Page </Link>
    </View>
  )
}

export default profile