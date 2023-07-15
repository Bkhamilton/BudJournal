import { StyleSheet, Image, useColorScheme } from 'react-native';
import { useState } from 'react';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View, ScrollView, SafeAreaView, TouchableOpacity } from '../../components/Themed';
import Header from '../../components/Header/Header';
import ProfileSettings from '../modals/ProfileSettings';
import { FontAwesome, createMultiStyleIconSet, Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { PreventRemoveContext } from '@react-navigation/native';
import { transform } from '@babel/core';
import Colors from '../../constants/Colors';
import FriendWheel from '../../components/FriendWheel/FriendWheel';
import ViewAllFriends from '../modals/VewAllFriends';
import ViewFriend from '../modals/ViewFriend';

export default function ProfileScreen() {
  
  const [settingsModal, setSettingsModal]= useState(false);

  const toggleSettingsModal = () => {
    setSettingsModal((prevState) => !prevState) 
  }

  const [friendModal, setFriendModal]= useState(false);

  const toggleFriendModal = () => {
    setFriendModal((prevState) => !prevState) 
  }

  const [allFriendsModal, setAllFriendsModal]= useState(false);

  const toggleAllFriendsModal = () => {
    setAllFriendsModal((prevState) => !prevState) 
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
    'Username': 'Vmaxman',
    'BIO': "1, 2, 3, and to the 4, ken doggy dog and benjamin is at the door. ready to make an entrance so back on up, cause you know we bout to code shit up."
  });


  const colorScheme = useColorScheme();
  const BackgroundColor = (colorScheme == 'light' ? Colors[colorScheme ?? 'light'].modalBackground : Colors[colorScheme ?? 'dark'].modalBackground);
  const buttonColor = (colorScheme == 'light' ? 'black' : 'white')

  return (
    <SafeAreaView style={styles.container}>
      <Header title='Profile' font='PsychoFun'>
        <TouchableOpacity style={[styles.settingsLink, styles.settingsButton]} onPress={toggleSettingsModal}>
          <FontAwesome name='gears' color='black' size={24}></FontAwesome>
        </TouchableOpacity>
      </Header>
      <ProfileSettings visible={false} toggle={toggleSettingsModal} user={userProperties} ></ProfileSettings>
      <ScrollView>

        <ViewAllFriends visible={allFriendsModal} toggle={toggleAllFriendsModal} />
        <ViewFriend visible={friendModal} toggle={toggleFriendModal} />

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
            </View>
            
            <View style={[{backgroundColor: BackgroundColor},styles.biographySection]}>
              <Text style={{textAlign: 'center'}}> {userProperties.BIO} </Text>
            </View>
            <FriendWheel toggleAllFriendsModal={toggleAllFriendsModal} toggleFriendModal={toggleFriendModal}></FriendWheel>
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
    padding: 25,
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
    //borderWidth: 1,
    alignItems: 'center',
    paddingTop: 10,
  },
  firstAndLastName: {
    //borderWidth: 1,
    alignItems: 'center',
    backgroundColor: 'transparent'
    
  },
  profileInfo: {
    //borderWidth: 1,
    paddingTop: 8,
  },
  biographySection: {
    paddingTop: 16,
    alignItems: 'center',
    paddingHorizontal: 32,
  },
});
