import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Modal, Text, View } from '../../components/Themed';

export default function ViewAllFriends({visible, toggle}: {visible: boolean, toggle: ()=>void}) {
  
  
    return (
    <Modal visible={visible} animationType='slide' style={styles.container}>
      
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
});
