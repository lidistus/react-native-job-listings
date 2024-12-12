import React, { useState, useEffect } from 'react'
import { useWindowDimensions, View, StyleSheet, Pressable, Modal, ScrollView, BackHandler, Text } from 'react-native'
import axios from 'axios';
import { Button, Divider, Searchbar } from 'react-native-paper'
import RenderHTML from 'react-native-render-html';
import { useFonts } from 'expo-font';
import { FontAwesome } from '@expo/vector-icons';

function JobFetch() {

  // Used to give styling to the <p> tag of the parsed HTML for Description.
  const tagsStyles = {
    p: {
      fontFamily: 'Rubik-Regular',
      fontSize: 14,
      color: '#887F7F',
    },

  }
  // Loading custom fonts into the file.
  const [fontsLoaded] = useFonts({
    'Rubik-Light': require('@/assets/fonts/Rubik-Light.ttf'),
    'Rubik-Regular': require('@/assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Medium': require('@/assets/fonts/Rubik-Medium.ttf'),
    'Rubik-SemiBold': require('@/assets/fonts/Rubik-SemiBold.ttf'),
    'Rubik-Bold': require('@/assets/fonts/Rubik-Bold.ttf')
  })
  
  // Font size used for body/description text. Used to limit the line of the html parsed description.
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
<Searchbar style={styles.searchBar} 
    />
  <Text style={styles.pageTitle}>CURRENT OPENINGS</Text>
      {/* Grabs the API's JSON file and loops through the data using the item id as the key for the value pair(s).*/}
     <View> {data.map((item) => (
        <View style={styles.jobBlockContainer} key={item.id}>
          {/* Grabbing Job Title */}
        <Text style={styles.titleText}>{item.jobTitle}</Text> 
          {/* Grabbing Salary Amount */}
        <Text style={styles.salaryText}><Text style={styles.salaryHighlight}>Salary: </Text>{item.salary}</Text>
          {/* Button handles toggling the modal. This taught me that i need to reference () => or else it will go into an infinite loop lol. Also passes through all data from the JSON request to the setJobIDHandler allowing for the Modal to grab each piece of data for display. */}
          <Divider style={styles.pageDivider} />

          <Text style={styles.descriptionHideHack}><RenderHTML tagsStyles={tagsStyles} contentWidth={width} source={{html: item.jobDescriptionHtml}} 
        /></Text>
          {/* I can't believe this is how i got the lines to be limited. Unfortunately since i was unable to pull the amount of characters/lines down to 3 lines logically, i chose the next best thing. Lets just hide the overflow with a visual class. Absolute intelligence right here.*/}
        <Divider style={styles.blockContainerDivider}/>
        <Button style={styles.applyButton} mode="contained" compact={true} onPress={() => setJobValuesHandler([item.id, item.jobTitle, item.salary, item.jobDescriptionHtml])}> <Text style={styles.textButton}>Read more</Text></Button>
        </View>
      ))}
      </View>

      {/* Inline modal. Figured this was going to be the easiest way to implement. The correct way however would be to set this as component and call it externally. */}
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ScrollView> <View key={jobID} style={{backgroundColor: 'white', padding: 20, width: '100%', height: '200%',}}>
            <View style={styles.modalContainer}>
            <Pressable onPress={toggleModal}><FontAwesome style={{marginBottom: 30}} size={28} name="chevron-circle-left" color={'#776D6D'}></FontAwesome></Pressable>
            <Text style={styles.modalTitleText}>{jobTitle}</Text>
            <Text style={styles.salaryText}><Text style={styles.salaryHighlight}>Salary: </Text>{jobSalary}</Text>
            <Divider style={styles.pageDivider}/>
            <Text><RenderHTML contentWidth={width} tagsStyles={tagsStyles} source={{html: jobDescription}}/></Text>   
            </View>
          </View>

          </ScrollView>
          <Button style={styles.modalApplyButton} mode="contained" title="Apply Now"><Text style={styles.textButton}>Apply Now</Text></Button>
        </View>

      </Modal>
      </View>
  );
}

export default JobFetch;

const styles = StyleSheet.create({
  container: {
    margin: '7%',
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  modalContainer: {
  margin: '4%', 
  },
  jobBlockContainer: {
    overflow: 'hidden', 
    padding: 15, 
    paddingBottom: 0,
    marginBottom: 30, 
    borderRadius: 15, 
    backgroundColor: 'white',
    elevation: 3,
  },
  pageDivider: {
    padding: 1, 
    borderRadius: 20, 
    width:'100%', 
    backgroundColor: '#F3ECE7'
  },
  blockContainerDivider: {
    paddingTop: 20, 
    margin: -20, 
    marginTop: 20, 
    backgroundColor: 'white'
  },
  pageTitle: {
    width: '100%',
    fontFamily: 'Rubik-Bold', 
    textAlign: 'left', 
    margin:'auto', 
    paddingBottom: 12, 
    fontSize: 20,
    color: '#746F6B', 
  },
  titleText: {
    fontSize:16,
    fontFamily: 'Rubik-Bold',
    color: '#776D6D',
  },
  modalTitleText: {
    fontSize:20,
    fontFamily: 'Rubik-Bold',
    color: '#776D6D',
  },
  salaryText: {
    color: '#776D6D',
    fontFamily: 'Rubik-Light',
    fontSize: 16,
    marginTop: 0,
    marginBottom: 10,
  },
  salaryHighlight: {
    color: '#FFA25C',
    fontFamily: 'Rubik-SemiBold',
  },
  modalSalarySize: {
    fontSize: 16,
  },
  descriptionHideHack: {
    overflow: 'hidden', 
    height: 4 * 11,
  },
  applyButton: {
    borderRadius: 0, 
    width:'100%' + '5%', 
    marginLeft: -20, 
    marginRight: -20, 
    marginTop: 20,
    paddingTop: 5, 
    paddingBottom: 5, 
    backgroundColor: '#5CB9FF',
  },
  modalApplyButton: {
    width: '82%',
    margin: 'auto',
    marginBottom: 0,
    position: 'absolute',
    bottom: '6%',
    borderRadius: 15, 
    marginTop: 20,
    paddingTop: 5, 
    paddingBottom: 5, 
    backgroundColor: '#5CB9FF',
  },

  textButton: {
    color: '#fff',
    fontFamily: 'Rubik-SemiBold',
    fontSize: 16,
  },
  searchBar: {
    height: 'auto',
    width: '100%',
    margin: 'auto',
    backgroundColor: '#fff',
    elevation: 5,
    zIndex: 5,
    marginBottom: 10,
  },



}); 