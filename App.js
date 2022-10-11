import React from "react";
import { NativeBaseProvider } from "native-base";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './screens/Login';
import Feed from "./screens/Feed";

export default function App() {
  const Tab = createBottomTabNavigator()
  const Stack = createNativeStackNavigator()
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {/* <Tab.Navigator
        screenOptions={{ headerShown: false }} /> */}
        {/* <Tab.Screen name=" component={} /> */}
        <Stack.Navigator
        initialRouteName='Feed'
        screenOptions={{ headerShown: false}}>
        <Stack.Screen
        name='Feed'
        component={Feed} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

