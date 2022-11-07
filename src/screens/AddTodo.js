import * as React from 'react'
import { View, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import CategoryDrop from '../components/CategoryDropdown'
import Dropdown from '../components/Dropdown'
import axios from 'axios'

const AddTodo = ({navigation}) => {

    const [form, setForm] = React.useState({
        title:'',
        description:'',
        category:'',
        status:false
    })
    // console.log(form);
    const [props, setProps] = React.useState()
    // console.log(props);

    const handleChange = (name, value) => {
        setForm({
            ...form,
            [name]:value,
        })
    }

    const handleLogout = async() => {
        await AsyncStorage.removeItem("token")
        navigation.navigate("Login")
    }

    const handlePress = async() => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (token === null) {
                navigation.navigate("Login")
            }

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token
                },
            };

            await axios.post('https://api.v2.kontenbase.com/query/api/v1/5f961855-d59f-4527-ac23-2a72d0c4de5b/TodoApp', form, config)
            alert("List Added")
            navigation.navigate("List Todo")
        } catch (error) {
            console.log(error);
            alert('Failed Add List')
        }
    }

    return(
        <View style={tw`mx-10 mt-28`}>
            <View style={tw`flex flex-row justify-between`}>
            <Text style={tw`text-2xl font-bold`}>
                Add List
            </Text>
            <TouchableOpacity onPress={handleLogout} style={tw`bg-red-400 p-2 rounded`}><Text style={tw`text-white font-bold`}>Log Out</Text></TouchableOpacity>
            </View>
            <TextInput style={tw`w-full bg-gray-200 rounded pl-2 py-2 my-2 border-2 border-gray-300 mt-10`} placeholder="Name" 
            onChangeText={(value)=> handleChange('title', value)}
            value={form.title}/>
            <CategoryDrop/>
            {/* <Dropdown data={form} onSelect={setSelected} /> */}
            <TextInput style={tw`w-full bg-gray-200 rounded pl-2 py-2 my-2 border-2 border-gray-300`} placeholder="Description" 
            multiline
            numberOfLines={4}
            onChangeText={(value)=> handleChange('description', value)}
                value={form.description}/>
            <TouchableOpacity onPress={handlePress}  style={tw`w-full bg-red-400 rounded py-3 my-4`}><Text style={tw`text-white font-bold text-center`}>Add Todo</Text></TouchableOpacity>
        </View>
    )
}
export default AddTodo