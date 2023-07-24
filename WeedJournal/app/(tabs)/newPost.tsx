import { StyleSheet, useColorScheme } from 'react-native';

import { Text, View, SafeAreaView, ColorScrollView, TouchableOpacity, ColorView, TextInput } from '../../components/Themed';
import Header from '../../components/Header/Header';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { SpaceGrotesk, SpaceGroteskBold } from '../../components/StyledText';
import { PrivateValueStore } from '@react-navigation/native';
import PickType from '../modals/PickType';
import PickQuantity from '../modals/PickQuantity';

export default function NewPostScreen() {

  const colorScheme = useColorScheme();

  const activeBtnColor = Colors[colorScheme ?? 'light'].colorButtonActive;
  const inactiveBtnColor = Colors[colorScheme ?? 'dark'].colorButtonInactive;

  const categories = ["Flower", "Pre-Roll", "Cart", "Dab", "Edible", "Drink", "Other"];
  const quantities = ["1/8", "1/4", "1/2", "1", "1.5", "2", "2+"];

  const [pageHeader, setHeader] = useState("New Post");

  const [name, setName] = useState("");
  const [breed, setBreed] = useState(0);
  const [category, setCategory] = useState("Flower");
  const [thc, setTHC] = useState("");
  const [dispensary, setDispo] = useState("");
  const [quantity, setQuantity] = useState("1/8");
  const [review, setReview] = useState("");

  const [typeModal, setTypeModal] = useState(false);
  const [quantityModal, setQuantityModal] = useState(false);

  const toggleQuantityModal = () => {
    setQuantityModal((prevState) => !prevState);
  }

  const toggleTypeModal = () => {
    setTypeModal((prevState) => !prevState);
  }

  const chooseType = (props: React.SetStateAction<string>) => {
    setCategory(props);
    toggleTypeModal();
  }

  const chooseQuantity = (props: React.SetStateAction<string>) => {
    setQuantity(props);
    toggleQuantityModal();
  }
  
  const handleBreed = (newBreed: React.SetStateAction<number>) => {
    if (breed == newBreed) {
      setBreed(0);
    } else {
      setBreed(newBreed);
    }
  }


  const StrainType = () => {
    return (
      <ColorView style={{ alignItems: 'flex-start', width: 100, }}>
        <SpaceGroteskBold style={styles.headerTitle}>Type</SpaceGroteskBold>
        <TouchableOpacity style={[styles.typeButton, { backgroundColor: inactiveBtnColor }]} onPress={toggleTypeModal}>
            <SpaceGrotesk style={styles.buttonTitle}>{category}</SpaceGrotesk>
        </TouchableOpacity>
      </ColorView>
    );
    
  }

  const StrainBreed = () => {
    return (
      <ColorView style={{ alignItems: 'center', }}>
        <SpaceGroteskBold style={styles.headerTitle}>Breed</SpaceGroteskBold>
        <ColorView style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={[styles.typeButton, { backgroundColor: breed==1 ? activeBtnColor : inactiveBtnColor }]} onPress={() => handleBreed(1)}>
            <SpaceGrotesk style={styles.buttonTitle}>Indica</SpaceGrotesk>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.typeButton, { backgroundColor: breed==2 ? activeBtnColor : inactiveBtnColor }]} onPress={() => handleBreed(2)}>
            <SpaceGrotesk style={styles.buttonTitle}>Sativa</SpaceGrotesk>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.typeButton, { backgroundColor: breed==3 ? activeBtnColor : inactiveBtnColor }]} onPress={() => handleBreed(3)}>
            <SpaceGrotesk style={styles.buttonTitle}>Hybrid</SpaceGrotesk>
          </TouchableOpacity>
        </ColorView>
      </ColorView>
    );
  }

  const Quantity = () => {
    return (
      <ColorView style={{ alignItems: 'flex-start', width: 100 }}>
        <SpaceGroteskBold style={styles.headerTitle}>Quantity</SpaceGroteskBold>
        <TouchableOpacity style={[styles.typeButton, { backgroundColor: inactiveBtnColor }]} onPress={toggleQuantityModal}>
            <SpaceGrotesk style={styles.buttonTitle}>{quantity} oz</SpaceGrotesk>
        </TouchableOpacity>
      </ColorView>
    );
    
  }

  const Rating = () => {

    const [width, setWidth] = useState(0);

    const handlePress = () => {
      setWidth(Math.random() * 230);
    }

    return (
      <ColorView>
        <SpaceGroteskBold style={[styles.headerTitle, { textAlign: 'center', }]}>Rating</SpaceGroteskBold>
        <TouchableOpacity style={{ width: 230, borderWidth: 1, height: 30, }} onPress={handlePress}>
            <ColorView style={{ width: width, height: '100%', backgroundColor: 'green' }}>

            </ColorView>
        </TouchableOpacity>
      </ColorView>      
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
        <PickType visible={typeModal} toggle={chooseType} categories={categories} close={toggleTypeModal}/>
        <PickQuantity visible={quantityModal} toggle={chooseQuantity} options={quantities} close={toggleQuantityModal}/>
        <ColorView style={[styles.spreadApart, { paddingVertical: 8, marginTop: 8 }]}>
          <StrainType/>
          <ColorView style={{ width: 2, height: '100%', backgroundColor: inactiveBtnColor, opacity: 0.3, borderRadius: 8, }}/>
          <StrainBreed/>
        </ColorView>
        <ColorView style={[styles.spreadApart, { alignItems: 'center' }]}>
          <View style={[styles.smallContent, { flexDirection: 'row', alignItems: 'center', width: 82 }]}>
            <TextInput
              style={[styles.title, { textAlign: 'right', width: 50 }]}
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
        <ColorView style={[styles.spreadApart, { paddingVertical: 8, marginTop: 8, }]}>
          <Quantity/>
          <ColorView style={{ width: 2, height: '100%', backgroundColor: inactiveBtnColor, opacity: 0.3, borderRadius: 8, }}/>
          <Rating/>
        </ColorView>
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
  spreadApart: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'SpaceGrotesk_Bold',
  },
  buttonTitle: {
    fontSize: 20,
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
    paddingRight: 12,
    paddingLeft: 4,
    borderRadius: 16,
    marginTop: 8,
  },
  typeButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  }
});
