import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as SystemUI from 'expo-system-ui';

export default function Profile() {


return (
 <View style={styles.container}><View style={{width: '100%',}}><Image style={styles.imageFix} source={require('@/assets/images/resumepage.png')}></Image></View></View>

)
}

const styles = StyleSheet.create({
container: {
margin: '7%',
flex: 1,
flexWrap: 'wrap',
flexDirection: 'row',
},
imageFix: {
width: '100%',
height: '86%',
},
});