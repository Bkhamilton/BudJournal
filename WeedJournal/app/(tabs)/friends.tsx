import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View, ScrollView, SafeAreaView } from '../../components/Themed';
import Header from '../../components/Header/Header';
import RecentEntry from '../../components/RecentEntry/RecentEntry';

export default function FriendsScreen() {
  const strains = ["Wedding Cake", "Titty Sprinkles", "Gelato", "Runtz", "Birthday Cake", "4front Legends", "Green Crack", "Church", "8-inch Bagel"];
  const names = ["Jimbo","Paul","James","Terry","Sheila","Bjorn","Sally","Anita","Sam","Derek","Bob","Rob"];

  const entries=[];

  function addRandomStrains(n) {

    for(let i = 0; i < n; i++) {
  
      const strain = strains[Math.floor(Math.random() * strains.length)];
      const name = names[Math.floor(Math.random() * names.length)];
  
    // Rating between 2.0-10.0
    let rating = Math.random() * 80 + 20; 
    rating = rating / 10;
    const roundedRating = rating.toFixed(1);
  
    const newEntry = {
        strain,
        name,
        rating: roundedRating // add rating 
    };
  
    entries.push(newEntry);
  
    }
  
  }

  addRandomStrains(25);

  return (
    <SafeAreaView style={styles.container}>
      <Header title='Friends' font='PsychoFun'>

      </Header>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>Recents</Text>
          {entries.map((entry, index) => (
            <RecentEntry 
              key={index}
              strain={entry.strain}
              name={entry.name}
              rating={entry.rating}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingHorizontal: 0,
    paddingVertical: 20,
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
