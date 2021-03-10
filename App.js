import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      
      <Image source={require('./image/my.jpg')} style={{ width: 100, height: 100 }} />
      
      <Text h1>My CV </Text>
      

      <StatusBar style="auto" />
      
    </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft : "20px",
    marginTop:"20px",
    
    alignItems: 'center'
    // justifyContent: 'center',
  },
});
