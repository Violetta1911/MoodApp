import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Colors, Fonts } from "../constants";
import { MoodOptionType } from "../types";

type ButtonProps = {
    title: string,
    onPress: () => void,
}

export const Button: React.FC<ButtonProps> = ({title, onPress}) =>{
    return  <Pressable style = {styles.button} onPress={onPress}><Text style = {styles.buttonText}>{title.toUpperCase()}</Text></Pressable>
} 

const styles = StyleSheet.create({
    button:{
        width: 200,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: Colors.purple
        
    },
    buttonText: {
        color: Colors.white,
        textAlign: 'center', 
        fontFamily: Fonts.fontKalamRegular
        
    }
})