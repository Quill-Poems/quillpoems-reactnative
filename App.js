import { Text, View } from 'react-native';
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './screens/Login';

export default function App() {
  const Tab = createBottomTabNavigator()
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      {/* <Tab.Navigator
      screenOptions={{ headerShown: false }} /> */}
      {/* <Tab.Screen name=" component={} /> */}
      <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{ headerShown: false}}>
      <Stack.Screen
      name='Login'
      component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

