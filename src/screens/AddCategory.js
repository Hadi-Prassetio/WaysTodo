import * as React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const AddTodo = () => {
    return(
        <View style={tw`mx-10 mt-28`}>
            <Text style={tw`text-2xl font-bold`}>
                Add Category
            </Text>
            <TextInput style={tw`w-full bg-gray-200 rounded pl-2 py-2 my-2 border-2 border-gray-300 mt-10`} placeholder="Name"/>
            <TouchableOpacity style={tw`w-full bg-red-400 rounded py-3 my-4`}><Text style={tw`text-white font-bold text-center`}>Add Category</Text></TouchableOpacity>
            <View style={tw`mt-10`}>
                <Text style={tw`text-2xl font-bold`}>List Category</Text>
            </View>
        </View>
    )
}
export default AddTodo