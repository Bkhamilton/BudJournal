import { StyleSheet, useColorScheme } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View, SafeAreaView, ScrollView } from '../../components/Themed';
import Header from '../../components/Header/Header';

export default function NewPostScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title='New Post' font='PsychoFun'>
        
      </Header>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.title}>New Post</Text>
        </View>
      </ScrollView> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',

  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '100%',
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
