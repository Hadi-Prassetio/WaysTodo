import * as React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import tw from 'tailwind-react-native-classnames'
import Landing from '../../assets/landing.png'

const Home = ({navigation}) => {
    return(
        <View style={tw`mx-10 my-auto`}>
        <View style={tw`my-auto`}>
            <View  style={tw`items-center`}>
                <Image source={Landing} width={40}/>
            </View>
          <Text style={[tw` text-4xl font-bold text-center`]}>Ways <Text style={tw`text-red-500`}>To</Text><Text style={tw`text-red-200`}>Do</Text></Text>
          <View style={[tw`mt-10`]}>
            <Text style={tw`text-center`}>Write your activity, and finish your actifity</Text>
            <Text style={tw`text-center`}>Fast, Simple and Easy to Use</Text>
          </View>
        </View>
        <View style={tw`items-center mt-52`}>
          <TouchableOpacity onPress={()=>navigation.navigate("Login")} style={tw`mb-3 bg-red-400 w-full rounded-md`}>
            <Text style={tw` text-center  text-white py-2 font-bold`}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("Register")}  style={tw`mb-3 bg-gray-400 w-full rounded-md`}>
            <Text style={tw` text-center text-white py-2 font-bold`}>Register</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    )
}
export default Home