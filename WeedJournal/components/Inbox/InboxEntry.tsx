import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';

import { Text, TouchableOpacity, View, SpaceGroteskBold, SpaceGrotesk } from '../../components/Themed';

interface InboxEntryProps {
    title: string;
    subTitle: string;
    totalNotifs: number;
    type: string;
    date: string;
    time: string;
}

export default function InboxEntry( notif : InboxEntryProps) {

  const colorScheme = useColorScheme();

  const { title, subTitle, totalNotifs, type, date, time } = notif;

  const truncateText = (text: string, length: number) => {
    if (text.length <= length) {
      return text;
    }

    return text.slice(0, length -1) + "...";
  }

  const SideDisplay = () => {

    if(type === 'system') {
        if(totalNotifs > 0) {
          return <View style={{ paddingHorizontal: 8, paddingVertical: 2, left: 6, borderRadius: 8, backgroundColor: 'green' }}><SpaceGrotesk>{totalNotifs}</SpaceGrotesk></View>;
        } 
      } else if(type === 'user' && totalNotifs > 0) {
        return <View style={{ width: 10, height: 10, borderRadius: 50, backgroundColor: 'green', }} />
      }
    
      return <SpaceGrotesk>{date}</SpaceGrotesk>;
  }

  return (
    <View style={styles.container}>
        <View id="pic" style={[styles.pfp, { borderColor: colorScheme == 'light' ? 'black' : 'white' }]}/>
        <View style={styles.titleContainer}>
            <View id="title">
                <SpaceGroteskBold style={{ height: '50%', fontSize: 17 }}>{title}</SpaceGroteskBold>
                <SpaceGrotesk style={{ height: '50%', fontSize: 13, }}>{truncateText(subTitle, 40)}</SpaceGrotesk>
            </View>
            <View id="rating" style={styles.sideContainer}>
                <SideDisplay/>
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
  sideContainer: {
    height: '100%', 
    justifyContent: 'center',
  }
});
