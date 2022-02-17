import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

const Roundedb = () => {

    return (

        <View>

            <TouchableOpacity style={styles.button}>
                <Text>Press Here</Text>
            </TouchableOpacity>
        </View>
    )


}

const styles = StyleSheet.create({

    button: {

        borderRadius: 125 / 2,
        width: 125,
        height: 125,
        alignItems: 'center',
        borderColor:'red',
        borderWidth:2,
    }
})
export default Roundedb;