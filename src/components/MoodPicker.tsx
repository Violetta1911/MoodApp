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

type MoodPickerProps = {
    selectMoodHandler: (moodOption: MoodOptionType) => void,
}

export const MoodPicker: React.FC<MoodPickerProps> = ({selectMoodHandler})=>{

    const [selectedMood, setSelectedMood] = useState<MoodOptionType>()

    const onChooseMoodHandler = () =>{
        selectedMood && selectMoodHandler(selectedMood)
        setSelectedMood(undefined)
    }
    return(
       <View style = {styles.container}>
            <Text style = {styles.header}>How are you right now?</Text>
            <View style={styles.moodOptions}>
                {moodOptions.map((option) => <View  key = {option.emoji} style = {{alignItems: 'center'}}>
                    <Pressable  
                     style = {[styles.moodOption, selectedMood?.emoji===option.emoji && styles.selectedMoodOption]}
                     onPress={()=> setSelectedMood(option)}                        
                    >
                    <Text style = {styles.emoji}>{option.emoji}</Text>
                    </Pressable>
                {selectedMood?.description === option.description && <Text style = {styles.descriptionText}>{option.description}</Text>}
            </View>
                )}
            </View>
           <Button title = 'choose' onPress={onChooseMoodHandler}/>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginBottom: 10,
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
        justifyContent: 'space-between',
        marginVertical: 30,
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