import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { SpaceGrotesk, SpaceGroteskBold } from '../../StyledText';

import { ColorView, ScrollView, Text, TouchableOpacity, View } from '../../Themed';

export default function SmokeTracker() {

    const colorScheme = useColorScheme();

    const borderColor = colorScheme == 'light' ? 'black' : 'white';

    const DayBox = ({day, count} : {day: string, count: number}) => {
        return (
            <TouchableOpacity style={[styles.dayBox, { borderColor: borderColor }]}>
                <SpaceGroteskBold style={{ textAlign: 'center', fontSize: 12, }}>{day}</SpaceGroteskBold>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <SpaceGroteskBold>{count}</SpaceGroteskBold>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <SpaceGroteskBold style={styles.title}>Smoke Tracker</SpaceGroteskBold>
            <ScrollView
                horizontal
            >
                <DayBox day="7/20" count={3}/>
                <DayBox day="7/21" count={2}/>
                <DayBox day="7/22" count={4}/>
                <DayBox day="7/23" count={3}/>
                <DayBox day="7/24" count={2}/>
                <DayBox day="7/25" count={5}/>
                <DayBox day="7/26" count={5}/>
                <DayBox day="7/27" count={2}/>
                <DayBox day="7/28" count={3}/>
                <DayBox day="7/29" count={2}/>
                <DayBox day="7/30" count={3}/>
                <DayBox day="7/31" count={2}/>                                                                                    
            </ScrollView>
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
