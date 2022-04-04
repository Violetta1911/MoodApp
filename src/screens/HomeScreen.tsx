import React from "react";
import {ImageBackground} from "react-native";

// components
import { MoodPicker } from "../components/MoodPicker";
import { useAppContext } from "../components/AppProvider";

const imageUrl = 'https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExOHxibzhqUUtUYUUwWXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
export const Home: React.FC = ()=>{
    const appContext = useAppContext();
  
    return( 
        <ImageBackground source={{uri: imageUrl}} style={{justifyContent: 'center', flex: 1}}>
            <MoodPicker selectMoodHandler = {appContext.selectMoodHandler}/>           
        </ImageBackground>
    )
}