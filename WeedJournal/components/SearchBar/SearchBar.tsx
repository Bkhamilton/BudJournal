import { Feather, FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';

import { Text, TouchableOpacity, View, SpaceGroteskBold, SpaceGrotesk } from '../../components/Themed';

export default function SearchBar() {

  const colorScheme = useColorScheme();

  return (
    <View style={[styles.container, { backgroundColor: colorScheme == 'light' ? '#f1f1f2' : '#2e2e2e' }]}>
        <Feather name="search" size={22} color={colorScheme == 'light' ? 'black' : 'white'}></Feather>
        <Text style={{ color: '#6a6a6a' }}>Search...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: 'center',
    gap: 4,
  }
});
