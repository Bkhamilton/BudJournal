import { StyleSheet, useColorScheme } from 'react-native';

import { Text, View, SafeAreaView, ColorScrollView, TouchableOpacity, ColorView } from '../../components/Themed';
import Header from '../../components/Header/Header';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { SpaceGrotesk, SpaceGroteskBold } from '../../components/StyledText';
import { PrivateValueStore } from '@react-navigation/native';

export default function NewPostScreen() {

  const colorScheme = useColorScheme();

  const activeBtnColor = Colors[colorScheme ?? 'light'].colorButtonActive;
  const inactiveBtnColor = Colors[colorScheme ?? 'dark'].colorButtonInactive;

  const categories = ["Flower", "Pre-Roll", "Cart", "Dab", "Edible", "Drinks", "Other"]

  const [type, setType] = useState(0);
  const [category, setCategory] = useState(0);
  
  const handleType = (newType) => {
    if (type == newType) {
      setType(0);
    } else {
      setType(newType);
    }
  }

  const handleCategory = () => {
    if (category == categories.length - 1) {
      setCategory(0);
    } else {
      setCategory((prevState) => prevState + 1);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title='New Post' font='PsychoFun'>
        <TouchableOpacity style={{ paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8, backgroundColor: inactiveBtnColor }}>
          <SpaceGroteskBold>Post</SpaceGroteskBold>
        </TouchableOpacity>
      </Header>
      <ColorScrollView style={{ width: '100%', paddingHorizontal: 16 }}>
        <View style={styles.content}>
          <Text style={styles.title}>Strain Name</Text>
        </View>
        <ColorView style={{ marginTop: 8, paddingTop: 10, paddingBottom: 2, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
          <SpaceGroteskBold style={[styles.title, { paddingHorizontal: 8, }]}>THC Type</SpaceGroteskBold>
          <TouchableOpacity style={[styles.typeButton, { backgroundColor: inactiveBtnColor }]} onPress={handleCategory}>
              <SpaceGrotesk style={{ fontSize: 20, }}>{categories[category]}</SpaceGrotesk>
          </TouchableOpacity>
        </ColorView>
        <ColorView style={{ marginTop: 8, paddingTop: 2, paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
          <SpaceGroteskBold style={[styles.title, { paddingHorizontal: 8 }]}>Type</SpaceGroteskBold>
          <ColorView style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={[styles.typeButton, { backgroundColor: type==1 ? activeBtnColor : inactiveBtnColor }]} onPress={() => handleType(1)}>
              <SpaceGrotesk style={{ fontSize: 20 }}>Indica</SpaceGrotesk>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.typeButton, { backgroundColor: type==2 ? activeBtnColor : inactiveBtnColor }]} onPress={() => handleType(2)}>
              <SpaceGrotesk style={{ fontSize: 20 }}>Sativa</SpaceGrotesk>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.typeButton, { backgroundColor: type==3 ? activeBtnColor : inactiveBtnColor }]} onPress={() => handleType(3)}>
              <SpaceGrotesk style={{ fontSize: 20 }}>Hybrid</SpaceGrotesk>
            </TouchableOpacity>
          </ColorView>
        </ColorView>
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
    borderRadius: 16,
    marginTop: 8,
  },
  typeButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  }
});
