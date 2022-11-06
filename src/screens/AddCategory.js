import * as React from 'react'
import { View, Text, TextInput, TouchableOpacity, AsyncStorage, FlatList } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import axios from 'axios'

const AddTodo = () => {
    const [form, setForm] = React.useState()
    const [data, setData] = React.useState([])

    const handleChange =(name, value)=>{
        setForm({[name]:value})
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

            await axios.post('https://api.kontenbase.com/query/api/v1/5f961855-d59f-4527-ac23-2a72d0c4de5b/Category', form, config)
            const response = await axios.get('https://api.kontenbase.com/query/api/v1/5f961855-d59f-4527-ac23-2a72d0c4de5b/Category?$lookup=*', config)
            setData(response.data)
            console.log(response.data);
            alert("Category Added")
        } catch (error) {
            console.log(error);
            alert('Failed Add Category')
        }
    }

    const getData = async()=>{
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
            const response = await axios.get('https://api.kontenbase.com/query/api/v1/5f961855-d59f-4527-ac23-2a72d0c4de5b/Category?$lookup=*', config)
            setData(response.data)
            console.log(response.data);
        }

    React.useEffect(()=>{
    getData()
    },[])
    
    return(
        <View style={tw`mx-10 mt-28`}>
            <Text style={tw`text-2xl font-bold`}>
                Add Category
            </Text>
            <TextInput style={tw`w-full bg-gray-200 rounded pl-2 py-2 my-2 border-2 border-gray-300 mt-10`} placeholder="Name"
            onChangeText={(value)=>handleChange('name', value)}
            value={form}/>
            <TouchableOpacity onPress={handlePress} style={tw`w-full bg-red-400 rounded py-3 my-4`}><Text style={tw`text-white font-bold text-center`}>Add Category</Text></TouchableOpacity>
            <View style={tw`mt-10`}>
                <Text style={tw`text-2xl font-bold`}>List Category</Text>
                <FlatList data={data}
                numColumns={3}
                renderItem={({item})=>(
                    <Text style={tw`bg-red-400 m-1 py-1 px-4 rounded text-white`}>{item.name}</Text>
                )}/>
            </View>
        </View>
    )
}
export default AddTodo