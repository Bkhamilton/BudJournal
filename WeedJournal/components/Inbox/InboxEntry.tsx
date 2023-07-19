import { FontAwesome, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, useColorScheme, Image } from 'react-native';
import { SpaceGrotesk, SpaceGroteskBold } from '../StyledText';
import { Text, TouchableOpacity, View } from '../../components/Themed';
import icon from '../../assets/images/cannabisWhite.png';

interface InboxEntryProps {
    title: string;
    subTitle: string;
    pfp: any;
    totalNotifs: number;
    type: string;
    date: string;
    time: string;
}

export default function InboxEntry( notif : InboxEntryProps) {

  const colorScheme = useColorScheme();

  const bwColors = colorScheme == 'light' ? 'black' : 'white';
  const wbColors = colorScheme == 'light' ? 'black' : 'white';

  const greens = colorScheme == 'light' ? '#388E3C' : 'green';

  const { title, subTitle, pfp, totalNotifs, type, date, time } = notif;

  const truncateText = (text: string, length: number) => {
    if (text.length <= length) {
      return text;
    }

    return text.slice(0, length -1) + "...";
  }

  //Chooses Display on Right Side of Screen
  const SideDisplay = () => {
    if(type === 'system') {
        if(totalNotifs > 0) {
          return <View style={{ paddingHorizontal: 8, paddingVertical: 2, left: 6, borderRadius: 8, backgroundColor: greens, }}><SpaceGrotesk>{totalNotifs}</SpaceGrotesk></View>;
        } else {
          return null;
        }
      } else if(type === 'user' && totalNotifs > 0) {
        return <View style={{ width: 10, height: 10, borderRadius: 50, backgroundColor: greens, }} />
      }
    
      return <SpaceGrotesk>{date}</SpaceGrotesk>;
  }

  //Chooses What to display for PFP
  const ProfilePic = () => {
    if(type === 'system') {
      if(title === "New Followers") {
        return (
          <View style={{ height: 48, width: 48, borderRadius: 50, borderWidth: 1, backgroundColor: 'green', borderColor: wbColors, justifyContent: 'center', alignItems: 'center', }}>
            <Ionicons name="people" size={26} color='white'></Ionicons>
          </View>);
      } else {
        return (
          <View style={{ height: 48, width: 48, borderRadius: 50, borderWidth: 1, backgroundColor: '#08320B', borderColor: wbColors, justifyContent: 'center', alignItems: 'center', }}>
            <Image
              style={{ width: 28, height: 28 }}
              source={icon}
            />
          </View>);
      }
    } else {
      return (
      <View style={{ height: 48, width: 48, borderRadius: 50, borderColor: wbColors }}>
        <Image
          style={{ height: 48, width: 48, borderRadius: 50 }}
          source={pfp}
        />
      </View>);
    }
  }

  return (
    <TouchableOpacity style={styles.container}>
        <ProfilePic/>
        <View style={styles.titleContainer}>
            <View id="title">
                <SpaceGroteskBold style={{ height: '50%', fontSize: 17 }}>{title}</SpaceGroteskBold>
                <SpaceGrotesk style={{ height: '50%', fontSize: 13, }}>{truncateText(subTitle, 40)}</SpaceGrotesk>
            </View>
            <View id="rating" style={styles.sideContainer}>
                <SideDisplay/>
            </View>
        </View>
    </TouchableOpacity>
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
