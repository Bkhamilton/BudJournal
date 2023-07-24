import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SpaceGrotesk, SpaceGroteskBold } from '../../StyledText';

import { ColorView, Text, TouchableOpacity, View } from '../../Themed';

export default function RecentJournal() {

    const lorenIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    const JournalEntry = () => {
        return (
            <ColorView style={{ paddingHorizontal: 12, paddingVertical: 8, }}>
                <ColorView style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <ColorView>
                        <SpaceGrotesk>June 7, 2023</SpaceGrotesk>
                    </ColorView>
                    <SpaceGrotesk>4:05 pm</SpaceGrotesk>
                </ColorView>
                <SpaceGroteskBold style={{ textAlign: 'center', fontSize: 21, }}>Peach Fuzz</SpaceGroteskBold>
                <ColorView>
                    <SpaceGrotesk>{lorenIpsum}</SpaceGrotesk>
                </ColorView>
                <ColorView style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', gap: 4, paddingTop: 4, }}>
                    <TouchableOpacity style={{ backgroundColor: 'transparent', padding: 2, }}>
                        <Feather name="chevron-left" color="white" size={22}></Feather>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: 'transparent', padding: 2, }}>
                        <Feather name="chevron-right" color="white" size={22}></Feather>
                    </TouchableOpacity>
                </ColorView>
            </ColorView>
        );
    }

    return (
        <View style={styles.container}>
            <SpaceGroteskBold style={styles.title}>Recent Journal Entries</SpaceGroteskBold>
            <TouchableOpacity>
                <JournalEntry/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
},
  newPostButton: {
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 8,
    backgroundColor: 'transparent',
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
});
