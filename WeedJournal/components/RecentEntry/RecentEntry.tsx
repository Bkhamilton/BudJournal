import { StyleSheet } from 'react-native';

import { Text, TouchableOpacity, View } from '../../components/Themed';

interface RecentEntryProps {
    strain: string;
    name: string;
    rating: string;
}

export default function RecentEntry({strain, name, rating} : RecentEntryProps) {
  return (
    <View style={styles.container}>
        <View id="pic" style={styles.pfp}/>
        <View style={styles.titleContainer}>
            <View id="title">
                <Text style={{ fontWeight: 'bold', height: '50%' }}>{strain}</Text>
                <Text style={{ height: '50%' }}>{name}</Text>
            </View>
            <View id="rating" style={styles.ratingContainer}>
                <Text>{rating} Stars</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  pfp: {
    height: 44, 
    width: 44, 
    borderWidth: 1, 
    borderRadius: '50%',
  },
  titleContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    flex: 1, 
    height: '100%',
    paddingLeft: 8,
  },
  ratingContainer: {
    height: '100%', 
    justifyContent: 'center',
  }
});
