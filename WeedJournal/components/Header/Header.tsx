import { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, ColorView } from '../../components/Themed';
import { useFonts } from 'expo-font';
import React from 'react';

interface HeaderProps {
  title: string;
  font: string;
  children: React.ReactNode;
}

export default function Header({ title, font, children }: HeaderProps) {
    const [fontsLoaded] = useFonts({
        'SpaceMono': require('../../assets/fonts/SpaceMono-Regular.ttf'),
        'Spliffs': require('../../assets/fonts/Spliffs-YE3o.ttf'),
        'SpaceGrotesk': require('../../assets/fonts/SpaceGrotesk/SpaceGrotesk-Regular.ttf'),
        'SpaceGrotesk_Bold': require('../../assets/fonts/SpaceGrotesk/SpaceGrotesk-Bold.ttf'),
    });
    
    const [fontLoaded, setFontLoaded] = useState(false);
    
    useEffect(() => {
        if (fontsLoaded) {
          setFontLoaded(true);
        }
    }, [fontsLoaded]); 

    return (
        <ColorView style={styles.container}>
          <ColorView>
            {fontLoaded ? (
                  <Text style={[styles.title,{height: 32 , fontFamily: font, }]}>{title}</Text> 
              ) : (
                  <Text style={styles.title}>{title}</Text>
              )}
          </ColorView>
          <ColorView>
            {children}
          </ColorView>
        </ColorView>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    height: 44,
    borderBottomColor: 'rgba(255,255,255,0.1)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
