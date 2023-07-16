import { StyleSheet, Image, useColorScheme } from 'react-native';
import { Text, View, TouchableOpacity } from '../../Themed';
import { FontAwesome, } from '@expo/vector-icons';

import Colors from '../../../constants/Colors';

interface UserProps {
    fName: string,
    lName: string,
    email: string,
    username: string,
    bear: string,
    bio: string,
  }


export default function FriendWheel ({toggleFriendModal, toggleAllFriendsModal, user, bears, users} : {toggleFriendModal : (index: number) => void, toggleAllFriendsModal : () => void, user: UserProps, bears: any, users: any[],}) {

    const colorScheme = useColorScheme();
    const BackgroundColor = (colorScheme == 'light' ? Colors[colorScheme ?? 'light'].modalBackground : Colors[colorScheme ?? 'dark'].modalBackground);
    const buttonColor = (colorScheme == 'light' ? 'black' : 'white')

    return (
        <View style={[{backgroundColor: BackgroundColor}]}>
              <View style={styles.friendsContainer}>
                <View style={styles.friendsInnerContainer}>
                  {users.map((curUser, index) => (
                    <TouchableOpacity key={index} onPress={() => toggleFriendModal(curUser)} style={{backgroundColor:'transparent'}}>
                      <Image style={styles.userImage} alt='User Image Here' source={bears[curUser.bear]}></Image>
                    </TouchableOpacity>
                  ))}
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
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        shadowOffset: {width: -8, height: 8},
        shadowOpacity: 0.6,
        shadowRadius: 3
      },
      friendsInnerContainer: {
        height: 66,
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
        borderRadius: 100,
      },
      friendsLinkButton: {
        width: 36, 
        height: 36,
      },
      userImage: {
        width: 44, 
        height: 44, 
        borderWidth: 1, 
        borderColor: 'white',
        borderRadius: 100,
      }
});