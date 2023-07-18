import { FlatList, Platform, StyleSheet, useColorScheme } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View, ScrollView,SafeAreaView, ColorView } from '../../components/Themed';
import Header from '../../components/Header/Header';
import React from 'react';
import InboxEntry from '../../components/Inbox/InboxEntry';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function InboxScreen() {

  const notifs = [
    {title: "New Followers", subTitle: "Kenneth and Lief started following you", totalNotifs: 2, type: 'system', date: '7/18', time: '2:17'},
    {title: "Activities", subTitle: "Kenneth, Calvin, and 2 others liked your post", totalNotifs: 4, type: 'system', date: '7/18', time: '2:17'},
    {title: "Kenneth", subTitle: "liked your message", totalNotifs: 1, type: 'user', date: '7/18', time: '2:17'},
    {title: "Ben", subTitle: "What's up bro", totalNotifs: 0, type: 'user', date: '7/18', time: '2:00'},
    {title: "Lief", subTitle: "Come with me to Vinland!", totalNotifs: 1, type: 'user', date: '7/18', time: '1:25'},
    {title: "Inosuke", subTitle: "Active 2 hours ago", totalNotifs: 0, type: 'user', date: '7/17', time: '5:40'},
    {title: "Steve", subTitle: "liked your message", totalNotifs: 1, type: 'user', date: '7/17', time: '3:00'},
    {title: "Sally", subTitle: "Active now", totalNotifs: 0, type: 'user', date: '7/16', time: '1:40'},
    {title: "Paul", subTitle: "Hello!", totalNotifs: 1, type: 'user', date: '7/16', time: '1:00'},
    {title: "Gene", subTitle: "Active 30 minutes ago", totalNotifs: 0, type: 'user', date: '7/15', time: '3:05'},
    {title: "Rick", subTitle: "Wubalubadubdub", totalNotifs: 0, type: 'user', date: '7/15', time: '3:02'},
    {title: "Thorfinn", subTitle: "loved your message", totalNotifs: 0, type: 'user', date: '7/15', time: '2:30'},
    {title: "Walter", subTitle: "Active now", totalNotifs: 0, type: 'user', date: '7/14', time: '7:30'},
    {title: "Todd", subTitle: "Answer me!", totalNotifs: 1, type: 'user', date: '7/14', time: '1:00'},
    {title: "Sally", subTitle: "Active now", totalNotifs: 0, type: 'user', date: '7/14', time: '7:20'},
  ]

  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <ColorView style={{ height: Platform.OS === 'ios' ? 44 : 9 }}>

      </ColorView>
      <ColorView style={styles.header}>
        <Text style={{ fontFamily: 'PsychoFun', fontSize: 25, height: 34 }}>Inbox</Text>
      </ColorView>
      <FlatList
        style={{ paddingHorizontal: 20, height: '93.6%' }}
        data={notifs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <InboxEntry 
            title={item.title}
            subTitle={item.subTitle}
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
