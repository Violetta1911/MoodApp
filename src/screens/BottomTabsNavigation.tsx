import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { History } from "./HistoryScreen";
import { Home } from "./HomeScreen";
import { Analytics } from "./AnalyticsScreen";

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigation: React.FC = () => {
    return(
        <BottomTabs.Navigator>
            <BottomTabs.Screen name="Home" component={Home}/>
            <BottomTabs.Screen name="History" component={History}/>
            <BottomTabs.Screen name="Analytics" component={Analytics}/>
        </BottomTabs.Navigator>
    )
}