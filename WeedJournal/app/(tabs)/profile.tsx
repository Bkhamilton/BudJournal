import { StyleSheet, Image, useColorScheme } from 'react-native';
import { useState } from 'react';
import { Text, View, ScrollView, SafeAreaView, TouchableOpacity } from '../../components/Themed';
import Header from '../../components/Header/Header';
import ProfileSettings from '../modals/ProfileSettings';
import { FontAwesome } from '@expo/vector-icons';
import FriendWheel from '../../components/FriendWheel/FriendWheel';
import ViewAllFriends from '../modals/VewAllFriends';
import ViewFriend from '../modals/ViewFriend';
import polarBear from '../../assets/images/bears/polarBear.jpg';
import chillBear from '../../assets/images/bears/chillBear.jpg';
import tongueBear from '../../assets/images/bears/tongueBear.jpg';
import snowBear from '../../assets/images/bears/snowBear.jpg';
import broBear from '../../assets/images/bears/broBear.jpg';
import ProfileHeader from '../../components/Profile/ProfileHeader/ProfileHeader';



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
    email: 'kenny.sull18@gmail.com',
    bear: 'polarBear', 
    bio: '1, 2, 3, and to the 4, ken doggy dog and benjamin is at the door. ready to make an entrance so back on up, cause you know we bout to code shit up.'},
    {
      fName: 'Ben', 
      lName: "Hamilton", 
      username: "benkhamilton", 
      email: 'bkhamilton310@gmail.com',
      bear: 'chillBear', 
      bio: "Who are you talking to you right now? Who is it you think you see? Do you know how much I make in a year? I mean, even if I told you, you wouldnt believe it."
    }, {
      fName: 'Todd', 
      lName: "Furple", 
      username: "CrackleSpack", 
      email: 'tfurple@gmail.com', 
      bear: 'tongueBear',
      bio: 'Do you know what would happen if I suddenly stopped going into work? A business, big enough that it could be listed on the NASDAQ goes belly up, disappears, it CEASES TO EXIST without me.'
    }, {
      fName: 'Leif', 
      lName: "Erickson", 
      username: "LeifTheCopySpleef", 
      email: 'leif.erikson_day@gmail.com', 
      bear: 'broBear',
      bio: 'No, you clearly dont know who youre talking to. So let me clue you in. I am not in Danger, Skylar. I AM the Danger. A guy opens his door and gets shot and you think that of me? No'
    }, {
      fName: 'Inosuke', 
      lName: "Hashibura", 
      username: "lordInosuke", 
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
  const buttonColor = (colorScheme == 'light' ? 'black' : 'white')

  return (
    <SafeAreaView style={styles.container}>
      <Header title='Profile' font='PsychoFun'>
        <TouchableOpacity style={[styles.settingsLink, styles.transparentBackground]} onPress={toggleSettingsModal}>
          <FontAwesome name='gears' color={buttonColor} size={24}></FontAwesome>
        </TouchableOpacity>
      </Header>
      <ProfileSettings visible={settingsModal} toggle={toggleSettingsModal} user={userProperties} ></ProfileSettings>
      <ScrollView>

        <ViewAllFriends visible={allFriendsModal} toggle={toggleAllFriendsModal} />
        <ViewFriend visible={friendModal} toggle={toggleFriendModal} user={tempFriend} bearImage={bearImages[tempFriend.bear]}/>

        <View style={styles.transparentBackground}>
          <ProfileHeader user={userProperties} bearImage={bearImages[userProperties.bear]}>
            <Text style={{ width: 350, textAlign: 'center',fontFamily: "Spliffs", fontSize: 30}}>{userProperties.username}</Text>
          </ProfileHeader>
          <FriendWheel toggleAllFriendsModal={toggleAllFriendsModal} toggleFriendModal={openFriendModal} user={userProperties} bears={bearImages} users={users}></FriendWheel>
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
  transparentBackground: {
    backgroundColor: 'transparent',
  },
  settingsLink: {
    position: 'absolute',
    right: '8%',
    bottom: '25%',
  },
});
