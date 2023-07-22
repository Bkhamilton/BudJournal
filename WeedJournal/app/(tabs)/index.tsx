import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import Header from '../../components/Header/Header';
import FirstBox from '../../components/Home/FirstBox/FirstBox';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity } from '../../components/Themed';
import Colors from '../../constants/Colors';

export default function HomeScreen() {
  const colorScheme = useColorScheme();

  const lightColorBack = Colors[colorScheme ?? 'light'].colorBackground;
  const darkColorBack = Colors[colorScheme ?? 'dark'].colorBackground;

  const bwColors = colorScheme == 'light' ? "black" : "white";

  return (
    <SafeAreaView style={styles.container}>
      <Header title='Weed Journal' font='PsychoFun'>
        <TouchableOpacity style={{backgroundColor: 'transparent'}}>
          <MaterialCommunityIcons name="book-plus" size={24} color={bwColors} />
        </TouchableOpacity>
      </Header>
      <ScrollView style={styles.scrollContainer}>
        <View style={{ paddingHorizontal: 20, }}>
          <SearchBar/>
        </View>
        <View style={styles.content}>
          <FirstBox/>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Favorites</Text>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <EditScreenInfo path="app/(tabs)/index.tsx" />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Friends Favorites</Text>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <EditScreenInfo path="app/(tabs)/index.tsx" />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Smoke Tracker</Text>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <EditScreenInfo path="app/(tabs)/index.tsx" />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Recent Journal Entries</Text>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <EditScreenInfo path="app/(tabs)/index.tsx" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingHorizontal: 0,
    paddingVertical: 12,
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
  recentContainer: {
    paddingLeft: 12,
    paddingTop: '1%',
  },
  content: {
    alignItems: 'center',
    borderWidth: 0,
    borderRadius: 16,
    marginVertical: 4,
    paddingVertical: 10,
  }
});
