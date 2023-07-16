import { StyleSheet, Image, useColorScheme } from 'react-native';
import { Text, View } from '../../Themed';

export default function ProfileHeader({user, bearImage, children}) {

    const {fName, lName, username, email, bear, bio} = user;
    
    return(
        <View style={{ backgroundColor: 'transparent' }}>
            <View style={[{backgroundColor: 'transparent'}, styles.profileHead]}>
              {children}
              <View style={[styles.userImageContainer]}>
                <Image style={styles.userImage} alt='User Image Here' source={bearImage}></Image>
              </View>  
            </View>

            <View style={[{backgroundColor: 'transparent'},styles.profileInfo]}>
              <View style={[{backgroundColor: 'transparent'},styles.firstAndLastName]}>
                <Text>{fName} {lName}</Text>
                <Text style={{paddingTop: 8}}>{email}</Text>
              </View>
            </View>
            
            <View style={[{backgroundColor: 'transparent'},styles.biographySection]}>
              <Text style={{textAlign: 'center'}}> {bio} </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  userImageContainer: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  userImage: {
    height: 110,
    width: 110,
    borderRadius: 100,
  },
  profileHead: {
    alignItems: 'center',
    paddingTop: 10,
  },
  firstAndLastName: {
    alignItems: 'center',
    backgroundColor: 'transparent'
    
  },
  profileInfo: {
    paddingTop: 8,
  },
  biographySection: {
    paddingTop: 16,
    alignItems: 'center',
    paddingHorizontal: 32,
  },
});