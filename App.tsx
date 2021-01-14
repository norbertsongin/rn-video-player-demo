import React from 'react';
import {StatusBar} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {PlayerTab} from './src/containers/PlayerTab';

enableScreens();
const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tab1" component={PlayerTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
