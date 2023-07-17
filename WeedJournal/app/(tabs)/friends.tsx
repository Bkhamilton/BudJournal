import { StyleSheet, StatusBar, Platform } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View, ScrollView, SafeAreaView } from '../../components/Themed';
import Header from '../../components/Header/Header';
import RecentEntry from '../../components/RecentEntry/RecentEntry';

export default function FriendsScreen() {
  const strains = ["Wedding Cake", "Titty Sprinkles", "Gelato", "Runtz", "Birthday Cake", "4front Legends", "Green Crack", "Church", "8-inch Bagel"];
  const names = ["Jimbo","Paul","James","Terry","Sheila","Bjorn","Sally","Anita","Sam","Derek","Bob","Rob", "Ben", "Kenneth"];
  const sizes = ["1/8", "1/8", "1/8", "1/8", "1/4", "1/4", "1/4", "1/2", "1/2", "1"];

  const entries=[];

  function addRandomStrains(n) {

    for(let i = 0; i < n; i++) {
  
      const strain = strains[Math.floor(Math.random() * strains.length)];
      const name = names[Math.floor(Math.random() * names.length)];
      const size = sizes[Math.floor(Math.random() * sizes.length)];
  
    // Rating between 2.0-10.0
    let rating = Math.random() * 60 + 40; 
    rating = rating / 20;
    const roundedRating = rating.toFixed(1);
  
    const newEntry = {
        strain,
        name,
        size,
        rating: roundedRating // add rating 
    };
  
    entries.push(newEntry);
  
    }
  
  }

  addRandomStrains(25);

  return (
    <View style={[styles.container, {  }]}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={{ fontFamily: 'PsychoFun', fontSize: 24 }}>Friends</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Recents</Text>
          {entries.map((entry, index) => (
            <RecentEntry 
              key={index}
              strain={entry.strain}
              name={entry.name}
              size={entry.size}
              rating={entry.rating}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'transparent',
    paddingHorizontal: 16,
    paddingBottom: 14,
    borderBottomColor: 'rgba(255,255,255,0.1)',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingHorizontal: 0,
    paddingVertical: 8,
    paddingTop: Platform.OS === 'ios' ? 55 : 0,
  },
  content: {
    borderWidth: 0,
    borderRadius: 16,
    marginVertical: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    gap: 20,
  },
});
