import { StyleSheet } from 'react-native';
import { useState } from 'react';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View, ScrollView, SafeAreaView, TouchableOpacity } from '../../components/Themed';
import Header from '../../components/Header/Header';
import ProfileSettings from '../modals/ProfileSettings';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { PreventRemoveContext } from '@react-navigation/native';

export default function ProfileScreen() {
  
  const [isOn, setIsOn]= useState(false);

  const toggleState = () => {
    setIsOn((prevState) => !prevState) 
  }
  
  
  return (
    <SafeAreaView style={styles.container}>
      <Header title='Profile' font='SpaceGrotesk'/>
      <TouchableOpacity style={[styles.settingsLink, styles.settingsButton]} onPress={toggleState}>
        <FontAwesome name='gears' color='black' size={24}></FontAwesome>
      </TouchableOpacity>
      <ProfileSettings visible={isOn} toggle={toggleState}></ProfileSettings>
      <ScrollView>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/profile.tsx" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    position: 'absolute',
    right: 16,
    top: 80
  }
});
