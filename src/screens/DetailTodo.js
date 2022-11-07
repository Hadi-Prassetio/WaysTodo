import * as React from 'react'
import { View, Text, Image, TouchableOpacity, AsyncStorage  } from "react-native"
import tw from 'tailwind-react-native-classnames'
import Check from '../../assets/check.png'
import Checked from '../../assets/checked.png'
import Date from '../../assets/date.png'
import axios from 'axios'


const DetailTodo = ({route}) =>{

    const item = route.params.item
    const status = item.status

    const updateTodo = async() => {
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
                    description: item.description,
                    title: item.title,
                    status: !status
                }
            await axios.patch(`https://api.v2.kontenbase.com/query/api/v1/5f961855-d59f-4527-ac23-2a72d0c4de5b/TodoApp/${item._id}`, data, config)
            
        } catch (error) {
            alert(error)
            console.log(error);
        }
    }

    
    return(
        <>
        <View style={tw`bg-gray-200 rounded-md mx-10 my-10`}>
            <View style={tw`flex flex-row justify-between p-3`}>
                <Text style={item.status ? tw`text-xl font-bold line-through` : tw`text-xl font-bold`}>{item.title}</Text>
                <Text style={tw`bg-blue-200 rounded-md text-white font-bold p-2`}>{item.category}</Text>
            </View>
            <View style={tw`flex flex-row justify-between p-3`}>
                <View>
                    <Text style={item.status ? tw`text-gray-400 line-through` : tw`text-gray-400`}>{item.description}</Text>
                    <View style={tw`flex flex-row mt-1`}>
                        <Image source={Date} style={tw`my-auto mr-1`}/>
                        <Text style={tw`text-gray-400`}>{item.date}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={updateTodo}>
                    <Image source={item.status ? Checked : Check} style={tw`mr-3`}/>
                </TouchableOpacity>
            </View>
        </View>
        </>
    )
}

export default DetailTodo