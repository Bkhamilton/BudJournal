import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { SpaceGrotesk, SpaceGroteskBold } from '../../StyledText';
import { Text, TouchableOpacity, View } from '../../Themed';

interface PostProps {
    strain: string;
    name: string;
    rating: string;
    size: string;
    date: string;
    time: string;
}

export function RateNode({post: {strain, name, rating, size, date, time}}) {

  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <View id="pic" style={styles.smallPfp}/>
                <SpaceGrotesk style={{ height: '100%' }}>{name} rated </SpaceGrotesk>
                <SpaceGroteskBold style={{ height: '100%' }}>{strain}</SpaceGroteskBold>
            </View>
            <View id="rating" style={styles.ratingContainer}>
                <SpaceGrotesk>{rating} Stars</SpaceGrotesk>
            </View>
        </View>
    </View>
  );
}

export function ReviewNode({post: {strain, name, rating, size, date, time}}) {

    const feelings = ["liked", "liked", "liked", "liked", "really liked", "loved", "hated", "did not like"];
    const randomFeeling = Math.random() * feelings.length;

    const colorScheme = useColorScheme();
  
    return (
        <View style={styles.container}>
        <View style={styles.titleContainer}>
            <View style={{ flexDirection: 'row', alignContent: 'flex-start' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <View id="pic" style={styles.smallPfp}/>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                        <SpaceGrotesk style={{ height: '100%' }}>{name} reviewed </SpaceGrotesk>
                        <SpaceGroteskBold style={{ height: '100%' }}>{strain}</SpaceGroteskBold>
                    </View>
                    <SpaceGrotesk>I {feelings[Math.floor(randomFeeling)]} it!</SpaceGrotesk>
                </View>
                
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
  bigPfp: {
    height: 36, 
    width: 36, 
    borderWidth: 1, 
    borderRadius: 50,
  },
  smallPfp: {
    height: 20, 
    width: 20, 
    borderWidth: 1, 
    borderRadius: 50,
    marginRight: 8,
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
