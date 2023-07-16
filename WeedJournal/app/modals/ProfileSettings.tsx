import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, useColorScheme, TextInput } from 'react-native';
import React, { useState } from 'react';
import Colors from '../../constants/Colors';
import { Text, View, TouchableOpacity, SafeAreaView, ScrollView, Modal } from '../../components/Themed';
import Header from '../../components/Header/Header';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import TextBox from '../../components/Profile/ProfileSettings/TextBox/TextBox';
import BioBox from '../../components/Profile/ProfileSettings/BioBox/BioBox';



interface UserProps {
  fName: string,
  lName: string,
  email: string,
  username: string,
  bear: string,
  bio: string,
}

export default function ProfileSettings({visible, toggle, user}: {visible: boolean, toggle: ()=>void, user: UserProps}) {
  
  const colorScheme = useColorScheme();
  const buttonColor = (colorScheme == 'light' ? "black" : "white")
  const innerViewLight = Colors[colorScheme ?? 'light'].modalColorBackground;
  const innerViewDark = Colors[colorScheme ?? 'dark'].modalColorBackground;

  const outerViewDark = Colors[colorScheme ?? 'light'].modalBackground;
  const outerViewLight = Colors[colorScheme ?? 'dark'].modalBackground;


  const backgroundColor = (colorScheme == 'light' ? innerViewDark : innerViewLight);
  const outerBackgroundColor = (colorScheme == 'light' ? outerViewDark : outerViewLight)

  const [curUser, setUser] = useState({
    'fName': user.fName,
    'lName': user.lName,
    'email': user.email,
    'username': user.username,
    'bear': user.bear,
    'bio': user.bio,
  });
  

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
            <View style={[ styles.scrollView]}>

              <View style={[ styles.top, {shadowColor: '#121212'}]}>
                <View style={[ styles.leftBox]}>
                  <TouchableOpacity style={[styles.insertPhotoButton, {borderColor: buttonColor}]}>
                    <MaterialCommunityIcons color={buttonColor} name='image-area' size={125}/>
                    <Text style={styles.insertPhotoButtonText}>Click To Insert Photo</Text>
                  </TouchableOpacity>
                </View>
                <View style={[, styles.rightBox]}>
                  <Text>Username</Text>
                  <TextBox placeholder={curUser.username} property='username' curUserProperty={curUser}/>
                  <Text>First Name</Text>
                  <TextBox placeholder={curUser.fName} property='fName' curUserProperty={curUser}/>
                  <Text>Last Name</Text>
                  <TextBox placeholder={curUser.lName} property='lName' curUserProperty={curUser}/>
                </View>
              </View>
            </View>

            <View style={[styles.middle, {shadowColor: '#121212'}]}>
              <BioBox placeholder={curUser.bio} curUserProperty={curUser}></BioBox>
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
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  insertPhotoButton: {
    width: '90%',
    backgroundColor: 'transparent',
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderRadius: 32,
    margin: '5%',
    paddingBottom: 8,
  },
  insertPhotoButtonText: {
    textAlign: 'center',
    backgroundColor: 'transparent'
  },
  leftBox: {
    //borderWidth: 1,
    paddingBottom: 20,
    paddingTop: 20,
    width: 150,
    backgroundColor: 'transparent'
  },
  rightBox: {
    // left: 150,
    // bottom: 240,
    paddingBottom: 10,
    paddingTop: 10,
    //borderWidth: 1,
    width: 200,
    backgroundColor: 'transparent',
    },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderRadius: 32,
    width: '95%',
    marginTop: 4,
    margin: '2.5%',
    shadowOffset: {width: -8, height: 8},
    shadowOpacity: 0.6,
    shadowRadius: 3,
  },
  middle: {
    height: 150,
    borderWidth: 1,
    borderRadius: 32,
    marginTop: 8,
    width: '95%',
    marginHorizontal: '2.5%',
    shadowOffset: {width: -8, height: 8},
    shadowOpacity: 0.6,
    shadowRadius: 3
  }

});
