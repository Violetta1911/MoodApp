import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { BottomTabsNavigation } from './screens/BottomTabsNavigation';

export const App: React.FC = () =>{
  return (
   <NavigationContainer>
     <BottomTabsNavigation/>
   </NavigationContainer>
  )
}

