
import { ScrollView, View, StyleSheet, Modal, Button } from "react-native"
import { useState } from "react"
import JobFetch from "@/app/components/JobFetch"
import { PaperProvider, Text } from 'react-native-paper'
import { Stack, Link } from 'expo-router'

export default function Index() {



  return (
<PaperProvider>
<ScrollView>
  
<JobFetch></JobFetch>
  
  </ScrollView>  
</PaperProvider>


  )}

