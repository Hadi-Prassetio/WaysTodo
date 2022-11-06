import * as React from 'react'
import { View, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import CategoryDrop from '../components/CategoryDropdown'

const AddTodo = ({navigation}) => {

    const handleLogout = async() => {
        await AsyncStorage.removeItem('token');
        navigation.navigate("Login")
    }

    return(
        <View style={tw`mx-10 mt-28`}>
            <View style={tw`flex flex-row justify-between`}>
            <Text style={tw`text-2xl font-bold`}>
                Add List
            </Text>
            <TouchableOpacity onPress={handleLogout} style={tw`bg-red-400 p-2 rounded`}><Text style={tw`text-white font-bold`}>Log Out</Text></TouchableOpacity>
            </View>
            <TextInput style={tw`w-full bg-gray-200 rounded pl-2 py-2 my-2 border-2 border-gray-300 mt-10`} placeholder="Name"/>
            <CategoryDrop/>
            <TextInput style={tw`w-full bg-gray-200 rounded pl-2 py-2 my-2 border-2 border-gray-300`} placeholder="Description" 
            multiline
            numberOfLines={4}/>
            <TouchableOpacity style={tw`w-full bg-red-400 rounded py-3 my-4`}><Text style={tw`text-white font-bold text-center`}>Add Todo</Text></TouchableOpacity>
        </View>
    )
}
export default AddTodo