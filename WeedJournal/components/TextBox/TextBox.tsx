import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, useColorScheme, TextInput } from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View, TouchableOpacity, SafeAreaView, ScrollView, Modal } from '../../components/Themed';
import Header from '../../components/Header/Header';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default function CustomTextInput ({placeholder}: {placeholder: string}) {
    const [text, onChangeText] = React.useState(placeholder);
    // const [number, onChangeNumber] = React.useState('');
    
    const colorScheme = useColorScheme();
    const boxColor = (colorScheme == 'light' ? "black" : "white");


    return (
      <SafeAreaView>
        <TextInput
          style={[{color: boxColor, borderColor: boxColor}, styles.inputBox]}
          onChangeText={onChangeText}
          value={text}
        />
        {/* <TextInput
          style={styles.inputBox}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        /> */}
      </SafeAreaView>
    );
  };



const styles = StyleSheet.create({
    inputBox: {
        height: 40,
        borderWidth: 1,
        marginTop: 8,
        padding: 10,
        width: '100%',
    },
});