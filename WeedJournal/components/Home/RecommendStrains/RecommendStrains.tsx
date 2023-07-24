import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { SpaceGrotesk, SpaceGroteskBold } from '../../StyledText';

import { Text, TouchableOpacity, View } from '../../Themed';

export default function RecommendStrains() {

  const colorScheme = useColorScheme();

  const borderColor = colorScheme == 'light' ? 'black' : 'white';

  const [curState, setCurState] = useState(0);

  const Strain = ({strain}) => {

    const {name, percentage, breed, location, distance} = strain;
    
    return (
      <TouchableOpacity style={{ marginVertical: 2, borderWidth: 1, backgroundColor: colorScheme == 'light' ? 'rgba(255,255,255, 0.9)' : 'rgba(18,18,18, 0.9)' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 2, paddingHorizontal: 4, backgroundColor: 'transparent' }}>
          <SpaceGrotesk style={styles.label}>{breed}</SpaceGrotesk>
          <SpaceGrotesk style={styles.label}>{percentage}</SpaceGrotesk>
        </View>
        <SpaceGroteskBold style={{ textAlign: 'center', fontSize: 20, }}>{name}</SpaceGroteskBold>
        <SpaceGrotesk style={{ textAlign: 'right', paddingHorizontal: 8, paddingTop: 12, paddingBottom: 4 }}>{location} ({distance} away)</SpaceGrotesk>
      </TouchableOpacity>
    );
  }

  const handleReload = () => {
    if (curState == 0) {
      setCurState(curState + 3);
    } else {
      setCurState(0)
    }
  }

  const examples = [{
    name: "Wedding Cake",
    percentage: '20.4%',
    breed: "Indica",
    location: "Native Sun",
    distance: '1 mile',
  },{
    name: "Inzane in the Membrane",
    percentage: '23.7%',
    breed: "Hybrid",
    location: "Herbal Pathways",
    distance: '80 miles',
  },{
    name: "Citral Glue",
    percentage: '25.0%',
    breed: "Sativa",
    location: "Herbal Pathways",
    distance: '80 miles',
  },{
    name: "Green Crack",
    percentage: '18.9%',
    breed: "Indica",
    location: "Temesca Wellness",
    distance: '0.8 miles',
  },{
    name: "Ice Cream Cake",
    percentage: '20.4%',
    breed: "Indica",
    location: "Native Sun",
    distance: '1 mile',
  },{
    name: "Gummy Worms",
    percentage: '29.4%',
    breed: "Hybrid",
    location: "Herbal Pathways",
    distance: '80 miles',
  }]

  return (
    <View style={[styles.container, { backgroundColor: colorScheme == 'light' ? '#70CD74' : '#0C4A11' }]}>
        <View style={{ paddingHorizontal: 16, paddingVertical: 4, backgroundColor: 'transparent', }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'transparent', }}>
              <SpaceGroteskBold style={styles.title}>Recommended Strains</SpaceGroteskBold>
              <TouchableOpacity style={{ backgroundColor: 'transparent', }} onPress={handleReload}>
                <Ionicons name="reload" color={borderColor} size={20}></Ionicons>
              </TouchableOpacity>
            </View>
            <SpaceGrotesk style={{ fontSize: 12, }}>Because you tried Gelato, Pirate Cake...</SpaceGrotesk>
        </View>
        <Strain strain={examples[curState]}/>
        <Strain strain={examples[curState + 1]}/>
        <Strain strain={examples[curState + 2]}/>
        <TouchableOpacity style= {[styles.showMoreButton, { backgroundColor: colorScheme == 'light' ? '#70CD74' : '#0C4A11' }]}>
          <SpaceGroteskBold>Show More</SpaceGroteskBold>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    borderWidth: 1,
    backgroundColor: '#4dbf4d',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    width: '100%',
  },
  label: {
    fontSize: 13,
  },
  showMoreButton: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 6,
    backgroundColor: '#4dbf4d',
  }
});
