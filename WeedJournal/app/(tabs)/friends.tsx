import { StyleSheet, StatusBar, Platform, Animated, useColorScheme, FlatList } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View, ScrollView, SafeAreaView, ColorView } from '../../components/Themed';
import Header from '../../components/Header/Header';
import RecentEntry from '../../components/RecentEntry/RecentEntry';
import { RateNode, ReviewNode } from '../../components/Feed/PostNode/PostNode';
import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function FriendsScreen() {
  const strains = ["Wedding Cake", "Titty Sprinkles", "Gelato", "Runtz", "Birthday Cake", "4front Legends", "Green Crack", "Church", "8-inch Bagel"];
  const names = ["Jimbo","Paul","James","Terry","Sheila","Bjorn","Sally","Anita","Sam","Derek","Bob","Rob", "Ben", "Kenneth"];
  const sizes = ["1/8", "1/8", "1/8", "1/8", "1/4", "1/4", "1/4", "1/2", "1/2", "1"];

  const entries: {
    strain: string; name: string; size: string; rating: string; // add rating 
  }[]=[];

  function addRandomStrains(n: number) {

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

  addRandomStrains(40);

  const colorScheme = useColorScheme();

  const colorBackground = (colorScheme == 'light' ? "#33b533" : "#0C4A11");
  const bwColors = colorScheme == 'light' ? "black" : "white";

  const opacity = new Animated.Value(1);
  const translateY = new Animated.Value(0); 

  let lastScrollY = 0;

  const onScroll = (event: { nativeEvent: { contentOffset: { y: any; }; }; }) => {
    const currentScrollY = event.nativeEvent.contentOffset.y;
  
    if (currentScrollY >= lastScrollY) {
      // Scrolling down
      Animated.timing(opacity, {
        toValue: currentScrollY < 50 ? 1 : 0, 
        duration: 50,
        useNativeDriver: false 
      }).start();
    } else if (currentScrollY < lastScrollY - 10 || currentScrollY < 80) {
     // Scrolling up
     Animated.timing(opacity, {
       toValue: 1,
       duration: 100,
       useNativeDriver: false
     }).start(); 
    }
  
    lastScrollY = currentScrollY;
  
    translateY.setValue(currentScrollY * 0.5);
  }

  const FriendHeader = () => {
    return(
      <View style={{ paddingBottom: 16, paddingTop: 55 }}>
        <SearchBar/>
      </View>
    );
  }

  const DisplayNode = (post) => {
    const {post: innerPost} = post;

    const nodes = [RateNode, ReviewNode];
    const Node = nodes[Math.floor(Math.random() * nodes.length)];
    return <Node post={innerPost}/>;
  }

  return (
    <View style={{ flex: 1, }}>
      <ColorView style={{ height: Platform.OS === 'ios' ? 48 : 8 }}>
      </ColorView>
      <Animated.View style={[styles.header, { opacity: opacity, backgroundColor: colorBackground, position: 'absolute', top: Platform.OS === 'ios' ? 47 : 6, zIndex: 1 }]}>
        <Text style={{ fontFamily: 'PsychoFun', fontSize: 22, height: 32, }}>Buddies</Text>
        <MaterialCommunityIcons name="book-plus" size={24} color={bwColors} /> 
      </Animated.View>
      <FlatList
        style={{ height: '93.8%', paddingHorizontal: 20 }}
        data={entries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <DisplayNode 
            post={item}
          />
        )}
        ListHeaderComponent={() => <FriendHeader></FriendHeader>}
        ItemSeparatorComponent={() => <View style={{marginVertical: 10, borderWidth: 1, borderColor: colorScheme == 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'}} />}
        onScroll={onScroll}
        scrollEventThrottle={35}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 44,
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 0,
    borderBottomColor: 'rgba(255,255,255,0.1)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    zIndex: 0,
    height: '93.5%',
    marginTop: 0,
  },
  content: {
    borderWidth: 0,
    borderRadius: 16,
    marginVertical: 4,
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
    gap: 20,
  },
});
