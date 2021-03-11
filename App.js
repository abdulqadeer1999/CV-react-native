import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      
      {/* <Image source={require('./image/my.jpg')} style={{ width: 100, height: 100 }} />  */}
         <Image style = {{width : 200,height:200, borderRadius: 100}} source = {{uri:"https://avatars.githubusercontent.com/u/57321409?s=460&u=439a6cf61a9c94efdcaaec93e8e5cce79fb418a0&v=4" }} /> 
      
      <Text style = {{fontWeight : 'bold',fontSize : 30}}>Abdul Qadeer </Text>
      <Text>
      Address : House No 310 block 13/A gulshan e iqbal Karachi
      Email : aqsolangi009@gmail.com 
      Mobile  : 03058875502
      </Text>
    
      <Text style = {{fontWeight : "bold",fontSize : 30,marginRight : 250}}>Objective </Text>
      <Text>Seeking for a challenging position, where i can start and us my skillfull hand knowledge of computer
         oriented works
         in information technology field and help to grow the company to achieve its goal
         where i may flourish my career and the best outcome of my capabilities </Text>
      <Text style = {{fontSize : 30,fontWeight :"bold",marginRight:90}}>Personal Information</Text>
      <Text style = {styles.info} style = {{marginRight:240}}>Name : Abdul Qadeer
          
        </Text> 
        
          <Text style = {{marginRight:180}}>Father name : Raza Muhammad
          
          </Text> 
          <Text style = {{marginRight:220}}>Date of Birth : 06 jan 1999
          
          </Text> 
          <View style = {styles.edu}> 
            <Text  style = {styles.edu}>
            Education
            </Text>
          <Text>Matriculation : Board of intermediate and secondary education Sukkur</Text>
          <Text>Intermediate : Board of intermediate and secondary education Sukkur</Text>
          <Text>Bachelor : Dawood University of Engineering and Technology Karachi</Text>
          
        
          <Text style = {styles.certificates}>Certifications</Text>
          <Text>CCNA Routing and Switching</Text>
          <Text>Cisco crtified in Python with numpy and Pandas</Text>
          <Text>Cisco Certified in Libux</Text>
          <Text>Microsoft office specialist</Text>
          
          <Text style = {styles.skills} >Technical skills</Text>
          <Text>Web and Mobile app developer</Text>
          <Text>Troublshoting </Text>
          <Text>Knowledge about LAN,WAN,DHCP</Text>
          <Text>Knowledge reelated backend technologies like Nodejs,Expressjs,MongoDB</Text>
<br />

      <Text style = {styles.skills}  >Hobbies</Text>
      <Text>Playing Cricket</Text>
      <Text>Reading Books</Text>
      
          </View>
      <StatusBar style="auto" />
      
    </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    // flex: 2,
    backgroundColor: '#fff',
    marginLeft : "20px",
    marginTop:"20px",
    
    alignItems: 'center'
    // justifyContent: 'center',
  },
  edu : {
    flex : 2,
    fontSize : 30,
    fontWeight : "bold",
  },
  certificates : {
    flex : 2,
    fontWeight: "bold",
    fontSize : 30,
  },
  sills : {
    flex : 2,
    fontWeight: "bold",
    fontSize : 30,
  },
  info : {
    marginRight : "30px"
  },
  skills : {
    flex : 2,
    fontWeight: "bold",
    fontSize : 30,
  }
});
