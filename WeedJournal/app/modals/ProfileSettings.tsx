import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, useColorScheme } from 'react-native';
import Colors from '../../constants/Colors';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View, TouchableOpacity, SafeAreaView, ScrollView, Modal } from '../../components/Themed';
import ModalScreen from '../modal';
import Header from '../../components/Header/Header';
import { FontAwesome } from '@expo/vector-icons';
import ProfileScreen from '../(tabs)/profile';


export default function ProfileSettings({visible, toggle}: {visible: boolean, toggle: ()=>void}) {
  const colorScheme = useColorScheme();
  const buttonColor = (colorScheme == 'light' ? "black" : "white")
  return (
    <Modal visible={visible} animationType='fade' presentationStyle='overFullScreen' transparent={true} >
    <SafeAreaView style={styles.modalContainer}>
      <View style={styles.modalPopup}>
        <Header title='Profile Settings' font='SpaceGrotesk'/>
        <TouchableOpacity style={[styles.settingsLink, styles.settingsButton]} onPress={toggle}>
          <FontAwesome name='close' color={buttonColor} size={24}></FontAwesome>
        </TouchableOpacity>
        <ScrollView>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="app/(tabs)/newPost.tsx" />
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
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
