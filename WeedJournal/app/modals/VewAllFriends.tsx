import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Modal, SafeAreaView, Text, TouchableOpacity, View } from '../../components/Themed';
import { FontAwesome } from '@expo/vector-icons';
import Header from '../../components/Header/Header';
import React from 'react';

export default function ViewAllFriends({visible, toggle}: {visible: boolean, toggle: ()=>void}) {
  
  
    return (
    <Modal visible={visible} animationType='slide' style={styles.container}>
        <SafeAreaView>
            
            <View>
                <TouchableOpacity style={[styles.settingsLink, styles.settingsButton]} onPress={toggle}>
                    <FontAwesome name='close' color='black' size={24}></FontAwesome>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  settingsButton: {
    backgroundColor: 'transparent',
  },
  settingsLink: {
    left: 400,
    top: 30,
  }
});
