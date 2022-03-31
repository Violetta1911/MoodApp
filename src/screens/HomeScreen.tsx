import React from "react";
import { View } from "react-native";
import { MoodPicker } from "../components/MoodPicker";

export const Home: React.FC = ()=>{
    return( 
        <View style={{justifyContent: 'center', flex: 1}}>
            <MoodPicker/>
        </View>
    )
}