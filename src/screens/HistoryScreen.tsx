import React from "react";
import { View } from "react-native";
import { useAppContext } from "../components/AppProvider";
import { MoodItemRow } from "../components/MoodItem";

export const History: React.FC = ()=>{
    const appContext = useAppContext(); 
    return( 
        <View>
            {appContext.moodList.map(item => <MoodItemRow key = {item.timestap} item = {item}/>)}
        </View>
    )
}