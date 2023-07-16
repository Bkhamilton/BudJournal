import { StyleSheet, useColorScheme, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Text, View } from '../../../Themed';
import { useRootNavigationState } from 'expo-router';


interface UserProps {
  fName: string,
  lName: string,
  email: string,
  username: string,
  bear: string,
  bio: string,
}

export default function BioBox ({placeholder, curUserProperty}: {placeholder: string, curUserProperty: UserProps}) {
    const [text, onChangeText] = React.useState(placeholder);
    
    const colorScheme = useColorScheme();
    const boxColor = (colorScheme == 'light' ? "black" : "white");


    const [curUser, setUser] = useState({
      'fName': curUserProperty.fName,
      'lName': curUserProperty.lName,
      'email': curUserProperty.email,
      'username': curUserProperty.username,
      'bear': curUserProperty.bear,
      'bio': curUserProperty.bio,
    });

    const handleChange = (name, text) => {
      setUser({
        ...curUser,
        [name]: text 
      });
    }

    let value = curUser.bio;
    
    return (
      <View style={{backgroundColor: 'transparent'}}>
        <TextInput
          style={[{backgroundColor: 'transparent',color: boxColor, borderColor: boxColor, textAlign: 'justify'}, styles.bioBox]}
          onChangeText={text => handleChange('bio', text)}
          value={value}
          placeholder={placeholder}
          multiline={true}
        />
      </View>
    );
};

const styles = StyleSheet.create({
    bioBox: {
        height: '100%',
        paddingTop: 10,
        paddingHorizontal: 10,
        width: '100%',
    }
});