import React, { useState, useEffect } from 'react'
import { useWindowDimensions, View, StyleSheet } from 'react-native'
import axios from 'axios';
import { PaperProvider, Text, Button, Divider } from 'react-native-paper'
import RenderHTML from 'react-native-render-html';

function JobFetch() {
  const [data, setData] = useState([]);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://data.palmcoastgov.com/api/jobs'); 
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
<View style={styles.container}>
  <Text style={{textAlign: 'center', margin:'auto', marginBottom: 20}} variant="headlineLarge">Current Openings</Text>
     <View> {data.map((item) => (
        <View style={{padding: 15, marginBottom: 10, borderRadius: 5, backgroundColor: 'white',}} key={item.id}>

          {/* Replace 'id' with the appropriate key for your data */}
        <Text style={{fontWeight:'900'}} variant="titleMedium">{item.jobTitle}</Text> 
          {/* Replace 'title' with the appropriate field */}
        <Text style={{marginBottom:5}} variant="bodyMedium"><Text variant="titleMedium">Salary: </Text>{item.salary}</Text>
          {/* Replace 'description' with the appropriate field*/}
        <Button style={{borderRadius: 10}} icon="arrow-right-bold-box-outline" mode="contained" compact={true}>Apply Here</Button>
        <Divider style={{padding: 1, marginTop: 20, marginBottom: 10, borderRadius: 20, width:'50%', marginLeft:'25%'}} />
        <Text variant="bodyMedium"><RenderHTML contentWidth={width} source={{html: item.jobDescriptionHtml}}/></Text>
        </View>
      ))}
      </View>
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
    flexDirection: 'row', 
    
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