import { StyleSheet, TextInput } from 'react-native';

import { Text, TouchableOpacity, View, SpaceGroteskBold, SpaceGrotesk } from '../../components/Themed';

interface SearchBarProps {
    text: string;
    onChangeText: () => void;
    onPress: () => void;
}

export default function SearchBar({text, onChangeText, onPress} : SearchBarProps) {
  return (
    <View>
        <View>
            <TextInput
                placeholder='Search Here'
            />
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
    height: 48, 
    width: 48, 
    borderWidth: 1, 
    borderRadius: 50,
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
