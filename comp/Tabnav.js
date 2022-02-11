import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Form from './Form';
import Imager from './Imager';
import Lists from './Lists';
import Homepage from './Homepage';


const Tab = createBottomTabNavigator();

const Tabnav=()=> {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Homepage} />
        <Tab.Screen name="form" component={Form} />
        <Tab.Screen name="Imager" component={Imager} />
        <Tab.Screen name="Lists" component={Lists} />
      </Tab.Navigator>
    </NavigationContainer>
  );

}
export default Tabnav;