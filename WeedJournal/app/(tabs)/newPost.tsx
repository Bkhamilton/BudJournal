import { StyleSheet, useColorScheme } from 'react-native';

import { Text, View, SafeAreaView, ColorScrollView } from '../../components/Themed';
import Header from '../../components/Header/Header';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function NewPostScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title='New Post' font='PsychoFun'>
        
      </Header>
      <ColorScrollView>
        <View style={styles.content}>
          <Text style={styles.title}>Strain Name</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>THC Type</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Indica/Sativa/Hybrid</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>THC%</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Location</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Quantity</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Rating</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Review</Text>
        </View>
      </ColorScrollView> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',

  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '100%',
  },
  content: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
