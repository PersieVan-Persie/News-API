
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import InshortTabs from './components/InshortTabs';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Details from './Details';
import { useEffect, useState } from 'react';


const Stack = createNativeStackNavigator();




export default function App({navigation}) {

 
   

  return(
    <>
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="News" component={Home} />
      <Stack.Screen name="details" component={Details} />
        
       
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },
});
