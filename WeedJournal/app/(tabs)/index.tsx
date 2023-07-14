import { StyleSheet, useColorScheme } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import Header from '../../components/Header/Header';
import FirstBox from '../../components/Home/FirstBox/FirstBox';
import { Text, View, SafeAreaView, ScrollView } from '../../components/Themed';
import Colors from '../../constants/Colors';

export default function HomeScreen() {
  const colorScheme = useColorScheme();

  const lightColorBack = Colors[colorScheme ?? 'light'].colorBackground;
  const darkColorBack = Colors[colorScheme ?? 'dark'].colorBackground;

  return (
    <SafeAreaView style={styles.container}>
      <Header title='Weed Journal'/>
      <ScrollView style={styles.scrollContainer}>
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
    paddingVertical: 20,
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
