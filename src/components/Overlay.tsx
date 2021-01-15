import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Chat} from './Chat';
import {Content} from './Content';
import {Guide} from './Guide';

const Tab = createMaterialTopTabNavigator();

export const Overlay = () => {
  return (
    <Tab.Navigator
      lazy
      tabBarPosition="bottom"
      sceneContainerStyle={{backgroundColor: 'transparent'}}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        showIcon: false,
        showLabel: true,
        indicatorContainerStyle: {display: 'none'},
        style: {backgroundColor: 'transparent'},
      }}>
      <Tab.Screen name="Home" component={Content} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Guide" component={Guide} />
    </Tab.Navigator>
  );
};
