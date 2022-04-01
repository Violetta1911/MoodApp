import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../constants";

export const Button: React.FC = () =>{
    return  <Pressable style = {styles.button} onPress={()=>{}}><Text style = {styles.buttonText}>Choose</Text></Pressable>
} 

const styles = StyleSheet.create({
    button:{
        width: 150,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: Colors.purple
    },
    buttonText: {
        color: Colors.white,
        textAlign: 'center', 
        
    }
})