import React from 'react';
import { Button, View, Text,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Form from './comp/Form';
import Imager from './comp/Imager';
import Lists from './comp/Lists';
import { create } from 'react-test-renderer';
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent: 'space-between', alignItems: 'center', justifyContent: 'center',  backgroundColor: "aliceblue", }}>
      <View >
      <Text style={{fontSize:40,fontWeight:'bold',color:'olive'}}>Main App</Text>
      </View>
      <View  style={styles.btn}>
      <Button
        title="Registration Form"
        onPress={() => navigation.navigate('Registration')}
      />
      </View>
      <View  style={styles.btn} >
       <Button 
        title='List'
        onPress={()=> navigation.navigate('Lists')}
       />
      

      </View>
      <View  style={styles.btn} >
       <Button 
        title='Image view'
        onPress={()=> navigation.navigate('Imager')}
       />
      

      </View>
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Registration" component={Form} />
        <Stack.Screen name='Imager' component={Imager}/>
        <Stack.Screen name='Lists' component={Lists}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({

   btn:{
   
    margin: 15,
   height: 40,
   borderColor: '#1a587a',
   borderWidth: 1
   }
});

export default App;
