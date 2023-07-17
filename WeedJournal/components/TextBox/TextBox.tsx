import { StyleSheet, useColorScheme, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Text, View } from '../../components/Themed';

interface UserProps {
  fName: string,
  lName: string,
  email: string,
  username: string,
  bear: string,
  bio: string,
}

export default function TextBox ({placeholder, property, curUserProperty}: {placeholder: string, property: string, curUserProperty: UserProps}) {
    
    const [curUser, setUser] = useState({
      'fName': curUserProperty.fName,
      'lName': curUserProperty.lName,
      'email': curUserProperty.email,
      'username': curUserProperty.username,
      'bear': curUserProperty.bear,
      'bio': curUserProperty.bear,
    });


    const handleChange = (name, text) => {
      setUser({
        ...curUser,
        [name]: text 
      });
    }

    const colorScheme = useColorScheme();
    const boxColor = (colorScheme == 'light' ? "black" : "white");
    let value;
    
    if (property == 'fName') {
      value = curUser.fName;
    } else if (property == 'username') {
      value = curUser.username;
    } else if (property == 'lName') {
      value = curUser.lName
    }



    return (
      <View style={{backgroundColor: 'transparent'}}>
        <TextInput
          style={[{backgroundColor: 'transparent',color: boxColor, borderColor: boxColor}, styles.inputBox]}
          onChangeText={text => handleChange(property, text)}
          value={value}
          placeholder={placeholder}
        />
      </View>
    );
};

const styles = StyleSheet.create({
    inputBox: {
        height: 40,
        borderBottomWidth: 3,
        borderRadius: 48,
        borderLeftWidth: 3,
        borderRightWidth: 1,
        borderTopWidth: 1,
        marginTop: 8,
        padding: 10,
        width: '90%',
    },
    bioBox: {
        height: 100,
        //borderWidth: 1,
        marginTop: 8,
        padding: 10,
        width: '100%',
    }
});