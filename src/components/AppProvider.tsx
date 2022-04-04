import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import {MoodOptionType, MoodOptionWithTimestep} from '../types';

type AppData = {
    moodList: MoodOptionWithTimestep[],
}

type AppContextType = {
    moodList: MoodOptionWithTimestep[],
    selectMoodHandler: (mood: MoodOptionType) => void
}

const dataKey = 'my-app-data'; 

const setAppData = async (appData: AppData) => {
    try {
        await AsyncStorage.setItem(dataKey, JSON.stringify(appData));
    } catch  (e){
        console.log(e)
    }
}

const getAppData = async (): Promise<AppData | null> => {
    try {
        const result = await AsyncStorage.getItem(dataKey);
        if(result){
            return JSON.parse(result)
        }
    } catch  (e){
        console.log(e)
    }
    return null
}



const AppContext = createContext<AppContextType>({
   moodList: [],
   selectMoodHandler: ()=>{}
}); 

export const AppProvider: React.FC = ({children}) => {
    const [moodList, setMoodList] = useState<MoodOptionWithTimestep[]>([])

    useEffect(()=>{
        const fetchAppData = async () => {
            const data = await getAppData();
            if (data) {
                setMoodList(data.moodList) 
            }
        }
        fetchAppData();
    }, [])

    const selectMoodHandler = useCallback((mood: MoodOptionType) => {
        setMoodList((current) => {
           const newMoodList = [
               ...current,
               {mood, timestap: Date.now()}
            ];
            setAppData({moodList: newMoodList})
            return newMoodList;
        });
    }, [])

    return( <AppContext.Provider value={{moodList, selectMoodHandler}}>
             {children}
           </AppContext.Provider>
           )
}

export const useAppContext = () => useContext(AppContext)