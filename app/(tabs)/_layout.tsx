import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Stack, Tabs } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import EditScreenInfo from '@/components/EditScreenInfo';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    // <Tabs
    //   screenOptions={{
    //     tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
    //     // Disable the static render of the header on web
    //     // to prevent a hydration error in React Navigation v6.
    //     headerShown: useClientOnlyValue(false, true),
    //   }}>
    //   <Tabs.Screen
    //     name="index"
    //     options={{
    //       href: null,
    //       title: 'Tab One',
    //       tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
    //       headerRight: () => (
    //         <Link href="/modal" asChild>
    //           <Pressable>
    //             {({ pressed }) => (
    //               <FontAwesome
    //                 name="info-circle"
    //                 size={25}
    //                 color={Colors[colorScheme ?? 'light'].text}
    //                 style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
    //               />
    //             )}
    //           </Pressable>
    //         </Link>
    //       ),
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="two"
    //     options={{
    //       href: null,
    //       title: 'Tab Two',
    //       tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
    //     }}
    //   />
    // </Tabs>
    // <View style={styles.container}>
    //   <Text style={styles.title}>Tab One</Text>
    //   <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    //   <Link href="/modal" asChild>
    //     <Pressable>
    //       {({ pressed }) => (
    //         <FontAwesome
    //           name="info-circle"
    //           size={25}
    //           color={Colors[colorScheme ?? 'light'].text}
    //           style={{ marginBottom: 50, opacity: pressed ? 0.5 : 1 }}
    //         />
    //       )}
    //     </Pressable>
    //   </Link>
    //   <EditScreenInfo path="app/(tabs)/index.tsx" />
    // </View>
    <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: '#181C1F',
      },
      // header: false,
      headerTitleAlign: 'center',
      headerShown: false,
      headerBackVisible: false,
      headerBackTitleVisible: false,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
    >

    </Stack>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});