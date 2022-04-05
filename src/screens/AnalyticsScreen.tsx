import { groupBy } from 'lodash';
import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { VictoryPie } from 'victory-native';
import { useAppContext } from '../components/AppProvider';
import { Colors } from '../constants';

export const Analytics: React.FC = () => {
  const appContext = useAppContext();

  const data = Object.entries(groupBy(appContext.moodList, 'mood.emoji')).map(
      ([key, value]) => ({
          x: key,
          y: value.length
      })
  )
  return (
    <View style = {styles.container}>
      <Text>Analytics</Text>
      <VictoryPie
        labelRadius={80}
        radius={150}
        innerRadius={50}
        colorScale={[
          Colors.blue,
          Colors.grey,
          Colors.lavender,
          Colors.purple,
          Colors.white,
        ]}
        style={{ labels: { fontSize: 30 } }}
        data={data}></VictoryPie>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})