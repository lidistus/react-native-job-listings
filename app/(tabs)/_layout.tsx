import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs, Link} from 'expo-router';
import { useFonts } from 'expo-font';
import Layout from '../_layout';
import { Pressable } from 'react-native';


export default function TabLayout() {
  
  const [fontsLoaded] = useFonts({
    'Rubik-Light': require('@/assets/fonts/Rubik-Light.ttf'),
    'Rubik-Regular': require('@/assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Medium': require('@/assets/fonts/Rubik-Medium.ttf'),
    'Rubik-SemiBold': require('@/assets/fonts/Rubik-SemiBold.ttf'),
    'Rubik-Bold': require('@/assets/fonts/Rubik-Bold.ttf')
  })


  return (
    <Tabs screenOptions={{ 
            tabBarActiveBackgroundColor: '#FF7A17',
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#cdc7d2',
            tabBarIconStyle: {margin: 3},
            tabBarStyle: {margin: 'auto', width: '86%', borderRadius: 15, elevation: 3, marginLeft: '7%', position: 'absolute', bottom: '3%', right: '3%'}, 
            tabBarShowLabel: false,
            headerShown: true,
            animation: 'shift',
            headerStyle: {backgroundColor: '#fff', height: 50, borderBottomLeftRadius: 15, borderBottomRightRadius: 15},
            headerTitleStyle: { fontFamily: 'Rubik-Bold', fontSize: 24,},
            headerTitleAlign: 'center',
            headerStatusBarHeight: 0,
            headerShadowVisible: false,
            headerTintColor: '#776D6D',
            headerRight: () => (<Pressable style={{marginRight:'20%'}} onPress={() => alert('Settings should go here. Just act like they are here.')}><FontAwesome size={28} name="cog" color={'#776D6D'}></FontAwesome></Pressable>),
            }}>   
            <Layout/> 
          <Tabs.Screen
            name="applications"
            options={{
              title: 'My Applications',
              tabBarIcon: ({ color }) => <FontAwesome size={24} name="file" color={color} />,
            }}
          />
          <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              tabBarIcon: ({ color }) => <FontAwesome size={29} name="home" color={color} />,
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              title: 'My Profile',
              tabBarIcon: ({ color }) => <FontAwesome size={29} name="user" color={color} />,
            }}/>  
        </Tabs>     
        
 
  );
}

