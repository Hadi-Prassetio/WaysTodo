import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'

import Home from './src/screens/Home'
import Login from './src/screens/Login'
import Register from './src/screens/Register'
import ListTodo from './src/screens/ListTodo'
import AddCategory from './src/screens/AddCategory'
import AddTodo from './src/screens/AddTodo'
import DetailTodo from './src/screens/DetailTodo'


const stack = createStackNavigator()
const tab = createBottomTabNavigator()

const MyTab = () => {
    return(
        <tab.Navigator 
        screenOptions={({route})=>({
            headerShown:false,

            tabBarIcon : ({focused}) => {
                let iconName;

                if(route.name == "Add Category"){
                    iconName = focused ? 'bookmarks':'bookmarks-outline'
                }else if(route.name == "List Todo"){
                    iconName = focused ? 'journal':'journal-outline'
                }else if(route.name == "Add Todo"){
                    iconName = focused ? 'list':'list-outline'
                }
                return <Ionicons name={iconName} size={20} color="red"/>
            }
        })}
        >
            <stack.Screen name="List Todo" component={ListTodo} options={{headerShown: false}}/>
            <stack.Screen name="Add Category" component={AddCategory}/>
            <stack.Screen name="Add Todo" component={AddTodo}/>
        </tab.Navigator>
    )
}

const Container = () => {
    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                <stack.Screen name="Login" component={Login} />
                <stack.Screen name="Register" component={Register} />   
                <stack.Screen name="Detail Todo" component={DetailTodo} options={{headerShown: false}}/>
                <stack.Screen name="Tab" component={MyTab} options={{headerShown: false}}/>
            </stack.Navigator>
        </NavigationContainer>
    )
}

 export default Container