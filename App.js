import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Favrites from './source/screens/Favrites';
import ContactTab from './source/screens/ContactTab';
import ContactSplash from './source/screens/ContactSplash';
import CreateContact from './source/screens/CreateContact';
import ContactDetails from './source/screens/ContactDetails';
const App = () => {
  const Stack = createNativeStackNavigator();

  const [contSplash, conSplash] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      conSplash(false)
    }, 2000)
  }, [])
 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ContactSplash'
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Tab' component={ContactTab} />
        {contSplash ? <Stack.Screen name='ContactSplash' component={ContactSplash} />
          :
          <Stack.Screen name='Favorit' component={Favrites} />
        }
        <Stack.Screen name='CreatCont' component={CreateContact} />
        <Stack.Screen name='ContDetails' component={ContactDetails}/>

      </Stack.Navigator >
    </NavigationContainer >
  )
}



export default App

const styles = StyleSheet.create({})
