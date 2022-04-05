import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Platform, UIManager } from 'react-native';
import { AppProvider } from './components/AppProvider';
import { BottomTabsNavigation } from './components/BottomTabsNavigation';
import SplashScreen from 'react-native-splash-screen';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
// useEffect(() => {
//   SplashScreen.hide();
// }, []);

export const App: React.FC = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <BottomTabsNavigation />
      </NavigationContainer>
    </AppProvider>
  );
};
