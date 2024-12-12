import { View, Text, StyleSheet, Image } from 'react-native';

export default function Tab() {
  return (
     
    <View style={styles.container}><View style={{width: '100%',}}><Image style={styles.imageFix} source={require('@/assets/images/applicationpage.png')}></Image></View></View>

)
}

const styles = StyleSheet.create({
container: {
margin: '5%',
flex: 1,
flexWrap: 'wrap',
flexDirection: 'row',
},
imageFix: {
width: '100%',
height: '90%',
},
});