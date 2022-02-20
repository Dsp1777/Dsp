import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet,TextInput, Modal ,Button} from "react-native";



const Roundedb = () => {


    const[focussubject , setfocussubject]= useState('');
    const[visiable ,setvisible] = useState(false);
    const[isshow , setisshow]=useState(false);
    const[gg ,setgg]=useState("click");



    const onp=()=>{
       
            
        if(setisshow(!isshow)){
            useState("clik")
        }else
        {
            setgg("clear")
        }

    }

    const changebtntxt=()=>{
           
        // if(setisshow(!isshow)){
        //     useState("clik")
        // }else
        // {
        //     setgg("clear")
        // }
 }

 

    return (
          
        <View style={{ flex: 1,backgroundColor:'#1aff53' }}>





             {/* Moddal page start */}
            <Modal
               visible ={visiable}
               setvisible={!visiable}
               transparent={true}
               onRequestClose={() => { alert("Modal has been closed.");}}
            >
                <View style={{flex :1, justifyContent: "center",alignItems: "center",marginTop: 22 }}>
                    <View style={styles.moddalstyle} >
                   
                         <Text>This was modal</Text>
            
            
                   <TouchableOpacity
                    style={styles.modbutton}   onPress={()=> setvisible(!visiable)} > 
                    <Text> close </Text> 
                    </TouchableOpacity>
                  

                    </View>    
            </View>
            </Modal>
            <View style={{ flex: 1 , backgroundColor:'#1aff53'}}>
               
                <View style={{flex:1}}></View>
                <View style={{flex:1}}>
                <Text style={styles.title}> Focus On One Thing !</Text>
                </View>
                <View style={{flex:1}}></View>

            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <TextInput style={styles.inputtxt} placeholder="Enter your goal" onChangeText={(value)=>setfocussubject(value)}></TextInput>
                </View>
                <View>
                  
                </View>

            </View >
           
            <View style={{ flex: 0.5, flexDirection: "row" }} >
                <View style={{ flex: 1 }}></View>
                <View style={{ flex: 1 ,backgroundColor:'#1aff53',alignItems:'center',justifyContent:"center"}}> 
                <TouchableOpacity  style={styles.button}  onPress={onp} >
                    <Text style={styles.txt}>{gg}</Text>

                    {/* <Button title={isshow ? 'Clear' : 'Submit' }  style={styles.txt}></Button> */}
                </TouchableOpacity></View>
                <View style={{ flex: 1 }}></View>
            </View>
           <View  style={{flex:1}}>  
           {isshow ?
           <Text>{focussubject}</Text>
           : null}
           </View>
   
        </View>



    )


}

const styles = StyleSheet.create({

    button: {

        borderRadius: 70 / 2,
        width: 90,
        height: 60,
        alignItems: 'center',
        borderColor: '#003366',
        borderWidth: 2,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#33cc33'
    },
    txt:{
        fontSize:15,
        fontWeight:'bold',
        

    },
    inputtxt:{
       margin:20,
       borderRadius:60,
       borderBottomEndRadius:60,
       borderTopStartRadius:60,
       borderTopEndRadius:60,
       backgroundColor:'#fff'
    },
    title:{

     alignSelf:'center',
     fontSize:25,
     fontWeight:'bold',
     color:'tomato'
    },


    moddalstyle:{
        margin: 20,
        backgroundColor: "white",
        borderRadius: 30,
        padding: 35,
        alignItems: "center",
        shadowColor: "#ff4",

    },
    modbutton:{

        borderRadius: 70 / 2,
        width: 70,
        height: 70,
        alignItems: 'center',
        borderColor: '#003366',
        borderWidth: 2,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'red',
    }
 

    
})
export default Roundedb;