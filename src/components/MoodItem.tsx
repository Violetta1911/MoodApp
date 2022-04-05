import React, { useCallback } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  LayoutAnimation,
} from 'react-native';
import { format } from 'date-fns';
import { PanGestureHandler } from 'react-native-gesture-handler';

import { MoodOptionWithTimestep } from '../types';
import { Colors, Fonts } from '../constants';
import { useAppContext } from './AppProvider';
import Reanimated, {
  event,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type MoodItemProps = {
  item: MoodOptionWithTimestep;
};
export const MoodItemRow: React.FC<MoodItemProps> = ({ item }) => {
  const appContext = useAppContext();
  const translateX = useSharedValue(0);
  const maxSwipe = 80;

  const deleteMoodHandler = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    appContext.deleteMoodHandler(item);
  }, [appContext, item]);

  const deleteWithDelay = useCallback(() => {
    setTimeout(() => {
      deleteMoodHandler();
    }, 500);
  }, [deleteMoodHandler]);

  const onGestureEvent = useAnimatedGestureHandler(
    {
      onActive: event => {
        translateX.value = event.translationX;
      },
      onEnd: event => {
        if (Math.abs(event.translationX) > maxSwipe) {
          translateX.value = withTiming(1000 * Math.sign(event.translationX));
          runOnJS(deleteWithDelay)();
        } else {
          translateX.value = withTiming(0);
        }
      },
    },
    [],
  );
  const cardStyle = useAnimatedStyle(
    () => ({
      transform: [{ translateX: translateX.value }],
    }),
    [],
  );

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Reanimated.View style={[styles.moodItem, cardStyle]}>
        <View style={styles.itemIcon}>
          <Text style={styles.iconImage}>{item.mood.emoji}</Text>
          <Text style={styles.iconDescription}>{item.mood.description}</Text>
        </View>
        <Text style={styles.itemDate}>
          {format(new Date(item.timestap), "hh MMM, yyyy 'at' h:mmaaa")}
        </Text>
        <Pressable onPress={deleteMoodHandler}>
          <Text style={styles.deleteBtn}>Delete</Text>
        </Pressable>
      </Reanimated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  moodItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  itemIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconImage: {
    fontSize: 40,
    marginRight: 10,
  },
  iconDescription: {
    fontSize: 13,
    fontFamily: Fonts.fontKalamBold,
    color: Colors.purple,
  },
  itemDate: {
    color: Colors.lavender,
    fontFamily: Fonts.fontKalamRegular,
  },
  deleteBtn: {
    color: Colors.blue,
    fontFamily: Fonts.fontKalamBold,
  },
});
