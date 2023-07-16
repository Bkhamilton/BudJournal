import { StyleSheet, useColorScheme, TextInput } from 'react-native';
import React from 'react';
import { Text, View } from '../../../Themed';

export default function BioBox ({placeholder, value}: {placeholder: string, value: string}) {
    const [text, onChangeText] = React.useState(placeholder);
    
    const colorScheme = useColorScheme();
    const boxColor = (colorScheme == 'light' ? "black" : "white");

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
    bioBox: {
        height: 100,
        borderWidth: 1,
        marginTop: 8,
        padding: 10,
        width: '100%',
    }
});