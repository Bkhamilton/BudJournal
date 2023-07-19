import { FlatList, Platform, StyleSheet, useColorScheme } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View, ScrollView,SafeAreaView, ColorView } from '../../components/Themed';
import Header from '../../components/Header/Header';
import React from 'react';
import InboxEntry from '../../components/Inbox/InboxEntry';
import SearchBar from '../../components/SearchBar/SearchBar';
import broGoat from '../../assets/images/Goats/BroGoat.jpg';
import dumbGoat from '../../assets/images/Goats/dumbGoat.jpg';
import fieldGoat from '../../assets/images/Goats/fieldGoat.jpg';
import modelGoat from '../../assets/images/Goats/modelGoat.jpg';
import supGoat from '../../assets/images/Goats/supGoat.jpg';
import whiteGoat from '../../assets/images/Goats/whiteGoat.jpg';

import polarBear from '../../assets/images/bears/polarBear.jpg';
import chillBear from '../../assets/images/bears/chillBear.jpg';
import tongueBear from '../../assets/images/bears/tongueBear.jpg';
import snowBear from '../../assets/images/bears/snowBear.jpg';
import broBear from '../../assets/images/bears/broBear.jpg';

export default function InboxScreen() {

  const goatImages = {
    broGoat,
    dumbGoat,
    fieldGoat,
    modelGoat,
    supGoat,
    whiteGoat
  }

  const bearImages = {
    polarBear,
    chillBear,
    tongueBear,
    snowBear,
    broBear
  }

  const notifs = [
    {title: "New Followers", subTitle: "Kenneth and Lief started following you", pfp: 'None', totalNotifs: 2, type: 'system', date: '7/18', time: '2:17'},
    {title: "Activities", subTitle: "Kenneth, Calvin, and 2 others liked your post", pfp: 'None', totalNotifs: 4, type: 'system', date: '7/18', time: '2:17'},
    {title: "Kenneth", subTitle: "liked your message", pfp: polarBear, totalNotifs: 1, type: 'user', date: '7/18', time: '2:17'},
    {title: "Ben", subTitle: "What's up bro", pfp: chillBear, totalNotifs: 0, type: 'user', date: '7/18', time: '2:00'},
    {title: "Lief", subTitle: "Come with me to Vinland!", pfp: broBear, totalNotifs: 1, type: 'user', date: '7/18', time: '1:25'},
    {title: "Inosuke", subTitle: "Active 2 hours ago", pfp: snowBear, totalNotifs: 0, type: 'user', date: '7/17', time: '5:40'},
    {title: "Steve", subTitle: "liked your message", pfp: tongueBear, totalNotifs: 1, type: 'user', date: '7/17', time: '3:00'},
    {title: "Sally", subTitle: "Active now", pfp: broGoat, totalNotifs: 0, type: 'user', date: '7/16', time: '1:40'},
    {title: "Paul", subTitle: "Hello!", pfp: dumbGoat, totalNotifs: 1, type: 'user', date: '7/16', time: '1:00'},
    {title: "Gene", subTitle: "Active 30 minutes ago", pfp: fieldGoat, totalNotifs: 0, type: 'user', date: '7/15', time: '3:05'},
    {title: "Rick", subTitle: "Wubalubadubdub", pfp: supGoat, totalNotifs: 0, type: 'user', date: '7/15', time: '3:02'},
    {title: "Thorfinn", subTitle: "loved your message", pfp: whiteGoat, totalNotifs: 0, type: 'user', date: '7/15', time: '2:30'},
    {title: "Walter", subTitle: "Active now", pfp: chillBear, totalNotifs: 0, type: 'user', date: '7/14', time: '7:30'},
    {title: "Todd", subTitle: "Answer me!", pfp: broBear, totalNotifs: 1, type: 'user', date: '7/14', time: '1:00'},
    {title: "Sally", subTitle: "Active now", pfp: dumbGoat, totalNotifs: 0, type: 'user', date: '7/14', time: '7:20'},
  ]

  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <ColorView style={{ height: Platform.OS === 'ios' ? 44 : 9 }}>

      </ColorView>
      <ColorView style={styles.header}>
        <Text style={{ fontFamily: 'PsychoFun', fontSize: 24, height: 32 }}>Inbox</Text>
      </ColorView>
      <FlatList
        style={{ paddingHorizontal: 20, height: '93.6%' }}
        data={notifs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <InboxEntry 
            title={item.title}
            subTitle={item.subTitle}
            pfp={item.pfp}
            totalNotifs={item.totalNotifs}
            type={item.type}
            date={item.date}
            time={item.time}
          />
        )}
        ListHeaderComponent={() => <SearchBar/>}
        ListHeaderComponentStyle={{ paddingTop: 12, paddingBottom: 16}}
        ItemSeparatorComponent={() => <View style={{marginVertical: 10, borderWidth: 1, borderColor: colorScheme == 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'}} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    height: 47,
    paddingHorizontal: 20,
    borderBottomColor: 'rgba(255,255,255,0.1)',
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
