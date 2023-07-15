import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, useColorScheme, TextInput } from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View, TouchableOpacity, SafeAreaView, ScrollView, Modal } from '../../components/Themed';
import ModalScreen from '../modal';
import Header from '../../components/Header/Header';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import ProfileScreen from '../(tabs)/profile';
import CustomTextInput from '../../components/TextBox/TextBox'
import TextBox from '../../components/TextBox/TextBox';





export default function ProfileSettings({visible, toggle}: {visible: boolean, toggle: ()=>void}) {
  const colorScheme = useColorScheme();
  const buttonColor = (colorScheme == 'light' ? "white" : "white")
  const innerViewLight = Colors[colorScheme ?? 'light'].modalColorBackground;
  const innerViewDark = Colors[colorScheme ?? 'dark'].modalColorBackground;

  const outerViewDark = Colors[colorScheme ?? 'light'].modalBackground;
  const outerViewLight = Colors[colorScheme ?? 'dark'].modalBackground;


  const backgroundColor = (colorScheme == 'light' ? innerViewDark : innerViewLight);
  const outerBackgroundColor = (colorScheme == 'light' ? outerViewDark : outerViewLight)
    return (
      <Modal visible={visible} animationType='fade' presentationStyle='overFullScreen' transparent={true} >
      <SafeAreaView style={styles.modalContainer}>
        <View style={[{backgroundColor: outerBackgroundColor}, styles.modalPopup]}>
          <Header title='Profile Settings' font='PsychoFun'>
            <TouchableOpacity style={[styles.settingsLink, styles.settingsButton]} onPress={toggle}>
              <FontAwesome name='close' color={buttonColor} size={24}></FontAwesome>
            </TouchableOpacity>
          </Header>
          <ScrollView>
            <View style={[{backgroundColor: backgroundColor}, styles.scrollView]}>
              <View style={[{backgroundColor: backgroundColor}, styles.leftBox]}>
                <TouchableOpacity style={[styles.insertPhotoButton, {borderColor: buttonColor}]}>
                  <MaterialCommunityIcons color={buttonColor} name='image-area' size={125}/>
                  <Text style={styles.insertPhotoButtonText}>Click To Insert Photo</Text>
                </TouchableOpacity>
              </View>
              <View style={[{backgroundColor: backgroundColor}, styles.rightBox]}>
                <Text>Username</Text>
                <TextBox placeholder='Enter Username'/>
                <Text>First Name</Text>
                <TextBox placeholder='Enter First Name'/>
                <Text>Last Name</Text>
                <TextBox placeholder='Enter Last Name'/>
              </View>
            </View>
            </ScrollView>
        </View>
      </SafeAreaView>
      </Modal>
    );
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: '60%',
    width: '95%',
    top: '16%',
    bottom: '16%',
    left: '2.5%',
  },
  modalPopup:{
    width: '90%',
    height: '80%',
    elevation: 20,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
  },
  modalBackground: {
    backgroundColor: 'transparent'
  },
  settingsButton: {
    backgroundColor: 'transparent',
  },
  settingsLink: {
    position: 'absolute',
    right: 16,
    top: 20
  },
  scrollView: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  insertPhotoButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  insertPhotoButtonText: {
    textAlign: 'center',
  },
  leftBox: {
    borderWidth: 1,
    paddingBottom: 20,
    paddingTop: 20,
    width: 139,
    padding: 3,
  },
  rightBox: {
    // left: 150,
    // bottom: 240,
    paddingBottom: 10,
    paddingTop: 10,
    borderWidth: 1,
    width: 200,
    },
  
});
