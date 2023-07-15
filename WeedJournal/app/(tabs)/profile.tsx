import { StyleSheet, Image, useColorScheme } from 'react-native';
import { useState } from 'react';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View, ScrollView, SafeAreaView, TouchableOpacity } from '../../components/Themed';
import Header from '../../components/Header/Header';
import ProfileSettings from '../modals/ProfileSettings';
import { FontAwesome, createMultiStyleIconSet } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { PreventRemoveContext } from '@react-navigation/native';
import { transform } from '@babel/core';
import Colors from '../../constants/Colors';

export default function ProfileScreen() {
  
  const [isOn, setIsOn]= useState(false);

  const toggleState = () => {
    setIsOn((prevState) => !prevState) 
  }

  const updateState = (key, updatedValue) => {
    setUser(prevState => {
      return {
        ...prevState, 
        [key]: updatedValue
      }
    })
  }

  const [userProperties, setUser] = useState({
    'First': 'Kenneth',
    'Last': 'Sullivan',
    'Email': 'kenny.sull18@gmail.com',
    'Username': 'Vmaxman'
  });
  const colorScheme = useColorScheme();
  const outerViewDark = Colors[colorScheme ?? 'light'].modalBackground;
  const outerViewLight = Colors[colorScheme ?? 'dark'].modalBackground;
  const BackgroundColor = (colorScheme == 'light' ? outerViewDark : outerViewLight);

  return (
    <SafeAreaView style={styles.container}>
      <Header title='Profile' font='PsychoFun'>
        <TouchableOpacity style={[styles.settingsLink, styles.settingsButton]} onPress={toggleState}>
          <FontAwesome name='gears' color='black' size={24}></FontAwesome>
        </TouchableOpacity>
      </Header>
      <ProfileSettings visible={isOn} toggle={toggleState} user={userProperties} ></ProfileSettings>
      <ScrollView>
        <View>

            <View style={[{backgroundColor: BackgroundColor}, styles.profileHead]}>
              <Text style={{ width: 350, textAlign: 'center',fontFamily: "Spliffs", fontSize: 30}}>{userProperties.Username}</Text>
              <View style={[styles.userImageContainer]}>
                <Image style={styles.userImage} alt='User Image Here' source={{uri: ''}}></Image>
              </View>  
            </View>

            <View style={[{backgroundColor: BackgroundColor},styles.profileInfo]}>
              <View style={[{backgroundColor: BackgroundColor},styles.firstAndLastName]}>
                  <Text>{userProperties.First} {userProperties.Last}</Text>
                  <Text style={{paddingTop: 8}}>{userProperties.Email}</Text>
              </View>
              <Text></Text>
            </View>

        </View>
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
    right: '8%',
    bottom: '25%',
  },
  userImageContainer: {
    //borderWidth: 1,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  userImage: {
    borderWidth: 1,
    height: 100,
    width: 100,
    borderRadius: '100%',
  },
  profileHead: {
    alignItems: 'center',
    paddingTop: 10,
  },
  firstAndLastName: {
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  profileInfo: {
    //borderWidth: 1,
    paddingTop: 16,

  }
});
