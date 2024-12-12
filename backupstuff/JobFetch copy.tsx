import React, { useState, useEffect } from 'react'
import { useWindowDimensions, View, StyleSheet, Pressable, Modal, ScrollView, BackHandler, Text } from 'react-native'
import axios from 'axios';
import { PaperProvider, Button, Divider, Searchbar } from 'react-native-paper'
import RenderHTML from 'react-native-render-html';
import { useFonts } from 'expo-font';

function JobFetch() {

  const [fontsLoaded] = useFonts({
    'Rubik-Light': require('@/assets/fonts/Rubik-Light.ttf'),
    'Rubik-Regular': require('@/assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Medium': require('@/assets/fonts/Rubik-Medium.ttf'),
    'Rubik-Bold': require('@/assets/fonts/Rubik-Bold.ttf')
  })

  if(!fontsLoaded){
    return undefined;
  }
  
  // Font size used for body text. Used to limit the line of the html parsed description.
  const lineHeight = 12;

  // Modal state check. (Boolean)
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  // Used to toggle the Modal state. Will select the opposite if called.
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  
  // Current job selection variable assignments.
  const [jobID, setJobID] = useState(null);
  const [jobTitle, setJobTitle] = useState(null);
  const [jobSalary, setJobSalary] = useState(null);
  const [jobDescription, setJobDescription] = useState(null);
  
  // Used to store the API's data locally.
  const [data, setData] = useState([]);

  // Pulls the current users window width. Used to have the same padding/margin parity across devices.
  const { width } = useWindowDimensions();

  // React hook used to sync with an external system. ((So i remember this)).
  useEffect(() => {
    // Declaring the fetchData function. Referenced so it wont run until called below (only once). 
    const fetchData = async () => {
      try {
        // Attempts to call the API. Uses the Axios library for parsing.
        const response = await axios.get('https://data.palmcoastgov.com/api/jobs');
        
        // Assigns the data pulled to the data const above.
        setData(response.data.data);
        // setJobID(response.data.data.map((item) => (item.id)))
        // console.log(jobID);

        // simple error catching. Hopefully never see this :).
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Calling the fetchData function so that it fires off at least once.
    fetchData();
  }, []);

    // Used to set the values of each job[element] from the currently selected Job in the data.map() loop below.
  const setJobValuesHandler = ([id, jobTitle, salary, jobDescriptionHtml]) => {
    setJobID(id);      // Stores and holds the currently selected key ID. This is used as the reference id/key for each job.
    setJobTitle(jobTitle);      // Stores and holds the Job Title based on the jobID key.
    setJobDescription(jobDescriptionHtml);      // Stores and holds the Job Description based on the jobID key. Response includes HTML inside of the text.
    setJobSalary(salary);     // Stores and holds the Job Salary based on the jobID key.
    toggleModal();  // Toggles the modal on or off based on the current state.
  }


  return (


<View style={styles.container}>
  <Text style={{backgroundColor: '#6851a4', width: '100%', textAlign: 'center', margin:'auto', marginBottom: 10, padding: 10, borderRadius: 5, fontWeight:'bold', color: '#fff', fontFamily: 'Rubik_400Regular'}} variant="headlineLarge">Current Openings</Text>
      {/* Grabs the API's JSON file and loops through the data using the item id as the key for the value pair(s).*/}
     <View> {data.map((item) => (
        <View style={{fontFamily: "Rubik-Regular", overflow: 'hidden', padding: 15, marginBottom: 10, borderRadius: 5, backgroundColor: 'white',}} key={item.id}>
          {/* Grabbing Job Title */}
        <Text style={{fontFamily:'Rubik-Bold'}} variant="titleMedium">{item.jobTitle}</Text> 
          {/* Grabbing Salary Amount */}
        <Text style={{marginBottom:5}} variant="bodyMedium"><Text variant="titleMedium">Salary: </Text>{item.salary}</Text>
          {/* Button handles toggling the modal. This taught me that i need to reference () => or else it will go into an infinite loop lol. Also passes through all data from the JSON request to the setJobIDHandler allowing for the Modal to grab each piece of data for display. */}
        <Button style={{borderRadius: 10}} icon="arrow-right-bold-box-outline" mode="contained" compact={true} onPress={() => setJobValuesHandler([item.id, item.jobTitle, item.salary, item.jobDescriptionHtml])}> Apply Here</Button>
        <Divider style={{padding: 1, marginTop: 20, marginBottom: 10, borderRadius: 20, width:'50%', marginLeft:'25%'}} />
       
       
       {/* } 
       // This was an attempt at limiting the text size for the textDescription. Unfortunately did not get where I wanted with it as it was just visual and not actually the text itself. Commenting out for now.

       <View style={{flexDirection: 'row', flexShrink: 1, }}>
        <Text style={{ overflow: 'hidden', height: 4 * 13}} numberOfLines={4} variant="bodyMedium"><RenderHTML contentWidth={width} source={{html: item.jobDescriptionHtml}} 
        /></Text>
        </View>
        <Text> Test Test Test</Text> 
        */}
        </View>
        
      ))}
      </View>

      {/* Inline modal. Figured this was going to be the easiest way to implement. The correct way however would be to set this as component and call it externally. */}
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ScrollView>
          <View key={jobID} style={{ backgroundColor: 'white', padding: 20, width: '100%', height: '100%' }}>
            <Text>Hello from Modal! Here is the id: {jobID}</Text>
            <Text style={{margin: 10}}>{jobTitle} {jobSalary} </Text>
            <Text style={{margin: 10}}>{jobSalary}</Text>
            <Text style={{margin: 10}}><RenderHTML contentWidth={width} source={{html: jobDescription}}/>...</Text>
            <Button title="Close Modal" onPress={toggleModal}>Close</Button>
          </View>
          </ScrollView>
        </View>
      </Modal>
      </View>
  );
}

export default JobFetch;

const styles = StyleSheet.create({
  container: {
    margin: '7%',
    marginTop: 15,
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row'
    
  },
  container2: {
       alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  box: {
    backgroundColor: 'blue',
  },
  textHigh: {
    fontSize: 36,
    padding: 10,
    fontWeight: 'bold',
  },

}); 