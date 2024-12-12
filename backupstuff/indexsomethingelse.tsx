import { ScrollView, View, StyleSheet } from "react-native"
import JobFetch from "./components/JobFetch"
import { PaperProvider, Text } from 'react-native-paper'
import { Stack, Link } from 'expo-router'
import NavigationBar from "./components/NavigationBar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
export default function Index() {
  return (
    
<PaperProvider>
  <ScrollView style={{backgroundColor: 'white'}}>
  </ScrollView>
</PaperProvider>


  )}

/*
async function fetchJobs() {

fetch(url), {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}

}
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
