import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { format } from "date-fns";

import { MoodOptionWithTimestep } from "../types";
import { Colors, Fonts } from "../constants";

type MoodItemProps = {
    item: MoodOptionWithTimestep
}
export const MoodItemRow: React.FC<MoodItemProps> = ({item}) =>{
    return <View style = {styles.moodItem}>
        <View style = {styles.itemIcon}>
            <Text style = {styles.iconImage}>{item.mood.emoji}</Text>
            <Text style = {styles.iconDescription}>{item.mood.description}</Text>
        </View>
        <Text style = {styles.itemDate}>{format(new Date (item.timestap), "hh MMM, yyyy 'at' h:mmaaa")}</Text>

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
    }



})