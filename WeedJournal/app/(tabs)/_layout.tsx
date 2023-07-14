import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { TouchableOpacity } from '../../components/Themed';
import { Image, useColorScheme } from 'react-native';
import logo from '../../assets/images/weedLeafRedo.png';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

// Update TabBarButton types 
interface TabBarButtonProps {
  focused: boolean;
  name: any; 
}

function TabBarIcon(props: {
  name: any;
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

function TabBarButton({ focused, name }: TabBarButtonProps) {
  return (
    <Link href='./newPost' asChild>
      <TouchableOpacity
      style={{
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 16,
        elevation: 5,  
      }}
    >
      <Image
        style={{ width: 36, height: 40 }}
        source={logo}
      />
      </TouchableOpacity>
    </Link>

  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          href: './',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          title: 'Friends',
          href: './friends',
          tabBarIcon: ({ color }) => <TabBarIcon name="users" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="newPost"
        options={{
          title: 'New Post',
          tabBarIcon: ({ color }) => <TabBarIcon name="plus" color={color} />,
          tabBarButton: (props) => (
            <TabBarButton 
            focused={props.focused} 
            name="plus"            />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          href: './history',
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          href: './profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
