import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import Header from '../../components/Header/Header';
import { Text, View, SafeAreaView, ScrollView } from '../../components/Themed';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Header title='Weed Journal'/>
        <View style={styles.content}>
          <Text style={styles.title}>Recently Tried</Text>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <EditScreenInfo path="app/(tabs)/index.tsx" />
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
    backgroundColor: '#388E3C',
  },
  scrollContainer: {
    paddingHorizontal: 0,
    paddingVertical: 20,
    backgroundColor: '#388E3C',
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
    backgroundColor: 'white',
  }
});
