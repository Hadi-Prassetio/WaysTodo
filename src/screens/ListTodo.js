import * as React from 'react'
import { View, Text, TextInput, Image, FlatList, Pressable, TouchableOpacity  } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import User from '../../assets/user.png'
import Check from '../../assets/check.png'
import Checked from '../../assets/checked.png'
import Date from '../../assets/date.png'
import Todo from '../../fakeData'

const ListTodo = ({navigation}) => {
    return(
        <View style={tw`mx-10 mt-10 mb-60`}>
            <View style={tw`flex flex-row justify-between`}>
            <View>
                <Text style={tw`text-2xl font-bold text-left`}>Hi Hadi</Text> 
                <Text style={tw`text-base text-left text-gray-300`}>{Todo.length} Lists</Text> 
            </View>
            <Image source={User}/>
            </View>
            <TextInput style={tw`w-full bg-gray-200 rounded pl-2 py-2 my-2 border-2 border-gray-200 mt-10 mb-7`} placeholder="Search"/>
            <FlatList 
                data={Todo} 
                renderItem={({item})=>(
                <Pressable  onPress={()=>navigation.navigate("Detail Todo", {item})} >
                    <View style={item.status ? tw`w-full bg-gray-100 rounded-md mt-2` : tw`w-full bg-gray-200 rounded-md mt-2`}>
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
                </Pressable>
            )}/>
          
        </View>
    )
}

export default ListTodo