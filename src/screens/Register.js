import * as React from "react";
import { View, TouchableOpacity, Text, Image, TextInput } from "react-native";
import { StatusBar } from 'expo-status-bar'
import tw from 'tailwind-react-native-classnames'
import Icon from '../../assets/auth.png'

const Register = ({navigation}) => {
    return(
        <View style={tw`mx-10 my-auto`}>
            <View style={tw`my-auto`}>
                <View style={tw`items-center`}>
                        <Image source={Icon} width={40}/>
                    </View>
                <Text style={[tw` text-4xl font-bold text-center mt-10 text-left`]}>Register</Text>
                <View style={[tw`mt-5 text-center`]}>
                    <TextInput style={tw`w-full bg-gray-200 rounded pl-2 py-2 my-2 border-2 border-gray-300`} placeholder="Email"/>
                    <TextInput style={tw`w-full bg-gray-200 rounded pl-2 py-2 my-2 border-2 border-gray-300`} placeholder="Name"/>
                    <TextInput style={tw`w-full bg-gray-200 rounded pl-2 py-2 my-2 border-2 border-gray-300`} placeholder="Password"/>
                </View>
            </View>
            <View style={tw`items-center mt-40`}>
                <TouchableOpacity style={tw`mb-3 bg-red-400 w-full rounded-md`}>
                    <Text style={tw` text-center  text-white py-2 font-bold`}>Register</Text>
                </TouchableOpacity>
                <Text>Join Us before?   
                    <Text onPress={()=>navigation.navigate("Login")} style={tw`text-red-500 font-bold`}> Login</Text>
                </Text>
            </View>
            <StatusBar style="auto" />
      </View>
    )
}

export default Register