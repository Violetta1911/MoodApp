import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AppProvider } from './components/AppProvider';
import { BottomTabsNavigation } from './components/BottomTabsNavigation';

export const App: React.FC = () =>{
  return (
    <AppProvider>
       <NavigationContainer>
         <BottomTabsNavigation/>
       </NavigationContainer>
    </AppProvider>
  
  )
}

