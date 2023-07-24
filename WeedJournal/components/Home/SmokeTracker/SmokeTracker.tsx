import { Feather } from '@expo/vector-icons';
import React from 'react';
import { FlatList, StyleSheet, useColorScheme } from 'react-native';
import { SpaceGrotesk, SpaceGroteskBold } from '../../StyledText';

import { ColorView, ScrollView, Text, TouchableOpacity, View } from '../../Themed';

export default function SmokeTracker() {

    const colorScheme = useColorScheme();

    const borderColor = colorScheme == 'light' ? 'black' : 'white';

    const days = [
      { day: "7/16", count: 2 },
      { day: "7/17", count: 3 },
      { day: "7/18", count: 4 },
      { day: "7/19", count: 3 },
      { day: "7/20", count: 3 },
      { day: "7/21", count: 5 },
      { day: "7/22", count: 3 },
      { day: "7/23", count: 3 },
      { day: "7/24", count: 2 },
      { day: "7/25", count: 3 },
      { day: "7/26", count: 1 },
      { day: "7/27", count: 3 },
      { day: "7/28", count: 3 },
      { day: "7/29", count: 4 },
      { day: "7/30", count: 3 },
      { day: "7/31", count: 6 },
      { day: "8/1", count: 3 },
    ]

    const startIndex = days.findIndex((item) => item.day === "7/24");

    const DayBox = ({day, count} : {day: string, count: number}) => {
        return (
            <TouchableOpacity style={[styles.dayBox, { borderColor: borderColor }]}>
                <SpaceGroteskBold style={{ textAlign: 'center', fontSize: 12, }}>{day}</SpaceGroteskBold>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <SpaceGroteskBold>{count}</SpaceGroteskBold>
                </View>
                <SpaceGrotesk>Target: 2</SpaceGrotesk>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <SpaceGroteskBold style={styles.title}>Smoke Tracker</SpaceGroteskBold>
            <FlatList
              data={days}
              horizontal
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <DayBox 
                  day={item.day}
                  count={item.count}
                />
              )}
              initialScrollIndex={startIndex}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  title: {
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  dayBox: {
    width: 80,
    borderWidth: 1,
    paddingVertical: 4,
  },
});
