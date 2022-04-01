import React, {useState} from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants";
import { MoodOptionType } from "../types";
import { Button } from "./Buttons";

const moodOptions: MoodOptionType[]  = [
    {emoji: '😀', description: 'studious'},
    {emoji: '🤔', description: 'pensive'},
    {emoji: '😊', description: 'happy'},
    {emoji: '🥳', description: 'celebratory'},
    {emoji: '😤', description: 'frustraited'},

];

export const MoodPicker: React.FC = ()=>{
    const [selectedMood, setSelectedMood]=React.useState<MoodOptionType>()
    return(
       <View style = {styles.container}>
            <Text style = {styles.header}>How are you right now?</Text>
            <View style={styles.moodOptions}>
                {moodOptions.map((option, i) => <View style = {{alignItems: 'center'}}>
                    <Pressable 
                     key={i} 
                     style = {[styles.moodOption, selectedMood?.emoji===option.emoji && styles.selectedMoodOption]}
                     onPress={()=> setSelectedMood(option)}
                    >
                    <Text style = {styles.emoji}>{option.emoji}</Text>
                    </Pressable>
                {selectedMood?.description === option.description && <Text style = {styles.descriptionText}>{option.description}</Text>}
            </View>
                )}
            </View>
           <Button/>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        paddingVertical: 20,
        borderColor: Colors.purple,
        borderWidth: 2,
        borderRadius: 15,
        alignItems: 'center',
        },

    header: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.purple,
     },

    moodOptions: {
        flexDirection: "row",
        justifyContent: 'space-around',
        marginVertical: 20,
    },

    moodOption:{
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    selectedMoodOption:{
        borderColor: Colors.white,
        borderWidth: 2,
        backgroundColor: Colors.purple
    },
    emoji:{
        fontSize: 24
    },
    descriptionText:{
        fontWeight: 'bold',
        fontSize: 10,
        color: Colors.purple

    }
})