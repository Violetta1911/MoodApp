import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Platform, UIManager } from 'react-native';
import { AppProvider } from './components/AppProvider';
import { BottomTabsNavigation } from './components/BottomTabsNavigation';

if (Platform.OS === 'android') {
  if(UIManager.setLayoutAnimationEnabledExperimental){
    UIManager.setLayoutAnimationEnabledExperimental(true)
  }
}

export const App: React.FC = () =>{
  return (
    <AppProvider>
       <NavigationContainer>
         <BottomTabsNavigation/>
       </NavigationContainer>
    </AppProvider>
  
  )
}

