import React, {Component, useState} from 'react';  
import {Button, Platform, StyleSheet, Text, TextInput, TouchableHighlight, TouchableHighlightBase, TouchableOpacityBase, View,ListRenderItem,FlatList} from 'react-native';  


const Lists=()=> {
  
  const[name,setname]=useState([
          {name:'Darshan', email:"dsp@ff.com"}  ,
          {name:'Ajit', email:"ajit@ff.com"}  ,
          {name:'Jetalal', email:"fafda@ff.com"}  ,
          {name:'Ketan', email:"ksk@ff.com"}  ,
          {name:'Zayndaya', email:"zayandaya@ff.com"} ,{name:'Modi', email:"pmo_india@ff.com"}  ,
          {name:'Keran', email:"keran@ff.com"}  ,
          {name:'Akshay', email:"akshay@ff.com"}  ,
          {name:'Raju', email:"raju@ff.com"}  ,{name:'Yogi', email:"yogiupcm@ff.com"}  ,
          {name:'Pooja', email:"pooja@ff.com"}  ,
          {name:'Raveena', email:"raveena@ff.com"}  ,
          {name:'Popatlal', email:"popatlal@ff.com"}  ,{name:'Lata', email:"lata@ff.com"}  ,
          {name:'Rahul', email:"raul@ff.com"}  ,
          {name:'Ajay', email:"ajay@ff.com"}  ,
          {name:'ketan', email:"ketan@ff.com"}  ,{name:'Atal', email:"atal@ff.com"}  ,
          {name:'Ramesh', email:"ramesh@ff.com"}  ,
          {name:'Bahubali', email:"bahubali@ff.com"}  ,
          {name:'Pushapa', email:"pushap@ff.com"}  ,
  ]);
   const press= (item) => {  
    alert("Email is: "+ item.email);  
   }
  return(

     <View style={styles.container}> 
      <FlatList  data={name}  renderItem={({item})=>(
       
       <View><Text style={styles.item}   onPress={press.bind(this, item)} >     {item.name}</Text></View>

      )}
       />
     </View>
  )
}
const styles = StyleSheet.create({  
  container: {  
      flex: 1,  
  },  
  item: {  
      textAlign:'center',
      fontWeight:'bold',
    backgroundColor: '#18f4c1',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 9,
  },  
})  
export default Lists;