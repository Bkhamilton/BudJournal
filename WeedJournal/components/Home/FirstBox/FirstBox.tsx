import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, TouchableOpacity, View } from '../../Themed';

export default function FirstBox() {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.newPostButton}>
            <View>
                <Text style={styles.title}>Create New Post</Text>
            </View>
        </TouchableOpacity>
        <Text style={styles.title}>Recently Tried</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
    gap: 16,
},
  newPostButton: {
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 8,
    backgroundColor: 'transparent',
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
