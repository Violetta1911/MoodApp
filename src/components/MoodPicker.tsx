import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { Colors, Fonts } from "../constants";
import { MoodOptionType, MoodOptionWithTimestep } from "../types";
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

    const [selectedMood, setSelectedMood] = useState<MoodOptionType>();
    const [hasSelected, setHasSelected] = useState<Boolean>(false);
    
    const imgSrc = require ('../../assets/buterfly.png')

    const onChooseMoodHandler = () =>{
        selectedMood && selectMoodHandler(selectedMood)
        setSelectedMood(undefined)
        setHasSelected(true)
    }
 
    if(hasSelected){
        return<View style = {styles.container}>
              <Image source={imgSrc} style = {styles.image}/>
              <Button title="Choose another" selectedMood={selectedMood} onPress={()=> setHasSelected(false)}/>
        </View>
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
           <Button title = 'choose' onPress={onChooseMoodHandler} selectedMood = {selectedMood}/>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginBottom: 10,
        paddingVertical: 20,
        borderColor: Colors.purple,
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderWidth: 2,
        borderRadius: 15,
        alignItems: 'center',
        },

    header: {
        textAlign: 'center',
        fontSize: 20,
        color: Colors.purple,
        fontFamily: Fonts.fontKalamBold
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
        fontFamily: Fonts.fontKalamBold,
        fontSize: 10,
        color: Colors.purple

    },
    image: {
        width: 50,
        height: 50, 
        alignSelf: 'center', 
        marginVertical: 20}

})