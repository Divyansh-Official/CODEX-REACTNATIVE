import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const welcome = () => {
  return (
    <View className='flex-1 bg-light-secondary02'>
      
      <View className='flex-1 justify-center items-center'>

        <Image source={require("../assets/images/codex.png")} />

      </View>

    </View>
  )
}

export default welcome

const styles = StyleSheet.create({})