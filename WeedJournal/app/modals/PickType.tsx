import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, useColorScheme, TextInput, FlatList } from 'react-native';
import React, { useState } from 'react';
import Colors from '../../constants/Colors';
import { Text, View, TouchableOpacity, SafeAreaView, ScrollView, Modal, ColorView } from '../../components/Themed';
import Header from '../../components/Header/Header';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { SpaceGrotesk } from '../../components/StyledText';



export default function PickType({visible, toggle, categories, close}: {visible: boolean, toggle: (props: any) => void}) {
  
  const colorScheme = useColorScheme();

  const outerViewDark = Colors[colorScheme ?? 'light'].modalBackground;
  const outerViewLight = Colors[colorScheme ?? 'dark'].modalBackground;

  const outerBackgroundColor = (colorScheme == 'light' ? outerViewDark : outerViewLight)
  

    return (
      <Modal visible={visible} animationType='fade' presentationStyle='overFullScreen' transparent={true} >
        <TouchableOpacity style={styles.modalContainer} onPress={close}>
            <View style={[{backgroundColor: 'transparent'}, styles.modalPopup]}>
                <FlatList
                    style={{ }}
                    data={categories}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                    <TouchableOpacity style={styles.optionButton} onPress={() => toggle(item)}>
                        <SpaceGrotesk style={styles.title}>{item}</SpaceGrotesk>
                    </TouchableOpacity>
                    )}
                />                                                                    
            </View>
        </TouchableOpacity>
      </Modal>
    );
}


const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    flex: 1,
    alignItems: 'center',
  },
  modalPopup:{
    elevation: 20,
    right: 75,
    top: 50,
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
