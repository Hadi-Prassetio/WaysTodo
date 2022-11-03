import * as React from 'react'
import { View, Text, Image, TouchableOpacity  } from "react-native"
import tw from 'tailwind-react-native-classnames'
import Check from '../../assets/check.png'
import Checked from '../../assets/checked.png'
import Date from '../../assets/date.png'


const DetailTodo = ({route}) =>{
    const item = route.params.item
    return(
        <>
        <View style={tw`bg-gray-200 rounded-md mx-10 my-10`}>
            <View style={tw`flex flex-row justify-between p-3`}>
                <Text style={item.status ? tw`text-xl font-bold line-through` : tw`text-xl font-bold`}>{item.title}</Text>
                <Text style={tw`bg-blue-200 rounded-md text-white font-bold p-2`}>{item.category}</Text>
            </View>
            <View style={tw`flex flex-row justify-between p-3`}>
                <View>
                    <Text style={item.status ? tw`text-gray-400 line-through` : tw`text-gray-400`}>{item.desc}</Text>
                    <View style={tw`flex flex-row mt-1`}>
                        <Image source={Date} style={tw`my-auto mr-1`}/>
                        <Text style={tw`text-gray-400`}>{item.date}</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Image source={item.status ? Checked : Check} style={tw`mr-3`}/>
                </TouchableOpacity>
            </View>
        </View>
        </>
    )
}

export default DetailTodo