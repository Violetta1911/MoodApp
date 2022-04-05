import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { Colors, Fonts } from '../constants';
import { MoodOptionType } from '../types';

const ReanimatedButton = Reanimated.createAnimatedComponent(Pressable);

type ButtonProps = {
  title: string;
  onPress: () => void;
  selectedMood: MoodOptionType | undefined;
};

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  selectedMood,
}) => {
  const buttonStyle = useAnimatedStyle(
    () => ({
      opacity: selectedMood ? withTiming(1) : withTiming(0.5),
      transform: [{ scale: selectedMood ? withTiming(1) : 0.8 }],
    }),
    [selectedMood],
  );

  return (
    <ReanimatedButton style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={styles.buttonText}>{title.toUpperCase()}</Text>
    </ReanimatedButton>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 200,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: Colors.purple,
  },
  buttonText: {
    color: Colors.white,
    textAlign: 'center',
    fontFamily: Fonts.fontKalamRegular,
  },
});
