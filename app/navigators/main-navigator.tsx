import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { Page1Screen, Page2Screen } from "../screens";

const PagesStack= createStackNavigator<any>();
export function PagesNavigator(){
    return (
        <PagesStack.Navigator
        screenOptions={{
            headerShown: true
        }}
        >
            <PagesStack.Screen name="page_1" component={Page1Screen}/>
            <PagesStack.Screen name="page_2" component={Page2Screen}/>

        </PagesStack.Navigator>
    );
}