

import React from 'react';
import  {View,Text,StyleSheet, TextInput, Button,state,KeyboardAvoidingView,ScrollView} from 'react-native';



class Form extends React.Component {


  
  state={
      name:'',
      password:'',
      isshow:false,
    }
  
  submit()
  {
    console.warn("values",this.state)
  }
  render(){
    return(
     
        <ScrollView >
           <KeyboardAvoidingView >
      <View  style={{backgroundColor:"#ffe6e6"}}>
        
         <Text  style={styles.head}>Register Now! </Text> 
        <TextInput style={styles.usb} placeholder='First Name' onChangeText={(text)=> {this.setState({name:text})}}></TextInput>
        <TextInput style={styles.usb} placeholder='Last Name' onChangeText={(text)=> {this.setState({name:text})}}></TextInput>
        <TextInput style={styles.usb} placeholder='Enter Email' keyboardType='email-address' onChangeText={(text)=> {this.setState({name:text})}}></TextInput>
        <TextInput style={styles.usb} placeholder='Enter phone No' keyboardType='numeric' onChangeText={(text)=> {this.setState({name:text})}}></TextInput>
        <TextInput style={styles.usb} placeholder='City' onChangeText={(text)=> {this.setState({name:text})}}></TextInput>
        <TextInput style={styles.usb} placeholder='Pincode'  keyboardType='numeric' onChangeText={(text)=> {this.setState({name:text})}}></TextInput>
        <TextInput style={styles.usb} placeholder='Address' onChangeText={(text)=> {this.setState({name:text})}}></TextInput>
       
        <TextInput style={styles.usb}   secureTextEntry={true}  placeholder='password'  onChangeText={(text)=> {this.setState({password:text})}}></TextInput>
        <Button title='submit' style = {styles.btnsubmit}  onPress={() => { this.setState({ isshow: true }) }}></Button>
        {this.state.isshow &&
        <Text>{this.state.name}</Text>
      }
      {this.state.isshow &&
        <Text>{this.state.password}</Text>
      }
      </View>
      </KeyboardAvoidingView>
      </ScrollView>
      
      
      
    )
  }
}
export default Form;
 const styles= StyleSheet.create({
   usb :{
     
    margin: 15,
    height: 40,
    borderColor: '#1a587a',
    borderWidth: 1

   },
   head :{
        fontSize:50,
        fontWeight:'bold',
        textAlign:'center',
        color:'#4da6ff'
   },
   btnsubmit:{
       
       borderWidth:2,
   }
  

  
 })