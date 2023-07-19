import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { TouchableOpacity } from '../../components/Themed';
import { Image, useColorScheme } from 'react-native';
import logo from '../../assets/images/cannabis.png';

import Colors from '../../constants/Colors';
import React from 'react';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

// Update TabBarButton types 
interface TabBarButtonProps {
  name: any; 
  active: boolean;
  colorScheme: any;
}

function TabBarIcon(props: {
  name: any;
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}


function TabBarButton({ name, active, colorScheme }: TabBarButtonProps) {
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
        backgroundColor: active ? Colors[colorScheme ?? 'light'].tabButtonActive : Colors[colorScheme ?? 'light'].tabButtonInactive,
      }}
    >
      <Image
        style={{ width: 40, height: 40 }}
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
        tabBarItemStyle: {borderTopWidth: 1, borderColor: Colors[colorScheme ?? 'light'].colorBackground}
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'WeedJournal',
          href: './',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          tabBarLabel: 'Home',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          title: 'Buds',
          href: './friends',
          tabBarIcon: ({ color }) => <TabBarIcon name="users" color={color} />,
          tabBarLabel: 'Buds',
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
              name="plus"
              active={props.accessibilityState.selected}
              colorScheme={colorScheme}            
            />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: 'Inbox',
          href: './inbox',
          tabBarIcon: ({ color }) => <TabBarIcon name="bell" color={color} />,
          tabBarLabel: 'Notifications',
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
