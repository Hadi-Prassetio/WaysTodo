import * as React from "react";
import { View, TouchableOpacity, Text, Image, TextInput } from "react-native";
import { StatusBar } from 'expo-status-bar'
import tw from 'tailwind-react-native-classnames'
import Icon from '../../assets/auth.png'
import axios from 'axios'

const Login = ({navigation}) => {

    const [login, setLogin] = React.useState({
        email:'',
        password:''
    })

    const handleChange = (name, value) => {
        setLogin({
            ...login,
            [name]:value,
        })
    }

    // const response = 

    return(
        <View style={tw`mx-10 my-auto`}>
        <View style={tw`my-auto`}>
            <View style={tw`items-center`}>
                    <Image source={Icon} width={40}/>
                </View>
            <Text style={[tw` text-4xl font-bold text-center mt-10 text-left`]}>Login</Text>
            <View style={[tw`mt-5 text-center`]}>
                <TextInput style={tw`w-full bg-gray-200 rounded pl-2 py-2 my-2 border-2 border-gray-300`} placeholder="Email" 
                onChangeText={(value)=> handleChange('email', value)}
                value={login.email}/>
                <TextInput style={tw`w-full bg-gray-200 rounded pl-2 py-2 my-2 border-2 border-gray-300`} placeholder="Password"
                onChangeText={(value)=>handleChane('password', value)}
                value={login.password}/>
            </View>
        </View>
        <View style={tw`items-center mt-40`}>
            <TouchableOpacity style={tw`mb-3 bg-red-400 w-full rounded-md`}>
                <Text onPress={()=>navigation.navigate("Tab")} style={tw` text-center  text-white py-2 font-bold`}>Login</Text>
            </TouchableOpacity>
            <Text>Join Us before?   
                <Text onPress={()=>navigation.navigate("Register")} style={tw`text-red-500 font-bold`}> Register</Text>
            </Text>
        </View>
        <StatusBar style="auto" />
        </View>
    )
}

export default Login