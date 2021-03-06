import React  from "react"
import BottomTabNavigator from  './TabNavigations';
import StoryScreen  from "../screens/StoryScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const StackNavigator =()=>{
    return(
        <Stack.Navigator 
        initialRouteName="Home" 
        ScreenOptions = {{headerShown : false}}
        >
            <Stack.Screen name = "Home"  component = {BottomTabNavigator}/>
            <Stack.Screen name = "StoryScreen" component = {StoryScreen}/>
            
        </Stack.Navigator>
    );
}

export default StackNavigator