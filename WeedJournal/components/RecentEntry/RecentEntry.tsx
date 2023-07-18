import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { SpaceGrotesk, SpaceGroteskBold } from '../StyledText';
import { Text, TouchableOpacity, View } from '../../components/Themed';

interface RecentEntryProps {
    strain: string;
    name: string;
    rating: string;
    size: string;
}

export default function RecentEntry({strain, name, rating, size} : RecentEntryProps) {

  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
        <View id="pic" style={[styles.pfp, { borderColor: colorScheme == 'light' ? 'black' : 'white' }]}/>
        <View style={styles.titleContainer}>
            <View id="title">
                <SpaceGroteskBold style={{ height: '50%', fontSize: 17, }}>{strain}</SpaceGroteskBold>
                <SpaceGrotesk style={{ height: '50%' }}>{name}</SpaceGrotesk>
            </View>
            <View id="rating" style={styles.ratingContainer}>
                <SpaceGrotesk>{rating} Stars</SpaceGrotesk>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  pfp: {
    height: 48, 
    width: 48, 
    borderWidth: 1, 
    borderRadius: 50,
  },
  titleContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    flex: 1, 
    height: '100%',
    paddingLeft: 8,
  },
  ratingContainer: {
    height: '100%', 
    justifyContent: 'center',
  }
});
