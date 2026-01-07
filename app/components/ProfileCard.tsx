import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

const WatchListStyle = ({
    count,
    label}: {
        count: string,
        label: string
    }) => {
    return (
        <View className='flex-col mx-2 justify-center'>
            <Text className='text-sm font-semibold' > {count} </Text>
            <Text className='text-sm' style={{ fontFamily: "font01" }}> {label} </Text>
        </View>
    )};

    

const ProfileCard = () => {
  return (
    <View className='flex-1'>

        <View className='flex-col'>

        <View className='flex-col bg-light-primary01 h-[450px] elevation-lg w-full rounded-3xl'>
            <View className='flex-row'> 
                <View> <Image source={{}} className='h-[150px] w-[100px] m-5 rounded-full bg-gray-700 elevation-3xl' /> </View>
                <View className='flex-col ml-[-10]'>
                    <Text className='mt-12 font-semibold'> CODEX USER </Text>

                    <View className='flex-row mt-10'>
                        {/* 1 */}
                        <WatchListStyle count="001" label="Completed" />
                        {/* 2 */}
                        <WatchListStyle count="002" label="Watching" />
                        {/* 3 */}
                        <WatchListStyle count="003" label="On-Hold" />
                    </View>
                </View>

                <View className='ml-[-30] mt-4'> <LottieView source={require("../../assets/lottie/edit_lottie.json")} autoPlay loop style={{ width: 35, height: 35 }} /> </View>
            </View>
        </View>





        <View> <Text className='mt-36'>H I S T O R Y</Text> </View>





        <ScrollView>

        </ScrollView>
            




        </View>

    </View>
  )
}

export default ProfileCard