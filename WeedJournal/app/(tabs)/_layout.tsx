import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, TouchableOpacity, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

// Update TabBarButton types 
interface TabBarButtonProps {
  focused: boolean;
  name: string; 
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
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
      <FontAwesome 
        name={name} 
        size={30} 
        color="white" 
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
          title: 'Tab One',
          href: './',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          href: './two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="newPost"
        options={{
          title: 'New Post',
          tabBarIcon: ({ color }) => <TabBarIcon name="plus" color={color} />,
          tabBarButton: (props) => (
            <TabBarButton 
              {...props}  
              name="plus" 
            />
          )
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          href: './history',
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          href: './profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
