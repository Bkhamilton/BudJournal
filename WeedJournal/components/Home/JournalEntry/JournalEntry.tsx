import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet } from 'react-native';
import { truncateString } from '../../Helpers/stringParse';
import { SpaceGrotesk, SpaceGroteskBold } from '../../StyledText';
import { Text, TouchableOpacity, View, ColorView } from '../../Themed';

export default function JournalEntry({ journal, handlePrevious, handleNext, short }) {

    const {date, time, title, entry} = journal;

    const journalEntry = short ? truncateString(entry, 360) : entry;

    return (
        <ColorView style={{ paddingHorizontal: 12, paddingVertical: 8 }}>
            <ColorView style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <ColorView>
                    <SpaceGrotesk>{date}</SpaceGrotesk>
                </ColorView>
                <SpaceGrotesk>{time}</SpaceGrotesk>
            </ColorView>
            <SpaceGroteskBold style={{ textAlign: 'center', fontSize: 21, }}>{title}</SpaceGroteskBold>
            {short && (
              <ColorView style={{ height: 140, }}>
                <SpaceGrotesk>{journalEntry}</SpaceGrotesk>
              </ColorView>
            )}
            {!short && (
              <ColorView>
                <SpaceGrotesk>{journalEntry}</SpaceGrotesk>
              </ColorView>
            )}
            {short && (
              <ColorView style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', gap: 4, paddingTop: 4, }}>
                <TouchableOpacity style={{ backgroundColor: 'transparent', padding: 2, }} onPress={handlePrevious}>
                    <Feather name="chevron-left" color="white" size={22}></Feather>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'transparent', padding: 2, }} onPress={handleNext}>
                    <Feather name="chevron-right" color="white" size={22}></Feather>
                </TouchableOpacity>
              </ColorView>
            )}
        </ColorView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
    gap: 16,
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
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
