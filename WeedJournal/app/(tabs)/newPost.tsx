import { StyleSheet, useColorScheme } from 'react-native';

import { Text, View, SafeAreaView, ColorScrollView, TouchableOpacity, ColorView, TextInput } from '../../components/Themed';
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

  const categories = ["Flower", "Pre-Roll", "Cart", "Dab", "Edible", "Drink", "Other"]

  const [type, setType] = useState(0);
  const [category, setCategory] = useState(0);

  const [pageHeader, setHeader] = useState("New Post");

  const [name, setName] = useState("");
  const [thc, setTHC] = useState("");
  const [dispensary, setDispo] = useState("");
  const [review, setReview] = useState("");
  
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

  const StrainName = () => {
    return (
      <View style={styles.content}>
        <TextInput style={styles.title}
          value={name}
          onChangeText={setName}
          placeholder="Strain Name"
        />
      </View>
    );
  }

  const StrainType = () => {
    return (
      <ColorView style={{ alignItems: 'flex-start', width: 100, }}>
        <SpaceGroteskBold style={[styles.headerTitle]}>Type</SpaceGroteskBold>
        <TouchableOpacity style={[styles.typeButton, { backgroundColor: inactiveBtnColor }]} onPress={handleCategory}>
            <SpaceGrotesk style={{ fontSize: 20, }}>{categories[category]}</SpaceGrotesk>
        </TouchableOpacity>
      </ColorView>
    );
    
  }

  const StrainBreed = () => {
    return (
      <ColorView style={{ alignItems: 'center', }}>
        <SpaceGroteskBold style={[styles.headerTitle]}>Breed</SpaceGroteskBold>
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
    );
  }

  const THCPercentage = ({ val, change }) => {
    return (
      <View style={styles.smallContent}>
        <TextInput style={[styles.title, { width: 60, textAlign: 'center' }]}
          value={val}
          onChangeText={change}
          placeholder="THC%"
          keyboardType='number-pad'
        />
      </View>
    );
  }

  const handleHeader = () => {
    if (name.length > 3) {
      setHeader(name);
    } else {
      setHeader("New Post");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title={pageHeader} font='PsychoFun'>
        <TouchableOpacity style={{ paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8, backgroundColor: inactiveBtnColor }}>
          <SpaceGroteskBold>Post</SpaceGroteskBold>
        </TouchableOpacity>
      </Header>
      <ColorScrollView style={{ width: '100%', paddingHorizontal: 16 }}>
        <View style={styles.content}>
          <TextInput style={styles.title}
            value={name}
            onChangeText={setName}
            placeholder="Strain Name"
            placeholderTextColor='#535257'
            maxLength={40}
            onEndEditing={handleHeader}
          />
        </View>
        <ColorView style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, marginTop: 8 }}>
          <StrainType/>
          <ColorView style={{ width: 2, height: '100%', backgroundColor: '#4dbf4d', opacity: 0.3, borderRadius: 8, }}/>
          <StrainBreed/>
        </ColorView>
        <ColorView style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={[styles.smallContent, { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 82 }]}>
            <TextInput style={[styles.title]}
              value={thc}
              onChangeText={setTHC}
              placeholder="THC"
              placeholderTextColor='#535257'
              keyboardType='numeric'
              maxLength={4}
            />
            <SpaceGrotesk style={styles.title}>%</SpaceGrotesk>
          </View>
          <View style={[styles.content, { width: '70%' }]}>
            <TextInput style={styles.title}
                value={dispensary}
                onChangeText={setDispo}
                placeholder="Location"
                placeholderTextColor='#535257'
            />
          </View>
        </ColorView>
        <View style={styles.content}>
          <Text style={styles.title}>Quantity</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Rating</Text>
        </View>
        <View style={[styles.content, { height: 160 }]}>
          <TextInput style={styles.title}
            value={review}
            onChangeText={setReview}
            placeholder="Write your review here"
            placeholderTextColor='#535257'
            multiline
            numberOfLines={2}
          />
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
    fontFamily: 'SpaceGrotesk_Bold',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 2,
    paddingHorizontal: 4,
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
  smallContent: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginTop: 8,
  },
  typeButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  }
});
