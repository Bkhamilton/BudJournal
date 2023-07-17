import { StyleSheet, Image, useColorScheme } from 'react-native';
import { Text, View, SpaceGrotesk, SpaceGroteskBold, Spliffs } from '../../Themed';

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

            <View style={[{backgroundColor: 'transparent' },styles.profileInfo]}>
              <View style={[{backgroundColor: 'transparent'},styles.firstAndLastName]}>
                <Spliffs style={{ fontSize: 24, width: 200, textAlign: 'center' }}>{fName} {lName}</Spliffs>
                <SpaceGroteskBold style={{ paddingTop: 8 }}>{email}</SpaceGroteskBold>
              </View>
            </View>
            
            <View style={[{backgroundColor: 'transparent' },styles.biographySection]}>
              <SpaceGrotesk style={{textAlign: 'center', fontFamily: 'SpaceGrotesk'}}> {bio} </SpaceGrotesk>
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
    height: 100,
    width: 100,
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
    paddingTop: 4,
  },
  biographySection: {
    paddingTop: 16,
    alignItems: 'center',
    paddingHorizontal: 32,
  },
});