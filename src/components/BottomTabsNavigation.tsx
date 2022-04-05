import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { History } from '../screens/HistoryScreen';
import { Home } from '../screens/HomeScreen';
import { Analytics } from '../screens/AnalyticsScreen';
import { AnaliticsIcon, HistoryIcon, HomeIcon } from '../components/Icons';
import { Colors, Fonts } from '../constants';
import { Text } from 'react-native';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigation: React.FC = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        headerTitleStyle: {
          fontFamily: Fonts.fontKalamBold,
        },
        tabBarActiveTintColor: Colors.blue,
        tabBarInactiveTintColor: Colors.grey,
        tabBarShowLabel: false,
        tabBarIcon: ({ color }) => {
          if (route.name === 'Home') {
            return <HomeIcon color={color} size={20} />;
          }
          if (route.name === 'History') {
            return <HistoryIcon color={color} size={20} />;
          }

          if (route.name === 'Analytics') {
            return <AnaliticsIcon color={color} size={20} />;
          }
          return <Text>{route.name}</Text>;
        },
      })}>
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{ title: "Today's moods" }}
      />
      <BottomTabs.Screen
        name="History"
        component={History}
        options={{ title: 'Past moods' }}
      />
      <BottomTabs.Screen
        name="Analytics"
        component={Analytics}
        options={{ title: 'Fancy Charts' }}
      />
    </BottomTabs.Navigator>
  );
};
