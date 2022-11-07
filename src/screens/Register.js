import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import tw from 'tailwind-react-native-classnames';
import Icon from '../../assets/auth.png';

const Register = ({navigation}) => {

    const [register, setRegister] = React.useState({
        email: '',
        firstName: '',
        password: ''
    })

    const handleChange = (name, value) => {
        setRegister({
            ...register,
            [name]:value
        })
    }

    const handlePress = async() => {
        try {
            const config = {
                headers: {
                    'Content-type': 'application/json',
                },
            };
            const body = JSON.stringify(register)
            const response = await axios.post('https://api.v2.kontenbase.com/query/api/v1/5f961855-d59f-4527-ac23-2a72d0c4de5b/auth/register', body, config)
            console.log(response);
            navigation.navigate("Login")

        } catch (error) {
            console.log(error)
            alert('Failed Registrasi')
        }
    }

    return(
        <View style={tw`mx-10 my-auto`}>
            <View style={tw`my-auto`}>
                <View style={tw`items-center`}>
                        <Image source={Icon} width={40}/>
                    </View>
                <Text style={[tw` text-4xl font-bold text-center mt-10 text-left`]}>Register</Text>
                <View style={[tw`mt-5 text-center`]}>
                    <TextInput style={tw`w-full bg-gray-200 rounded pl-2 py-2 my-2 border-2 border-gray-300`} placeholder="Email"
                    onChangeText={(value)=>handleChange('email', value)}
                    value={register.email}/>
                    <TextInput style={tw`w-full bg-gray-200 rounded pl-2 py-2 my-2 border-2 border-gray-300`} placeholder="Name"
                    onChangeText={(value)=>handleChange('firstName', value)}
                    value={register.firstName}/>
                    <TextInput style={tw`w-full bg-gray-200 rounded pl-2 py-2 my-2 border-2 border-gray-300`} placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(value)=>handleChange('password', value)}
                    value={register.password}
                    />
                </View>
            </View>
            <View style={tw`items-center mt-40`}>
                <TouchableOpacity onPress={handlePress} style={tw`mb-3 bg-red-400 w-full rounded-md`}>
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