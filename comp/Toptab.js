import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Imager from './Imager';
import Form from './Form';
import Lists from './Lists';
import Stnav from './Stnav';




const Tab = createMaterialTopTabNavigator();

export default function Toptab() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Image" component={Imager} />
        <Tab.Screen name="Fatlist" component={Lists} />
        <Tab.Screen name="Registration" component={Form} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}