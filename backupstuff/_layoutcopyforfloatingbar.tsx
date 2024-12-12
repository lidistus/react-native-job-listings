import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Text } from 'react-native-paper';
import { Button, Dimensions } from 'react-native';
import { Tabs, Link } from 'expo-router';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';


export default function TabLayout() {

  const screenWidth = Dimensions.get('screen')
  const eightyPercentWindow = screenWidth * .8 

  return (
    <Tabs screenOptions={{ 
            tabBarActiveTintColor: '#6851a4',
            tabBarInactiveTintColor: '#cdc7d2',
            tabBarItemStyle: {borderRadius: 25, marginLeft: 35, marginRight: 35,},
            tabBarStyle: { marginTop: '3%', paddingTop: 5, marginBottom: '3%', margin: 'auto', elevation: 3, borderTopWidth:1, borderColor:'white' ,borderTopStartRadius:5, width: '86%', borderTopEndRadius: 5, borderRadius: 20, shadowOpacity: .1, shadowRadius: 2, shadowOffset: {width: 0, height: 3},},
            tabBarShowLabel: false,
            headerShown: true,
            animation: 'fade',
            headerStyle: {backgroundColor: 'white'},
            headerStatusBarHeight: 0,
            headerShadowVisible: false,
            headerTintColor: 'blue',
            headerRight: () => (<Link href='' title='hello' style={{marginRight:25}} mode='text' onPress={() => alert('This is a button!')}>Info</Link>),
            }}>
          <Tabs.Screen
            name="settings"
            options={{
              title: 'Settings',
              tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
            }}
          />
          <Tabs.Screen
            name="index"
            options={{
              title: '',
              tabBarIcon: ({ color }) => <FontAwesome size={29} name="home" color={color} />,
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              title: 'Profile',
              tabBarIcon: ({ color }) => <FontAwesome size={29} name="user" color={color} />,
            }}/>

        </Tabs>      
  );
}

