import React from 'react';
import { Button, View, Text,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Form from './comp/Form';
import Imager from './comp/Imager';
import Lists from './comp/Lists';
import { create } from 'react-test-renderer';
import Stacknav from './comp/Satacknav';
import Tabnav from './comp/Tabnav';



const App=()=> {
  return (
//<Imager/>
 // <Stacknav/>
    <Tabnav/>
  );
  }

export default App;
