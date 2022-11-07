import * as React from 'react'
import { View, Text, TextInput, Image, FlatList, Pressable, TouchableOpacity, AsyncStorage  } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import CategoryDropdown from '../components/CategoryDropdown'
import User from '../../assets/user.png'
import Check from '../../assets/check.png'
import Checked from '../../assets/checked.png'
import Date from '../../assets/date.png'
import axios from 'axios'

const ListTodo = ({navigation}) => {

    const [data, setData] = React.useState([])

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
            const response = await axios.get('https://api.v2.kontenbase.com/query/api/v1/5f961855-d59f-4527-ac23-2a72d0c4de5b/TodoApp', config)
            setData(response.data)
        }

    React.useEffect(()=>{
    getData()
    },[data])

    const updateTodo = async({id, title, desc, status}) => {
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
                const data = {
                    // _id: id,
                    description: desc,
                    title: title,
                    status: !status
                }
            await axios.patch(`https://api.v2.kontenbase.com/query/api/v1/5f961855-d59f-4527-ac23-2a72d0c4de5b/TodoApp/${id}`, data, config)
            
        } catch (error) {
            alert(error)
            console.log(error);
        }
    }


    return(
        <View style={tw`mx-10 mt-10 mb-60`}>
            <View style={tw`flex flex-row justify-between`}>
            <View>
                <Text style={tw`text-2xl font-bold text-left`}>Hi Hadi</Text> 
                <Text style={tw`text-base text-left text-gray-300`}>{data.length} Lists</Text> 
            </View>
            <Image source={User}/>
            </View>
            <TextInput style={tw`w-full bg-gray-200 rounded pl-2 py-2 my-2 border-2 border-gray-200 mt-10 mb-3`} placeholder="Search"/>
                <CategoryDropdown/>
            <FlatList 
                data={data} 
                renderItem={({item})=>(
                <Pressable key={item._id}  onPress={()=>navigation.navigate("Detail Todo", {item})} >
                    <View style={item.status ? tw`w-full bg-gray-100 rounded-md mt-2` : tw`w-full bg-gray-200 rounded-md mt-2`}>
                    <View style={tw`flex flex-row justify-between p-3`}>
                        <Text style={item.status ? tw`text-xl font-bold line-through` : tw`text-xl font-bold`}>{item.title}</Text>
                        <Text style={tw`bg-blue-200 rounded-md text-white font-bold p-2`}>Study</Text>
                    </View>
                    <View style={tw`flex flex-row justify-between p-3`}>
                        <View>
                            <Text style={item.status ? tw`text-gray-400 line-through` : tw`text-gray-400`}>{item.description}</Text>
                            <View style={tw`flex flex-row mt-1`}>
                                <Image source={Date} style={tw`my-auto mr-1`}/>
                                <Text style={tw`text-gray-400`}>24 January 2022</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={()=>updateTodo({id: item._id, title: item.title, desc: item.description, status: item.status})}>
                            <Image source={item.status ? Checked : Check} style={tw`mr-3`}/>
                        </TouchableOpacity>
                    </View>
                    </View>
                </Pressable>
            )}/>
          
        </View>
    )
}

export default ListTodo