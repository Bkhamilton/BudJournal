import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, useColorScheme, TextInput, FlatList } from 'react-native';
import React, { useState } from 'react';
import Colors from '../../constants/Colors';
import { Text, View, TouchableOpacity, SafeAreaView, ScrollView, Modal, ColorView } from '../../components/Themed';
import Header from '../../components/Header/Header';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { SpaceGrotesk } from '../../components/StyledText';
import JournalEntry from '../../components/Home/JournalEntry/JournalEntry';



export default function ViewJournalEntry({visible, entry, close}: {visible: boolean, entry: {}, close: () => void}) {
  
  const colorScheme = useColorScheme();

  const outerViewDark = Colors[colorScheme ?? 'light'].modalBackground;
  const outerViewLight = Colors[colorScheme ?? 'dark'].modalBackground;

  const outerBackgroundColor = (colorScheme == 'light' ? outerViewDark : outerViewLight)
  

    return (
      <Modal visible={visible} animationType='fade' presentationStyle='overFullScreen' transparent={true} >
        <TouchableOpacity style={styles.modalContainer} onPress={close}>
          <ColorView style={styles.modalPopup}>
            <JournalEntry journal={entry} handleNext={close} handlePrevious={close} short={false}/>
          </ColorView>
        </TouchableOpacity>
      </Modal>
    );
}


const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalPopup:{
    elevation: 20,
    borderWidth: 1,
  },
  title: {
    fontSize: 16,
  },
  optionButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#4dbf4d',
    borderRadius: 8,
  }
});
