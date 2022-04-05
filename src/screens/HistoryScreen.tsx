import React from 'react';
import { ScrollView } from 'react-native';
import { useAppContext } from '../components/AppProvider';
import { MoodItemRow } from '../components/MoodItem';

export const History: React.FC = () => {
  const appContext = useAppContext();
  return (
    <ScrollView>
      {appContext.moodList
        .slice()
        .reverse()
        .map(item => (
          <MoodItemRow key={item.timestap} item={item} />
        ))}
    </ScrollView>
  );
};
