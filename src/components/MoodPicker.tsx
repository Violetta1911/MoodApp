import React from "react";
import { StyleSheet, Text, View } from "react-native";

const moodOptions = [
    {emoji: '', description: 'studious'},
    {emoji: '', description: 'pensive'},
    {emoji: '', description: 'happy'},
    {emoji: '', description: 'celebratory'},
    {emoji: '', description: 'frustraited'},

];

export const MoodPicker: React.FC = ()=>{
    return(
        <View style={styles.container}>
            {moodOptions.map((option, i) => <Text key={i}>{option.description}</Text>)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignSelf: 'center',
        justifyContent: 'space-between'
    }
})