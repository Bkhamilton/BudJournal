import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, useColorScheme, TextInput } from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View, TouchableOpacity, SafeAreaView, ScrollView, Modal } from '../../components/Themed';
import Header from '../../components/Header/Header';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default function TextBox ({placeholder, value}: {placeholder: string, value: string}) {
    const [text, onChangeText] = React.useState(placeholder);
    const [number, onChangeNumber] = React.useState('');
    
    const colorScheme = useColorScheme();
    const boxColor = (colorScheme == 'light' ? "black" : "white");
    const innerViewLight = Colors[colorScheme ?? 'light'].modalColorBackground;
    const innerViewDark = Colors[colorScheme ?? 'dark'].modalColorBackground;
    const backgroundColor = (colorScheme == 'light' ? innerViewDark : innerViewLight); 

    return (
      <View style={{backgroundColor: 'transparent'}}>
        <TextInput
          style={[{backgroundColor: 'transparent',color: boxColor, borderColor: boxColor}, styles.inputBox]}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
        />
        {/* <TextInput
          style={[{color: boxColor, borderColor: boxColor}, styles.inputBox]}
          onChangeText={onChangeNumber}
          value={number}
          placeholder={placeholder}
        /> */}
      </View>
    );
  };

  export function BioBox ({placeholder, value}: {placeholder: string, value: string}) {
    const [text, onChangeText] = React.useState(placeholder);
    const [number, onChangeNumber] = React.useState('');
    
    const colorScheme = useColorScheme();
    const boxColor = (colorScheme == 'light' ? "black" : "white");
    const innerViewLight = Colors[colorScheme ?? 'light'].modalColorBackground;
    const innerViewDark = Colors[colorScheme ?? 'dark'].modalColorBackground;
    const backgroundColor = (colorScheme == 'light' ? innerViewDark : innerViewLight); 

    return (
      <View style={{backgroundColor: 'transparent'}}>
        <TextInput
          style={[{backgroundColor: 'transparent',color: boxColor, borderColor: boxColor, textAlign: 'left'}, styles.bioBox]}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          multiline={true}
        />
      </View>
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
    bioBox: {
        height: 100,
        borderWidth: 1,
        marginTop: 8,
        padding: 10,
        width: '100%',
    }
});