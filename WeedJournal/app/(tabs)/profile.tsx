import { StyleSheet, Image, useColorScheme } from 'react-native';
import { useState } from 'react';
import { Text, View, ScrollView, SafeAreaView, TouchableOpacity } from '../../components/Themed';
import Header from '../../components/Header/Header';
import ProfileSettings from '../modals/ProfileSettings';
import { FontAwesome, createMultiStyleIconSet, Entypo } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import FriendWheel from '../../components/FriendWheel/FriendWheel';
import ViewAllFriends from '../modals/VewAllFriends';
import ViewFriend from '../modals/ViewFriend';
import polarBear from '../../assets/images/bears/polarBear.jpg';
import chillBear from '../../assets/images/bears/chillBear.jpg';
import tongueBear from '../../assets/images/bears/tongueBear.jpg';
import snowBear from '../../assets/images/bears/snowBear.jpg';
import broBear from '../../assets/images/bears/broBear.jpg';



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
      bear: 'polarBear',
      bio: 'Do you know what would happen if I suddenly stopped going into work? A business, big enough that it could be listed on the NASDAQ goes belly up, disappears, it CEASES TO EXIST without me.'
    }, {
      fName: 'Leif', 
      lName: "Erickson", 
      username: "LeifTheCopySpleef", 
      email: 'leif.erikson_day@gmail.com', 
      bear: 'polarBear',
      bio: 'No, you clearly dont know who youre talking to. So let me clue you in. I am not in Danger, Skylar. I AM the Danger. A guy opens his door and gets shot and you think that of me? No'
    }, {
      fName: 'Inosuke', 
      lName: "Hashibura", 
      username: "lordInosuke", 
      email: 'lordInosuke@gmail.com', 
      bear: 'polarBear',
      bio: 'I am the one who knocks!!'
    }]
  
  const userNum = Math.random() * users.length;
  const [userProperties, setUser] = useState(users[Math.floor(userNum)]);


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
      <ProfileSettings visible={settingsModal} toggle={toggleSettingsModal} user={userProperties} ></ProfileSettings>
      <ScrollView>

        <ViewAllFriends visible={allFriendsModal} toggle={toggleAllFriendsModal} />
        <ViewFriend visible={friendModal} toggle={toggleFriendModal} user={users[1]}/>

        <View>

            <View style={[{backgroundColor: BackgroundColor}, styles.profileHead]}>
              <Text style={{ width: 350, textAlign: 'center',fontFamily: "Spliffs", fontSize: 30}}>{userProperties.username}</Text>
              <View style={[styles.userImageContainer]}>
                <Image style={styles.userImage} alt='User Image Here' source={chillBear}></Image>
              </View>  
            </View>

            <View style={[{backgroundColor: BackgroundColor},styles.profileInfo]}>
              <View style={[{backgroundColor: BackgroundColor},styles.firstAndLastName]}>
                <Text>{userProperties.fName} {userProperties.lName}</Text>
                <Text style={{paddingTop: 8}}>{userProperties.email}</Text>
              </View>
            </View>
            
            <View style={[{backgroundColor: BackgroundColor},styles.biographySection]}>
              <Text style={{textAlign: 'center'}}> {userProperties.bio} </Text>
            </View>
            <FriendWheel user={userProperties} toggleAllFriendsModal={toggleAllFriendsModal} toggleFriendModal={toggleFriendModal}></FriendWheel>
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
