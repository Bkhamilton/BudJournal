import { Image, StyleSheet, useColorScheme } from 'react-native';
import { Modal, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from '../../components/Themed';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import Header from '../../components/Header/Header';
import TextBox from '../../components/TextBox/TextBox';
import Colors from '../../constants/Colors';
import ProfileHeader from '../../components/Profile/ProfileHeader/ProfileHeader';

interface UserProps {
    fName: string,
    lName: string,
    email: string,
    username: string,
    bear: string,
    bio: string,
  }

export default function ViewFriend({visible, toggle, user, bearImage}: {visible: boolean, toggle: ()=>void,  user: UserProps, bearImage: any}) {

    const {fName, lName, username, email, bear, bio} = user;

    const colorScheme = useColorScheme();
    const buttonColor = (colorScheme == 'light' ? "black" : "white")

    const innerViewLight = Colors[colorScheme ?? 'light'].modalColorBackground;
    const innerViewDark = Colors[colorScheme ?? 'dark'].modalColorBackground;
  
    const outerViewDark = Colors[colorScheme ?? 'light'].modalColorBackground;
    const BackgroundColor = (colorScheme == 'light' ? Colors[colorScheme ?? 'light'].modalColorBackground : Colors[colorScheme ?? 'dark'].modalColorBackground);

  
  
    const backgroundColor = (colorScheme == 'light' ? innerViewDark : innerViewLight);
    const outerBackgroundColor = (colorScheme == 'light' ? Colors[colorScheme ?? 'light'].modalColorBackground : Colors[colorScheme ?? 'dark'].modalColorBackground)
  
    
  
    return (
    <Modal visible={visible} animationType='slide' presentationStyle='overFullScreen' transparent={true} >
      <SafeAreaView style={styles.modalContainer}>
        <View style={[{backgroundColor: outerBackgroundColor}, styles.modalPopup]}>
          <Header title={username} font='PsychoFun'>
            <TouchableOpacity style={[styles.settingsLink, styles.settingsButton]} onPress={toggle}>
              <FontAwesome name='close' color={buttonColor} size={24}></FontAwesome>
            </TouchableOpacity>
          </Header>
          <ScrollView style={{backgroundColor: 'transparent'}}>
            <ProfileHeader user={user} bearImage={bearImage}>

            </ProfileHeader>
          </ScrollView>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      height: '80%',
      width: '100%',
      top: '16%',
      bottom: '16%',
      left: '2.5%',
    },
    modalPopup:{
      width: '100%',
      height: '75%',
      elevation: 20,
      borderRadius: 16,
      paddingVertical: 15,
      paddingHorizontal: 15,
      borderWidth: 2,
      top: 120,
      borderBottomWidth: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      
      
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
      backgroundColor: 'rgba(0, 0, 0, 0)',
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
      bioBox: {
        height: 100, 
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
        borderRadius: 100,
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
