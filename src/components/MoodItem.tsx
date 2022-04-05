import React, { useCallback } from "react";
import { StyleSheet, View, Text, Pressable, LayoutAnimation } from "react-native";
import { format } from "date-fns";

import { MoodOptionWithTimestep } from "../types";
import { Colors, Fonts } from "../constants";
import { useAppContext } from "./AppProvider";

type MoodItemProps = {
    item: MoodOptionWithTimestep,
}
export const MoodItemRow: React.FC<MoodItemProps> = ({item}) =>{
    const appContext = useAppContext();

    const deleteMoodHandler = useCallback(()=>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
        appContext.deleteMoodHandler(item)

    }, [appContext, item])

    return <View style = {styles.moodItem}>
        <View style = {styles.itemIcon}>
            <Text style = {styles.iconImage}>{item.mood.emoji}</Text>
            <Text style = {styles.iconDescription}>{item.mood.description}</Text>
        </View>
        <Text style = {styles.itemDate}>{format(new Date (item.timestap), "hh MMM, yyyy 'at' h:mmaaa")}</Text>
        <Pressable onPress={deleteMoodHandler}>
            <Text style={styles.deleteBtn}>Delete</Text>
        </Pressable>

    </View>
}

const styles = StyleSheet.create({
    moodItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'white'
        },
    itemIcon: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconImage: {
        fontSize: 40,
        marginRight: 10,
    },
    iconDescription: {
        fontSize: 13,
        fontFamily: Fonts.fontKalamBold,
        color: Colors.purple
    },
    itemDate:{
        color: Colors.lavender,
        fontFamily: Fonts.fontKalamRegular
    },
    deleteBtn:{
        color: Colors.blue,
        fontFamily: Fonts.fontKalamBold
    }



})