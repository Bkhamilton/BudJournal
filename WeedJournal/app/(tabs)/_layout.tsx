import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Image, Pressable, TouchableOpacity, useColorScheme } from 'react-native';
import logo from '../../assets/images/weedLeaf.png';

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
        backgroundColor: focused ? 'blue' : 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 30,
        elevation: 5,  
      }}
    >
      <Image
        style={{ width: 40, height: 44 }}
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
        name="two"
        options={{
          title: 'Tab Two',
          href: './two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
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
