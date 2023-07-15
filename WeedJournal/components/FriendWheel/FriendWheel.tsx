import { StyleSheet, Image, useColorScheme } from 'react-native';
import { Text, View, TouchableOpacity } from '../../components/Themed';
import { FontAwesome, } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import toggleState from '../../app/(tabs)/profile'


export default function FriendWheel ({toggleFriendModal, toggleAllFriendsModal} : {toggleFriendModal : () => void, toggleAllFriendsModal : () => void, friendModalVisible : boolean, allFriendsModalVisible : boolean}) {

    const colorScheme = useColorScheme();
    const BackgroundColor = (colorScheme == 'light' ? Colors[colorScheme ?? 'light'].modalBackground : Colors[colorScheme ?? 'dark'].modalBackground);
    const buttonColor = (colorScheme == 'light' ? 'black' : 'white')

    return (
        <View style={[{backgroundColor: BackgroundColor}]}>
              <View style={styles.friendsContainer}>
                <View style={styles.friendsInnerContainer}>
                  <TouchableOpacity onPress={toggleFriendModal} style={{backgroundColor:'transparent'}}>
                    <View style={[styles.friendsButton, {borderColor: buttonColor}]}></View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={toggleFriendModal} style={{backgroundColor:'transparent'}}>
                    <View style={[styles.friendsButton, {borderColor: buttonColor}]}></View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={toggleFriendModal} style={{backgroundColor:'transparent'}}>
                    <View style={[styles.friendsButton, {borderColor: buttonColor}]}></View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={toggleFriendModal} style={{backgroundColor:'transparent'}}>
                    <View style={[styles.friendsButton, {borderColor: buttonColor}]}></View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={toggleFriendModal} style={{backgroundColor:'transparent'}}>
                    <View style={[styles.friendsButton, {borderColor: buttonColor}]}></View>
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
      }
});