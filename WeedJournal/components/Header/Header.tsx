import { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import { useFonts } from 'expo-font';

export default function Header({ title }: { title: string }) {
    const [fontsLoaded] = useFonts({
        'SpaceMono': require('../../assets/fonts/SpaceMono-Regular.ttf'), 
    });
    
    const [fontLoaded, setFontLoaded] = useState(false);
    
    useEffect(() => {
        if (fontsLoaded) {
          setFontLoaded(true);
        }
    }, [fontsLoaded]); 

    return (
        <View>
            {fontLoaded ? (
                <Text style={[styles.title, { fontFamily: 'SpaceMono' }]}>{title}</Text> 
            ) : (
                <Text style={styles.title}>{title}</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});