import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import Home from './Home';
import End from './End';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={Home}>
        </Stack.Screen>
        <Stack.Screen name="End" component={End}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
