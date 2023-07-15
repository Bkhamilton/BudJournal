import { StyleSheet, Image, useColorScheme } from 'react-native';
import { Text, View, TouchableOpacity } from '../../components/Themed';
import { FontAwesome, } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import toggleState from '../../app/(tabs)/profile'
import polarBear from '../../assets/images/bears/polarBear.jpg';
import chillBear from '../../assets/images/bears/chillBear.jpg';
import tongueBear from '../../assets/images/bears/tongueBear.jpg';
import snowBear from '../../assets/images/bears/snowBear.jpg';
import broBear from '../../assets/images/bears/broBear.jpg';

interface UserProps {
    fName: string,
    lName: string,
    email: string,
    username: string,
    bear: string,
    bio: string,
  }


export default function FriendWheel ({toggleFriendModal, toggleAllFriendsModal, user} : {toggleFriendModal : () => void, toggleAllFriendsModal : () => void, friendModalVisible : boolean, allFriendsModalVisible : boolean, user: UserProps}) {

    const colorScheme = useColorScheme();
    const BackgroundColor = (colorScheme == 'light' ? Colors[colorScheme ?? 'light'].modalBackground : Colors[colorScheme ?? 'dark'].modalBackground);
    const buttonColor = (colorScheme == 'light' ? 'black' : 'white')

    return (
        <View style={[{backgroundColor: BackgroundColor}]}>
              <View style={styles.friendsContainer}>
                <View style={styles.friendsInnerContainer}>
                  <TouchableOpacity onPress={toggleFriendModal} style={{backgroundColor:'transparent'}}>
                    <Image style={styles.userImage} alt='User Image Here' source={polarBear}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={toggleFriendModal} style={{backgroundColor:'transparent'}}>
                    <Image style={styles.userImage} alt='User Image Here' source={tongueBear}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={toggleFriendModal} style={{backgroundColor:'transparent'}}>
                    <Image style={styles.userImage} alt='User Image Here' source={broBear}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={toggleFriendModal} style={{backgroundColor:'transparent'}}>
                    <Image style={styles.userImage} alt='User Image Here' source={snowBear}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={toggleFriendModal} style={{backgroundColor:'transparent'}}>
                    <Image style={styles.userImage} alt='User Image Here' source={chillBear}></Image>
                  </TouchableOpacity>
                </View>
                <View style={{backgroundColor: 'transparent'}}>
                  <TouchableOpacity onPress={toggleAllFriendsModal} style={{backgroundColor:'transparent'}}>
                    <FontAwesome name='caret-right' size={36} color={buttonColor} style={styles.friendsLinkButton}/>
                  </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    friendsContainer: {
        borderWidth: 3,
        borderColor: '#0C4A11',
        height: 60,
        width: '90%',
        marginHorizontal: '5%',
        borderRadius: 16,
        marginVertical: '5%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
      },
      friendsInnerContainer: {
        height: 60,
        width: '90%',
        marginHorizontal: '5%',
        borderRadius: 16,
        marginVertical: '5%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
      },
      friendsButton: { 
        width: 36, 
        height: 36, 
        borderWidth: 1, 
        borderColor: 'white',
        borderRadius: '60%'
      },
      friendsLinkButton: {
        width: 36, 
        height: 36,
      },
      userImage: {
        width: 36, 
        height: 36, 
        borderWidth: 1, 
        borderColor: 'white',
        borderRadius: '60%'
      }
});