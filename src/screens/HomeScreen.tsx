import React, {useCallback, useState} from "react";
import { View } from "react-native";

// components
import { MoodPicker } from "../components/MoodPicker";
import { MoodOptionWithTimestep, MoodOptionType } from "../types";
import { MoodItemRow } from "../components/MoodItem";

export const Home: React.FC = ()=>{
    const [moodList, setMoodList] = useState<MoodOptionWithTimestep[]>([])

    const selectMoodHandler = useCallback((mood: MoodOptionType) => {
        setMoodList((current) => [...current, {mood, timestap: Date.now()}])
    }, [])

    return( 
        <View style={{justifyContent: 'center', flex: 1}}>
            <MoodPicker selectMoodHandler = {selectMoodHandler}/>
            {moodList.map(item => <MoodItemRow key = {item.timestap} item = {item}/>)}
        </View>
    )
}