import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import BAR from "./src/screens/ProgessBar";
import TodoScreen from "./src/screens/TodoScreen";
import InicioApp from "./src/components/ButtonFull";


const Stack = createNativeStackNavigator();
function MyStack() {
    return(
        <Stack.Navigator
            initialRouteName="Inicio"
        >
            <Stack.Screen
                name="Inicio"
                component={BAR}
                options={{
                    headerShown: false
                }}

            />

            <Stack.Screen
                name="ToDo"
                component={TodoScreen}
                options={{
                    headerShown: false
                }}

            />
        </Stack.Navigator>
    )
}


export default function Navigation() {
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    );
}