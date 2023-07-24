import { StyleSheet, Image, useColorScheme, Platform } from 'react-native';
import { useState } from 'react';
import { Text, View, ScrollView, SafeAreaView, TouchableOpacity, ColorView } from '../../components/Themed';
import Header from '../../components/Header/Header';
import ProfileSettings from '../modals/ProfileSettings';
import { FontAwesome } from '@expo/vector-icons';
import FriendWheel from '../../components/Profile/FriendWheel/FriendWheel';
import ViewAllFriends from '../modals/VewAllFriends';
import ViewFriend from '../modals/ViewFriend';
import polarBear from '../../assets/images/bears/polarBear.jpg';
import chillBear from '../../assets/images/bears/chillBear.jpg';
import tongueBear from '../../assets/images/bears/tongueBear.jpg';
import snowBear from '../../assets/images/bears/snowBear.jpg';
import broBear from '../../assets/images/bears/broBear.jpg';
import ProfileHeader from '../../components/Profile/ProfileHeader/ProfileHeader';
import EditScreenInfo from '../../components/EditScreenInfo';
import React from 'react';



export default function ProfileScreen() {
  
  //Refernce Bear Images Through this object (ex: [bearImages["polarBear"]])
  const bearImages = {
    polarBear,
    chillBear,
    broBear,
    tongueBear,
    snowBear
  }

  const users = [{
    fName: 'Kenneth',
    lName: "Sullivan", 
    username: "Vmaxman", 
    followers: 510,
    following: 384,
    email: 'kenny.sull18@gmail.com',
    bear: 'polarBear', 
    bio: '1, 2, 3, and to the 4, ken doggy dog and benjamin is at the door. ready to make an entrance so back on up, cause you know we bout to code shit up.'},
    {
      fName: 'Ben', 
      lName: "Hamilton", 
      username: "benkhamilton",
      followers: 510,
      following: 404, 
      email: 'bkhamilton310@gmail.com',
      bear: 'chillBear', 
      bio: "Who are you talking to you right now? Who is it you think you see? Do you know how much I make in a year? I mean, even if I told you, you wouldnt believe it."
    }, {
      fName: 'Todd', 
      lName: "Furple", 
      username: "CrackleSpack",
      followers: 209,
      following: 842,  
      email: 'tfurple@gmail.com', 
      bear: 'tongueBear',
      bio: 'Do you know what would happen if I suddenly stopped going into work? A business, big enough that it could be listed on the NASDAQ goes belly up, disappears, it CEASES TO EXIST without me.'
    }, {
      fName: 'Leif', 
      lName: "Erickson", 
      username: "LeifTheCopySpleef",
      followers: 397,
      following: 590,  
      email: 'leif.erikson_day@gmail.com', 
      bear: 'broBear',
      bio: 'No, you clearly dont know who youre talking to. So let me clue you in. I am not in Danger, Skylar. I AM the Danger. A guy opens his door and gets shot and you think that of me? No'
    }, {
      fName: 'Inosuke', 
      lName: "Hashibura", 
      username: "lordInosuke",
      followers: 200,
      following: 10,  
      email: 'lordInosuke@gmail.com', 
      bear: 'snowBear',
      bio: 'I am the one who knocks!!'
    }]

  const userNum = Math.random() * users.length;
  const [userProperties, setUser] = useState(users[Math.floor(userNum)]);
  const [tempFriend, setTempFriend] = useState({
    fName: "First",
    lName: "Last",
    username: "Uuser",
    followers: 1,
    following: 1, 
    email: "eep@ap.com",
    bear: "polarBear",
    bio: "Welcome to the Thunderdome"
  })
  const [settingsModal, setSettingsModal]= useState(false);
  const [friendModal, setFriendModal]= useState(false);
  const [allFriendsModal, setAllFriendsModal]= useState(false);

  //Toggle Settings Modal
  const toggleSettingsModal = () => {
    setSettingsModal((prevState) => !prevState) 
  }

  //Toggle Friends Modal
  const toggleFriendModal = () => {
    setFriendModal((prevState) => !prevState);
  }

  //Opens Friend Modal Using Friend as Prop
  const openFriendModal = (props) => {
    setTempFriend(props);
    toggleFriendModal();
  }

  //Toggle All Friends Modal
  const toggleAllFriendsModal = () => {
    setAllFriendsModal((prevState) => !prevState) 
  }
  
  const colorScheme = useColorScheme();
  const buttonColor = (colorScheme == 'light' ? 'black' : 'white');

  let fontSize;

  //Sets Size of Username in Header based off Username Length
  if (userProperties.username.length >= 0 && userProperties.username.length <= 6) {
    fontSize = 26;
  } else if(userProperties.username.length >= 7 && userProperties.username.length <= 8) {
    fontSize = 24;  
  } else if(userProperties.username.length >= 9 && userProperties.username.length <= 10) {
    fontSize = 23;
  } else {
    fontSize = 20;
  }

  return (
    <ColorView style={styles.container}>
      <ProfileSettings visible={settingsModal} toggle={toggleSettingsModal} user={userProperties} ></ProfileSettings>
      <ColorView style={{ height: Platform.OS === 'ios' ? 45 : 9 }}></ColorView>
      <ColorView style={styles.header}>
          <Text style={{ fontFamily: 'PsychoFun', fontSize: fontSize, textAlign: 'center', height: 34 }}>{userProperties.username}</Text>
          <TouchableOpacity style={[styles.settingsLink, styles.transparentBackground]} onPress={toggleSettingsModal}>
            <FontAwesome name='gears' color={buttonColor} size={24}></FontAwesome>
          </TouchableOpacity>
      </ColorView>
      <ScrollView>
            <ViewAllFriends visible={allFriendsModal} toggle={toggleAllFriendsModal} />
            <ViewFriend visible={friendModal} toggle={toggleFriendModal} user={tempFriend} bearImage={bearImages[tempFriend.bear]}/>
        <View style={styles.transparentBackground}>
            <ProfileHeader user={userProperties} bearImage={bearImages[userProperties.bear]}>
              
            </ProfileHeader>

          <View style={styles.profileBody}>
          <FriendWheel toggleAllFriendsModal={toggleAllFriendsModal} toggleFriendModal={openFriendModal} user={userProperties} bears={bearImages} users={users}></FriendWheel>
              <ColorView style={styles.favoritesPanel}>
                <ColorView style={styles.contentPanel} >
                  <Text style={styles.title}>Methods</Text>
                  
                </ColorView>
              </ColorView>

              <View style={styles.recentsHeader}>
                <Text style={styles.title}>All Posts</Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
              </View>
              <View style={styles.postBlock}>
              <View style={styles.panels}>
                  <View style={styles.contentPanel}>
                        
                  </View>
              </View>
              <View style={styles.panels}>
                  <View style={styles.contentPanel}>
                        
                  </View>
              </View>
              </View>
              
          </View>

        </View>
      </ScrollView>
    </ColorView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'transparent',
    paddingHorizontal: 16,
    height: '6%',
    borderBottomColor: 'rgba(255,255,255,0.1)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '70%',
    
  },
  recentsHeader: {
    width: '100%',
    alignItems: 'center'
  },
  postBlock: {
    flexDirection: 'column',

    marginHorizontal: '5%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  transparentBackground: {
    backgroundColor: 'transparent',
  },
  settingsLink: {
    position: 'absolute',
    right: '5%',
  },
  profileBody: {
    marginVertical: '5%',
    backgroundColor: 'transparent',
    gap: 20,
  },
  favoritesPanel: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderWidth: 2,
    width: '90%',
    marginHorizontal: '5%',
    borderRadius: 32,
    shadowOffset: {width: -8, height: 8},
    shadowOpacity: 0.6,
    shadowRadius: 3
  },
  panels: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderWidth: 2,
    width: '90%',
    marginHorizontal: '5%',
    borderRadius: 8,
    shadowOffset: {width: -8, height: 8},
    shadowOpacity: 0.6,
    shadowRadius: 3
  },
  contentPanel: {
    alignItems: 'center',
    marginVertical: 8,
    paddingVertical: 8,
    width: '90%',
    margin: '5%',
  }
});
