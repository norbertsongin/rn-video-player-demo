import React from 'react';
import {StatusBar, View} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {PlayerTab} from './src/containers/PlayerTab';
import {Tab3} from './src/containers/Tab3';
import {Tab4} from './src/containers/Tab4';
import {RandomOverlay} from './src/components/RandomOverlay';

enableScreens();
// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        // tabBarPosition="bottom"
        // tabBarOptions={{
        //   activeTintColor: 'white',
        //   inactiveTintColor: 'gray',
        //   showIcon: false,
        //   showLabel: false,
        //   tabStyle: {backgroundColor: 'black'},
        // }}
      >
        <Stack.Screen name="Tab1" component={PlayerTab} />
        {/* <Tab.Screen name="Tab2" component={PlayerTab} />
        <Tab.Screen name="Tab3" component={Tab3} />
        <Tab.Screen name="Tab4" component={Tab4} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const Tab = createMaterialTopTabNavigator();

// export const App = () => {
//   return (
//     <>
//       <StatusBar barStyle="light-content" />
//       {/* <NavigationContainer>
//         <Stack.Navigator
//         // screenOptions={{headerShown: false}}
//         >
//           <Stack.Screen name="Player" component={PlayerTab} />
//         </Stack.Navigator>
//       </NavigationContainer> */}
//       <View
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundColor: 'orange',
//         }}>
//         <PlayerTab />
//       </View>
//       <NavigationContainer>
//         <Tab.Navigator
//           style={{backgroundColor: 'blue'}}
//           tabBarPosition="bottom"
//           tabBarOptions={{
//             // activeTintColor: 'white',
//             // inactiveTintColor: 'gray',
//             showIcon: false,
//             showLabel: false,
//             tabStyle: {backgroundColor: 'black'},
//             style: {backgroundColor: 'red'},
//           }}>
//           <Tab.Screen name="@" component={RandomOverlay} />
//           <Tab.Screen name="#" component={RandomOverlay} />
//           <Tab.Screen name="$" component={RandomOverlay} />
//         </Tab.Navigator>
//       </NavigationContainer>
//     </>
//   );
// };
